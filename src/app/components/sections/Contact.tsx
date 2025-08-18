"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { socialLinks } from "@/app/constants/links";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = socialLinks.email.link;
  };

  const handlePhoneClick = () => {
    window.location.href = socialLinks.phone.link;
  };

  const handleLinkedInClick = () => {
    window.open(socialLinks.linkedin, "_blank");
  };

  return (
    <section id="contact" className="py-[7%] px-4 relative overflow-hidden">
      {/* Background decorative elements */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I&apos;m always excited to explore new opportunities, collaborate on
            interesting projects, and connect with fellow developers. Let&apos;s
            build something amazing together!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="flex flex-col md:flex-row gap-2 sm:gap-8 mb-16">
          {/* Email Card */}
          <div
            className="group relative bg-background border-t border-border rounded-2xl p-4 md:w-3/5 md:mx-auto hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            onClick={handleEmailClick}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6 hover:scale-105 transition-all duration-300 justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon
                    icon="mdi:email-outline"
                    className="w-8 h-8 text-foreground"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground">
                    Email
                  </h3>
                </div>
              </div>
              <p className="text-lg text-foreground font-medium group-hover:text-primary-hover transition-colors duration-300 text-center">
                {socialLinks.email.label}
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div
            className="group relative bg-background border-t border-border rounded-2xl p-4 md:w-3/5 md:mx-auto hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            onClick={handlePhoneClick}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6  hover:scale-105 transition-all duration-300 justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon
                    icon="mdi:phone-outline"
                    className="w-8 h-8 text-foreground"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground">
                    Phone
                  </h3>
                </div>
              </div>
              <p className="text-lg text-foreground font-medium group-hover:text-primary-hover transition-colors duration-300 text-center">
                {socialLinks.phone.label}
              </p>
            </div>
          </div>
          {/* Linked In Card */}
          <div
            className="group relative bg-background border-t border-border rounded-2xl p-4 md:w-3/5 md:mx-auto hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            onClick={handleLinkedInClick}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6  hover:scale-105 transition-all duration-300 justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon
                    icon="mdi:linkedin"
                    className="w-8 h-8 text-foreground"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground">
                    LinkedIn
                  </h3>
                </div>
              </div>
              <p className="text-lg text-foreground font-medium group-hover:text-primary-hover transition-colors duration-300 text-center">
                Markose Tsegaye
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
