import {
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import type { CustomerInfo, GalleryItem, Service } from "@/types";

import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { servicesData } from "@/data/services";

const steps = [
  { icon: FileText, id: 1, title: "Select Service" },
  { icon: Calendar, id: 2, title: "Choose Date & Time" },
  { icon: User, id: 3, title: "Your Information" },
];

export function BookingPage() {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  // Get gallery item from navigation state
  const galleryItem = (location.state as { galleryItem?: GalleryItem })
    ?.galleryItem;

  // Check if coming from gallery page with a pre-selected item
  useEffect(() => {
    const state = location.state as {
      fromGallery?: boolean;
      galleryItem?: GalleryItem;
    } | null;

    if (state?.fromGallery && state.galleryItem) {
      // Find matching service by category
      const matchingService = servicesData.find(
        (service) => service.category === state.galleryItem?.category,
      );

      if (matchingService) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedService(matchingService);
        // Automatically move to step 2 (date/time selection)
        setCurrentStep(2);
      }
    }
  }, [location.state]);

  // Generate available time slots
  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // In a real app, this would submit to an API
    alert("Booking submitted! (This is a demo)");
  };

  const canProceed = () => {
    if (currentStep === 1) return selectedService !== null;
    if (currentStep === 2) return selectedDate && selectedTime;
    if (currentStep === 3) {
      return (
        customerInfo.firstName &&
        customerInfo.lastName &&
        customerInfo.email &&
        customerInfo.phone
      );
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumb />
        <PageHeader
          subtitle="Book your appointment in just a few simple steps"
          title="Book An Appointment"
        />

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;

              return (
                <div key={step.id} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    {/* Step Circle */}
                    <motion.div
                      initial={false}
                      animate={{
                        backgroundColor:
                          isCompleted || isCurrent
                            ? "var(--color-primary)"
                            : "var(--color-card)",
                        borderColor:
                          isCompleted || isCurrent
                            ? "var(--color-primary)"
                            : "var(--color-border)",
                      }}
                      transition={{
                        damping: 30,
                        stiffness: 300,
                        type: "spring",
                      }}
                      className="flex size-12 items-center justify-center rounded-[12px] border-2"
                    >
                      {isCompleted ? (
                        <Check className="size-6 text-primary-foreground" />
                      ) : (
                        <Icon
                          className={`size-6 ${isCurrent ? "text-primary-foreground" : "text-muted-foreground"}`}
                        />
                      )}
                    </motion.div>

                    {/* Step Title */}
                    <span
                      className={`mt-2 hidden font-sans text-sm font-medium sm:block ${
                        isCurrent || isCompleted
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={false}
                      animate={{
                        backgroundColor:
                          currentStep > step.id
                            ? "var(--color-primary)"
                            : "var(--color-border)",
                      }}
                      transition={{
                        damping: 30,
                        stiffness: 300,
                        type: "spring",
                      }}
                      className="mx-2 h-0.5 flex-1"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Container */}
        <div className="rounded-[24px] border-2 border-border bg-card p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Select Service */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ damping: 30, stiffness: 300, type: "spring" }}
              >
                <h3 className="mb-6 font-serif text-2xl font-semibold text-foreground">
                  Choose Your Service
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {servicesData.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`rounded-[16px] border-2 p-4 text-left transition-all duration-200 ${
                        selectedService?.id === service.id
                          ? "border-primary bg-primary/5"
                          : "border-border bg-background hover:border-secondary"
                      }`}
                    >
                      <h4 className="mb-1 font-sans text-base font-semibold text-foreground">
                        {service.name}
                      </h4>
                      <p className="mb-2 font-sans text-sm text-muted-foreground line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-lg font-bold text-primary">
                          ${service.price}
                        </span>
                        <span className="font-sans text-sm text-muted-foreground">
                          {service.duration} min
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Date & Time */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ damping: 30, stiffness: 300, type: "spring" }}
              >
                <h3 className="mb-6 font-serif text-2xl font-semibold text-foreground">
                  Select Date & Time
                </h3>

                {/* Selected Service Summary */}
                {selectedService && (
                  <div className="mb-6 space-y-4">
                    {/* Gallery Item Preview (if coming from gallery) */}
                    {galleryItem && (
                      <div className="rounded-[16px] border-2 border-secondary bg-card p-3">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <img
                              src={galleryItem.imageUrl}
                              alt={galleryItem.title}
                              className="h-20 w-20 rounded-[12px] object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="mb-1 font-sans text-xs text-muted-foreground">
                              Selected Design
                            </p>
                            <h4 className="mb-1 font-serif text-base font-semibold text-foreground">
                              {galleryItem.title}
                            </h4>
                            {galleryItem.description && (
                              <p className="font-sans text-xs text-muted-foreground">
                                {galleryItem.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Service Summary */}
                    <div className="rounded-[12px] border border-border bg-background p-4">
                      <p className="mb-1 font-sans text-sm text-muted-foreground">
                        Selected Service
                      </p>
                      <p className="font-sans text-lg font-semibold text-foreground">
                        {selectedService.name} - ${selectedService.price}
                      </p>
                    </div>
                  </div>
                )}

                {/* Date Picker */}
                <div className="mb-6">
                  <label className="mb-2 block font-sans text-sm font-medium text-foreground">
                    Select Date
                  </label>
                  <DatePicker
                    date={selectedDate}
                    onSelect={setSelectedDate}
                    placeholder="Choose your appointment date"
                  />
                </div>

                {/* Time Slots */}
                <div>
                  <label className="mb-3 block font-sans text-sm font-medium text-foreground">
                    Select Time
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-[8px] border px-3 py-2 font-sans text-sm font-medium transition-all duration-200 ${
                          selectedTime === time
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-foreground hover:border-secondary"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Customer Information */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ damping: 30, stiffness: 300, type: "spring" }}
              >
                <h3 className="mb-6 font-serif text-2xl font-semibold text-foreground">
                  Your Information
                </h3>

                <div className="space-y-4">
                  {/* First Name */}
                  <div>
                    <label className="mb-2 block font-sans text-sm font-medium text-foreground">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.firstName}
                      onChange={(e) =>
                        setCustomerInfo({
                          ...customerInfo,
                          firstName: e.target.value,
                        })
                      }
                      className="w-full rounded-[12px] border border-border bg-background px-4 py-3 font-sans text-foreground transition-colors duration-200 focus:border-primary focus:outline-none"
                      placeholder="John"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="mb-2 block font-sans text-sm font-medium text-foreground">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.lastName}
                      onChange={(e) =>
                        setCustomerInfo({
                          ...customerInfo,
                          lastName: e.target.value,
                        })
                      }
                      className="w-full rounded-[12px] border border-border bg-background px-4 py-3 font-sans text-foreground transition-colors duration-200 focus:border-primary focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block font-sans text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) =>
                        setCustomerInfo({
                          ...customerInfo,
                          email: e.target.value,
                        })
                      }
                      className="w-full rounded-[12px] border border-border bg-background px-4 py-3 font-sans text-foreground transition-colors duration-200 focus:border-primary focus:outline-none"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block font-sans text-sm font-medium text-foreground">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) =>
                        setCustomerInfo({
                          ...customerInfo,
                          phone: e.target.value,
                        })
                      }
                      className="w-full rounded-[12px] border border-border bg-background px-4 py-3 font-sans text-foreground transition-colors duration-200 focus:border-primary focus:outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="rounded-[12px]"
            >
              <ChevronLeft className="size-5" />
              Previous
            </Button>

            {currentStep < 3 ? (
              <Button
                size="lg"
                onClick={handleNext}
                disabled={!canProceed()}
                className="rounded-[12px]"
              >
                Next
                <ChevronRight className="size-5" />
              </Button>
            ) : (
              <Button
                size="lg"
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="rounded-[12px]"
              >
                <Check className="size-5" />
                Confirm Booking
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
