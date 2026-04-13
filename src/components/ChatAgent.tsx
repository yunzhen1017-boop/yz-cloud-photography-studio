import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Message } from '../types';
import { chatWithAgent } from '../services/geminiService';

export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: '您好！我是主人的數位經紀人。很高興見到您！有什麼我可以幫您的嗎？不論是想了解攝影作品、技術專案，或是洽談合作，我都隨時待命。'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await chatWithAgent([...messages, userMessage]);
    
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl bg-primary text-white hover:bg-primary/90 z-40"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] z-50"
          >
            <Card className="flex flex-col h-full bg-zinc-950 border-zinc-800 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="p-4 border-bottom border-zinc-800 bg-zinc-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 border border-primary/30">
                    <AvatarImage src="https://api.dicebear.com/7.x/bottts/svg?seed=agent&backgroundColor=6d28d9" />
                    <AvatarFallback><Bot /></AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase italic">數位經紀人</h3>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Live</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-800"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                        <Avatar className="w-8 h-8 mt-1 border border-zinc-800">
                          {m.role === 'model' ? (
                            <AvatarImage src="https://api.dicebear.com/7.x/bottts/svg?seed=agent" />
                          ) : (
                            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                          )}
                          <AvatarFallback>{m.role === 'model' ? <Bot /> : <User />}</AvatarFallback>
                        </Avatar>
                        <div
                          className={`p-3 rounded-2xl text-sm leading-relaxed ${
                            m.role === 'user'
                              ? 'bg-primary text-white rounded-tr-none font-medium'
                              : 'bg-zinc-900 text-zinc-200 rounded-tl-none border border-zinc-800'
                          }`}
                        >
                          {m.content}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-3 max-w-[85%]">
                        <Avatar className="w-8 h-8 mt-1 border border-zinc-800">
                          <AvatarImage src="https://api.dicebear.com/7.x/bottts/svg?seed=agent" />
                          <AvatarFallback><Bot /></AvatarFallback>
                        </Avatar>
                        <div className="bg-zinc-900 text-zinc-400 p-3 rounded-2xl rounded-tl-none border border-zinc-800">
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={scrollRef} />
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t border-zinc-800 bg-zinc-950">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex gap-2"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="輸入訊息..."
                    className="bg-zinc-900 border-zinc-800 text-white focus-visible:ring-zinc-700"
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading || !input.trim()}
                    className="bg-primary text-white hover:bg-primary/90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
