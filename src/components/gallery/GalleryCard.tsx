import { Clock, DollarSign } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

import type { GalleryItem } from "@/types";

import { Button } from "@/components/ui/button";

interface GalleryCardProps {
  index: number;
  item: GalleryItem;
  onImageClick?: () => void;
}

export function GalleryCard({ index, item, onImageClick }: GalleryCardProps) {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Navigate to booking page with gallery item data
    navigate("/booking", {
      state: {
        fromGallery: true,
        galleryItem: item,
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        damping: 30,
        delay: index * 0.05,
        stiffness: 300,
        type: "spring",
      }}
      className="group flex h-full flex-col rounded-[20px] border-2 border-secondary bg-card p-2 transition-colors duration-200 hover:border-primary"
    >
      {/* Gold-framed image */}
      <div
        className="relative mb-4 cursor-pointer overflow-hidden rounded-[16px]"
        onClick={onImageClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onImageClick?.();
          }
        }}
      >
        <img
          alt={item.title}
          className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={item.imageUrl}
        />
        {/* Hover overlay hint */}
        <div className="absolute inset-0 flex items-center justify-center rounded-[16px] bg-foreground/0 opacity-0 transition-all duration-200 group-hover:bg-foreground/10 group-hover:opacity-100">
          <span className="rounded-[8px] border border-background bg-background/90 px-3 py-1.5 font-sans text-xs font-medium text-foreground">
            Click to view
          </span>
        </div>
      </div>

      {/* Content area - grows to fill space */}
      <div className="flex flex-1 flex-col px-2">
        {/* Title */}
        <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
          {item.title}
        </h3>

        {/* Description */}
        {item.description && (
          <p className="mb-4 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        )}

        {/* Price and Duration */}
        <div className="mb-4 flex items-center justify-between gap-3 rounded-[12px] border border-border bg-background p-3">
          {item.price && (
            <div className="flex items-center gap-1.5">
              <DollarSign className="size-4 text-primary" />
              <span className="font-sans text-base font-semibold text-foreground">
                {item.price}
              </span>
            </div>
          )}

          {item.duration && (
            <div className="flex items-center gap-1.5">
              <Clock className="size-4 text-secondary" />
              <span className="font-sans text-sm text-muted-foreground">
                {item.duration}
              </span>
            </div>
          )}
        </div>

        {/* Book Now Button */}
        <Button
          className="w-full rounded-[12px]"
          onClick={handleBookNow}
          size="default"
          variant="default"
        >
          Book Now
        </Button>
      </div>
    </motion.div>
  );
}
