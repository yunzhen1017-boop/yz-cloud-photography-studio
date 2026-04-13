import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Maximize2, X } from 'lucide-react';
import { Photo } from '../types';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface GalleryProps {
  photos: Photo[];
}

export default function Gallery({ photos }: GalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleDownload = (photo: Photo) => {
    // In a real app, you'd fetch the blob and download it.
    // For this demo, we'll just open the high-res link.
    window.open(photo.url, '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8">
      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          layoutId={`photo-${photo.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          className="group cursor-pointer"
          onClick={() => setSelectedPhoto(photo)}
        >
          <Card className="overflow-hidden bg-zinc-900 border-zinc-800 relative aspect-[3/2] group-hover:border-primary/50 transition-colors">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <Button size="icon" variant="secondary" className="rounded-full bg-white text-black">
                <Maximize2 className="w-5 h-5" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent">
              <Badge className="mb-2 bg-primary text-white border-none font-bold italic">
                {photo.category}
              </Badge>
              <h3 className="text-white font-black text-xl uppercase italic tracking-tight">{photo.title}</h3>
            </div>
          </Card>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              layoutId={`photo-${selectedPhoto.id}`}
              className="relative max-w-5xl w-full bg-zinc-950 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="w-6 h-6" />
              </Button>

              <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                <div className="flex-1 bg-black flex items-center justify-center">
                  <img
                    src={selectedPhoto.url}
                    alt={selectedPhoto.title}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full md:w-80 p-8 flex flex-col justify-between bg-zinc-900">
                  <div>
                    <Badge className="mb-4 bg-zinc-800 text-zinc-300 hover:bg-zinc-700">
                      {selectedPhoto.category}
                    </Badge>
                    <h2 className="text-3xl font-light text-white mb-4">{selectedPhoto.title}</h2>
                    <p className="text-zinc-400 leading-relaxed">
                      {selectedPhoto.description}
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full mt-8 bg-white text-black hover:bg-zinc-200"
                    onClick={() => handleDownload(selectedPhoto)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    下載原圖
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
