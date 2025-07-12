"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:mtsegay@gmu.edu";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+16478888888";
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/your-profile", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/your-username", "_blank");
  };

  return (
    <section className="pt-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always excited to explore new opportunities, collaborate on
            interesting projects, and connect with fellow developers. Let's
            build something amazing together!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="flex flex-row gap-2 mb-16">
          {/* Email Card */}
          <div
            className="group relative bg-background border border-border rounded-2xl p-4 w-3/5 mx-auto hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            onClick={handleEmailClick}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6 hover:scale-105 transition-all duration-300 justify-center">
                <div className="w-16 h-16 bg-foreground/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
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
                mtsegay@gmu.edu
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div
            className="group relative bg-background border border-border rounded-2xl p-4 w-3/5 mx-auto hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
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
                +1 (647) 888-8888
              </p>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-card-foreground mb-8">
            Connect With Me
          </h2>
          <div className="flex justify-center gap-6">
            {/* LinkedIn */}
            <button
              onClick={handleLinkedInClick}
              className="group relative w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <Icon
                icon="mdi:linkedin"
                className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300"
              />
            </button>

            {/* GitHub */}
            <button
              onClick={handleGitHubClick}
              className="group relative w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <Icon
                icon="mdi:github"
                className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
