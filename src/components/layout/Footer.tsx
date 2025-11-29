import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import { contactInfo, businessHours } from "@/data/businessInfo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground rounded-t-[32px] mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand & Description */}
          <div>
            <h3 className="font-serif text-2xl font-bold">Pink.</h3>
            <p className="mt-4 text-sm leading-relaxed opacity-90">
              Premium nail care and artistry in San Francisco. Where beauty
              meets craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-sm transition-opacity hover:opacity-80"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm transition-opacity hover:opacity-80"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-sm transition-opacity hover:opacity-80"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm transition-opacity hover:opacity-80"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Hours */}
          <div>
            <h4 className="font-sans text-lg font-semibold">Contact</h4>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm transition-opacity hover:opacity-80"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm transition-opacity hover:opacity-80"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5" />
                <address className="text-sm not-italic">
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.city}, {contactInfo.address.state}{" "}
                  {contactInfo.address.zip}
                </address>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium">Hours</p>
              <p className="mt-1 text-sm opacity-90">
                {businessHours.find((h) => !h.closed)?.open} -{" "}
                {businessHours.find((h) => !h.closed)?.close}
              </p>
              <p className="text-sm opacity-90">Mon - Sat</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-80">
            © {currentYear} Pink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
