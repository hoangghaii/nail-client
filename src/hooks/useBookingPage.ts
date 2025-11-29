import { Calendar, FileText, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import type { CustomerInfo, GalleryItem, Service } from "@/types";

import { servicesData } from "@/data/services";

const steps = [
  { icon: FileText, id: 1, title: "Chọn Dịch Vụ" },
  { icon: Calendar, id: 2, title: "Chọn Ngày & Giờ" },
  { icon: User, id: 3, title: "Thông Tin" },
];

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

export function useBookingPage() {
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

  return {
    canProceed,
    currentStep,
    customerInfo,
    galleryItem,
    handleNext,
    handlePrevious,
    handleSubmit,
    selectedDate,
    selectedService,
    selectedTime,
    setCustomerInfo,
    setSelectedDate,
    setSelectedService,
    setSelectedTime,
    steps,
    timeSlots,
  };
}
