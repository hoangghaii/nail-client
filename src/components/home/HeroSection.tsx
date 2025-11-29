import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-16 lg:py-20">
      {/* Large Organic Blob Background */}
      <motion.div
        className="absolute -top-32 left-0 right-0 h-[300px] md:h-[550px] bg-muted/40"
        style={{
          clipPath: "ellipse(120% 100% at 50% 0%)",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Hero Content - Horizontal Layout */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content & CTAs */}
          <motion.div
            className="order-1 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tagline */}
            <motion.p
              className="font-sans text-base md:text-lg text-secondary font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Where Beauty Meets Artistry
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Premium Nail Care
            </motion.h1>

            {/* Description */}
            <motion.p
              className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Experience the art of beautiful nails with our expert technicians
              and premium products. Your perfect manicure awaits.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link to="/booking">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-w-[180px] h-14 text-base font-semibold"
                >
                  Đặt Lịch Ngay
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto min-w-[180px] h-14 text-base font-semibold"
                >
                  Xem Dịch Vụ
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            className="order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image container with primary border */}
            <motion.div
              className="relative rounded-[40px] border-[6px] border-primary p-4 bg-card"
              whileHover={{
                borderColor: "var(--color-secondary)",
                scale: 1.02,
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Hero Image */}
              <div className="overflow-hidden rounded-[32px]">
                <motion.img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=800&fit=crop"
                  alt="Premium nail art design"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
