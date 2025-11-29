import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Image with Offset Border Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px", once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Offset border layer - background decoration */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-full h-full rounded-[32px] bg-secondary"
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Main image with primary border frame */}
              <motion.div
                className="relative rounded-[32px] border-4 border-primary p-3 bg-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&h=600&fit=crop"
                  alt="Nail salon interior"
                  className="w-full h-auto object-cover rounded-[24px]"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px", once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl font-semibold text-foreground"
            >
              Về Chúng Tôi
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 font-sans text-base lg:text-lg leading-relaxed text-muted-foreground"
            >
              We believe in creating a luxurious, relaxing experience for every
              client. Our expert nail technicians use only premium products to
              ensure your nails look and feel their absolute best.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 font-sans text-base lg:text-lg leading-relaxed text-muted-foreground"
            >
              Step into our warm, organic space and let us pamper you with our
              signature treatments. From classic manicures to intricate nail
              art, we bring your vision to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8"
            >
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
