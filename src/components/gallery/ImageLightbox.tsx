import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

import type { GalleryItem } from "@/types";

interface ImageLightboxProps {
  hasNext?: boolean;
  hasPrevious?: boolean;
  isOpen: boolean;
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

export function ImageLightbox({
  hasNext = false,
  hasPrevious = false,
  isOpen,
  item,
  onClose,
  onNext,
  onPrevious,
}: ImageLightboxProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft" && hasPrevious && onPrevious) {
        onPrevious();
      } else if (e.key === "ArrowRight" && hasNext && onNext) {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, hasNext, hasPrevious, onNext, onPrevious]);

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-foreground/95"
            onClick={onClose}
          />

          {/* Lightbox Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ damping: 30, stiffness: 300, type: "spring" }}
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-[12px] border-2 border-border bg-background p-3 text-foreground transition-colors duration-200 hover:border-primary hover:bg-card"
              aria-label="Close lightbox"
            >
              <X className="size-6" />
            </motion.button>

            {/* Previous Button */}
            {hasPrevious && onPrevious && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  damping: 30,
                  delay: 0.1,
                  stiffness: 300,
                  type: "spring",
                }}
                onClick={onPrevious}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-[12px] border-2 border-border bg-background p-3 text-foreground transition-colors duration-200 hover:border-primary hover:bg-card"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-6" />
              </motion.button>
            )}

            {/* Next Button */}
            {hasNext && onNext && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{
                  damping: 30,
                  delay: 0.1,
                  stiffness: 300,
                  type: "spring",
                }}
                onClick={onNext}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-[12px] border-2 border-border bg-background p-3 text-foreground transition-colors duration-200 hover:border-primary hover:bg-card"
                aria-label="Next image"
              >
                <ChevronRight className="size-6" />
              </motion.button>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ damping: 30, stiffness: 300, type: "spring" }}
              className="relative flex max-h-[90vh] max-w-5xl flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold-framed image */}
              <div className="rounded-[24px] border-2 border-secondary bg-card p-3">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="max-h-[75vh] w-auto rounded-[20px] object-contain"
                />
              </div>

              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  damping: 30,
                  delay: 0.15,
                  stiffness: 300,
                  type: "spring",
                }}
                className="mt-4 rounded-[16px] border border-border bg-background p-4"
              >
                <h3 className="mb-1 font-serif text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="font-sans text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}
                {(item.price || item.duration) && (
                  <div className="mt-3 flex items-center gap-4 border-t border-border pt-3">
                    {item.price && (
                      <span className="font-sans text-lg font-semibold text-primary">
                        {item.price}
                      </span>
                    )}
                    {item.duration && (
                      <span className="font-sans text-sm text-muted-foreground">
                        {item.duration}
                      </span>
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
