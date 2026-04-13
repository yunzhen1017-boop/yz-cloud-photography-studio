import { motion } from 'motion/react';
import { Camera, Instagram, Twitter, Mail, Github } from 'lucide-react';
import Gallery from './components/Gallery';
import ChatAgent from './components/ChatAgent';
import { PHOTOS } from './constants';
import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';
import { Input } from './components/ui/input';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-10 mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Camera className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold tracking-tighter uppercase italic">yz cloud</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6"
        >
          <a href="#" className="text-xs uppercase tracking-widest hover:opacity-60 transition-opacity">Works</a>
          <a href="#" className="text-xs uppercase tracking-widest hover:opacity-60 transition-opacity">About</a>
          <a href="#" className="text-xs uppercase tracking-widest hover:opacity-60 transition-opacity">Contact</a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1493397212122-2b85cee25a24?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
        </motion.div>

        <div className="relative z-10 space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xs uppercase tracking-[0.4em] text-primary font-bold"
          >
            Sports Action Photographer
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none uppercase"
          >
            Freeze the <br />
            <span className="text-primary">Passion</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-8"
          >
            <Button variant="outline" className="rounded-full px-8 py-6 border-zinc-700 hover:bg-white hover:text-black transition-all duration-500">
              Explore Portfolio
            </Button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent mx-auto" />
        </motion.div>
      </header>

      {/* Gallery Section */}
      <main className="max-w-7xl mx-auto py-20 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-black tracking-tight uppercase italic">精選賽事瞬間</h2>
            <p className="text-zinc-500 max-w-md">
              捕捉運動場上那 0.01 秒的熱血瞬間，記錄每一場史詩般的對決。
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
            {['全部', '后綜高中', '豐原高中', '高中籃球', '大專籃球', '職業籃球', '其他'].map((cat) => (
              <Button key={cat} variant="ghost" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-primary hover:bg-primary/10 whitespace-nowrap">
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <Gallery photos={PHOTOS} />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 py-20 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-primary" />
              <span className="text-lg font-bold tracking-tighter uppercase italic">yz cloud</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              致力於透過鏡頭捕捉運動場上的極致瞬間，記錄熱血與鬥志。
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-zinc-400">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-zinc-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-zinc-400 transition-colors">Works</a></li>
              <li><a href="#" className="hover:text-zinc-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-zinc-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-zinc-400">Social</h4>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full border border-zinc-800 hover:bg-white hover:text-black">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full border border-zinc-800 hover:bg-white hover:text-black">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full border border-zinc-800 hover:bg-white hover:text-black">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-zinc-400">Newsletter</h4>
            <div className="flex gap-2">
              <Input placeholder="Email address" className="bg-zinc-900 border-zinc-800 rounded-full px-4" />
              <Button variant="outline" size="icon" className="rounded-full border-zinc-800 hover:bg-white hover:text-black shrink-0">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-zinc-900" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          <p>© 2026 yz cloud photography studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* AI Agent */}
      <ChatAgent />
    </div>
  );
}
