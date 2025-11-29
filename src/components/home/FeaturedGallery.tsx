import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { getFeaturedGallery } from "@/data/gallery";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function FeaturedGallery() {
  const featuredItems = getFeaturedGallery();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-center md:mb-12"
        >
          <h2 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
            Thư viện ảnh
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground lg:text-lg">
            Explore our portfolio of stunning nail art and designs
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px", once: true }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {featuredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-[20px] border-2 border-secondary p-2 bg-card transition-all hover:border-primary"
            >
              {/* Gold-framed image */}
              <div className="overflow-hidden rounded-[16px]">
                <motion.img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-64 w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-2 flex items-end rounded-[16px] bg-primary/90 p-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-sans text-sm font-semibold text-primary-foreground">
                  {item.title}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-12 text-center"
        >
          <Link to="/gallery">
            <Button variant="outline" size="lg" className="group">
              <span className="font-sans text-base font-semibold">
                View Full Gallery
              </span>
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                →
              </motion.span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
