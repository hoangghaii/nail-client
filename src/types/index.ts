export * from "./service.types";
export * from "./booking.types";
export * from "./gallery.types";

export interface BusinessHours {
  close: string;
  closed?: boolean;
  day: string;
  open: string;
}

export interface ContactInfo {
  address: {
    city: string;
    state: string;
    street: string;
    zip: string;
  };
  email: string;
  phone: string;
}
