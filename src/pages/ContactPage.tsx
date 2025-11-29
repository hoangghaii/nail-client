import { Phone, Mail, MapPin, Clock } from "lucide-react";

import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { contactInfo, businessHours } from "@/data/businessInfo";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumb />
        <PageHeader
          subtitle="Have questions or ready to book? We'd love to hear from you."
          title="Get In Touch"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details Card */}
            <div className="rounded-[24px] border border-border bg-card p-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="rounded-[12px] bg-muted p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-muted-foreground mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="font-sans text-base text-foreground hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="rounded-[12px] bg-muted p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-muted-foreground mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-sans text-base text-foreground hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="rounded-[12px] bg-muted p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-muted-foreground mb-1">
                      Address
                    </p>
                    <address className="font-sans text-base text-foreground not-italic">
                      {contactInfo.address.street}
                      <br />
                      {contactInfo.address.city}, {contactInfo.address.state}{" "}
                      {contactInfo.address.zip}
                    </address>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="rounded-[12px] bg-muted p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-muted-foreground mb-2">
                      Business Hours
                    </p>
                    <div className="space-y-1">
                      {businessHours.map((schedule) => (
                        <div
                          key={schedule.day}
                          className="flex justify-between gap-4 font-sans text-sm text-foreground"
                        >
                          <span>{schedule.day}</span>
                          <span className="text-muted-foreground">
                            {schedule.closed
                              ? "Closed"
                              : `${schedule.open} - ${schedule.close}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Book CTA */}
            <div className="rounded-[24px] border border-border bg-primary p-8 text-primary-foreground">
              <h3 className="font-serif text-2xl font-semibold mb-3">
                Ready to Book?
              </h3>
              <p className="font-sans text-base opacity-90 mb-6">
                Schedule your appointment online and get confirmed instantly.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground"
              >
                Book An Appointment
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[24px] border border-border bg-card p-8">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Send Us A Message
            </h2>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-sm font-medium text-foreground mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-[12px] border border-input bg-background px-4 py-3 font-sans text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-[12px] border border-input bg-background px-4 py-3 font-sans text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block font-sans text-sm font-medium text-foreground mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-[12px] border border-input bg-background px-4 py-3 font-sans text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-[12px] border border-input bg-background px-4 py-3 font-sans text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
