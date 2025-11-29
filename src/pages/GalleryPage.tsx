import { motion } from "motion/react";
import { useState } from "react";

import type { GalleryItem } from "@/types";

import { GalleryCard } from "@/components/gallery/GalleryCard";
import { ImageLightbox } from "@/components/gallery/ImageLightbox";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageHeader } from "@/components/shared/PageHeader";
import { galleryData, GalleryCategory } from "@/data/gallery";

const categories = [
  { label: "All", value: "all" },
  { label: "Manicures", value: GalleryCategory.MANICURE },
  { label: "Pedicures", value: GalleryCategory.PEDICURE },
  { label: "Nail Art", value: GalleryCategory.NAIL_ART },
  { label: "Extensions", value: GalleryCategory.EXTENSIONS },
];

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredGallery =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const handleImageClick = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filteredGallery.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredGallery[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredGallery[prevIndex]);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumb />
        <PageHeader
          subtitle="Explore our portfolio of stunning nail art and designs. Every nail tells a story."
          title="Our Gallery"
        />

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ damping: 30, stiffness: 300, type: "spring" }}
              onClick={() => setSelectedCategory(category.value)}
              className={`rounded-[12px] px-6 py-3 font-sans font-medium transition-colors duration-200 ${
                selectedCategory === category.value
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground hover:border-secondary"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGallery.map((item, index) => (
            <GalleryCard
              key={item.id}
              index={index}
              item={item}
              onImageClick={() => handleImageClick(item, index)}
            />
          ))}
        </div>

        {/* Image Lightbox */}
        <ImageLightbox
          isOpen={lightboxOpen}
          item={selectedImage}
          onClose={closeLightbox}
          onNext={handleNext}
          onPrevious={handlePrevious}
          hasNext={filteredGallery.length > 1}
          hasPrevious={filteredGallery.length > 1}
        />

        {/* No results message */}
        {filteredGallery.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <p className="font-sans text-lg text-muted-foreground">
              No items found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
