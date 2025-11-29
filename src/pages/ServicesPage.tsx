import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ServiceCard } from "@/components/services/ServiceCard";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import { ServiceCategory } from "@/types";

const categories = [
  { label: "All Services", value: "all" },
  { label: "Manicure", value: ServiceCategory.MANICURE },
  { label: "Pedicure", value: ServiceCategory.PEDICURE },
  { label: "Nail Art", value: ServiceCategory.NAIL_ART },
  { label: "Extensions", value: ServiceCategory.EXTENSIONS },
  { label: "Spa", value: ServiceCategory.SPA },
];

export function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredServices =
    selectedCategory === "all"
      ? servicesData
      : servicesData.filter((service) => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumb />
        <PageHeader
          subtitle="Discover our range of premium nail care services designed to make you look and feel your best"
          title="Our Services"
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} index={index} service={service} />
          ))}
        </div>

        {/* No results message */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <p className="font-sans text-lg text-muted-foreground">
              No services found in this category.
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            damping: 30,
            delay: 0.3,
            stiffness: 300,
            type: "spring",
          }}
          className="mt-16 rounded-[32px] border-2 border-border bg-muted p-8 text-center sm:p-12"
        >
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground lg:text-lg">
            Book your appointment today and experience the difference of premium
            nail care
          </p>
          <Link to="/booking">
            <Button className="rounded-[12px]" size="lg">
              Book An Appointment
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
