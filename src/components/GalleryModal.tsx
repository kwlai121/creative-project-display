import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import FocusLock from 'react-focus-lock';

interface GalleryModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex: number;
  projectTitle: string;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  images,
  isOpen,
  onClose,
  initialIndex,
  projectTitle
}) => {
  const MIN_SCALE = 1;
  const MAX_SCALE = 4;
  const CLICK_ZOOM_SCALE = 2;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const dragStateRef = useRef({ startX: 0, startY: 0, originX: 0, originY: 0, moved: false });

  // Update currentIndex when initialIndex prop changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Reset zoom/pan whenever the active image changes
  useEffect(() => {
    setScale(1);
    setIsDragging(false);
    setPanOffset({ x: 0, y: 0 });
  }, [currentIndex]);

  // Snap the pan back to center once fully zoomed out
  useEffect(() => {
    if (scale === 1) setPanOffset({ x: 0, y: 0 });
  }, [scale]);

  const isZoomed = scale > 1;

  const handleImageWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomSpeed = 0.0015;
    setScale((prev) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev - e.deltaY * zoomSpeed)));
  };

  const handleImageMouseDown = (e: React.MouseEvent) => {
    if (!isZoomed) return;
    e.preventDefault();
    dragStateRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: panOffset.x,
      originY: panOffset.y,
      moved: false,
    };
    setIsDragging(true);
  };

  const handleImageMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dragState = dragStateRef.current;
    const dx = e.clientX - dragState.startX;
    const dy = e.clientY - dragState.startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) dragState.moved = true;
    setPanOffset({ x: dragState.originX + dx, y: dragState.originY + dy });
  };

  const handleImageMouseUp = () => {
    setIsDragging(false);
  };

  const handleImageClick = () => {
    // Skip the zoom toggle if the mouse was dragged rather than clicked
    if (dragStateRef.current.moved) {
      dragStateRef.current.moved = false;
      return;
    }
    setScale((prev) => (prev > 1 ? 1 : CLICK_ZOOM_SCALE));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="w-screen h-screen max-w-none p-0 border-0 bg-black/95 [&>button]:hidden"
        onKeyDown={handleKeyDown}
      >
        <FocusLock disabled={!isOpen}>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </Button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-50 text-white bg-black/50 px-3 py-1 rounded-full text-sm" aria-live="polite" aria-atomic="true">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" aria-hidden="true" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" aria-hidden="true" />
                </Button>
              </>
            )}

            {/* Main Image */}
            <div
              className="w-full h-full flex items-center justify-center p-8 overflow-hidden"
              onWheel={handleImageWheel}
              onMouseMove={handleImageMouseMove}
              onMouseUp={handleImageMouseUp}
              onMouseLeave={handleImageMouseUp}
            >
              <img
                src={images[currentIndex]}
                alt={`${projectTitle} - Gallery Image ${currentIndex + 1}`}
                onClick={handleImageClick}
                onMouseDown={handleImageMouseDown}
                draggable={false}
                style={{
                  transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${scale})`,
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                }}
                className={`h-[calc(100vh-120px)] w-auto max-w-full object-contain select-none ${
                  isZoomed ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-in'
                }`}
                aria-label={isZoomed ? 'Scroll or drag to pan, click to zoom out' : 'Scroll or click to zoom in'}
              />
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-lg">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-12 h-8 rounded overflow-hidden border-2 transition-all ${
                      index === currentIndex 
                        ? 'border-white scale-110' 
                        : 'border-white/30 hover:border-white/60'
                    }`}
                    aria-label={`View image ${index + 1} of ${images.length}`}
                    aria-current={index === currentIndex ? 'true' : 'false'}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </FocusLock>
      </DialogContent>
    </Dialog>
  );
};