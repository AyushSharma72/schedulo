import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FeaturesSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const features = [
    { id: "01", title: "Secure Authentication" },
    { id: "02", title: "Smart Scheduling" },
    { id: "03", title: "Candidate Management" },
    { id: "04", title: "Automated Approvals" },
    { id: "05", title: "Email Notifications" },
    { id: "06", title: "Dashboard Analytics" },
  ];

  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <span className="text-primary font-semibold mb-2">• Features</span>

          <h2 className="text-4xl lg:text-5xl font-bold text-base-strong mb-6 leading-tight">
            Powerful Features for <br />
            <span className="text-primary"> Modern Hiring</span>
          </h2>

          <p className="text-lg text-base max-w-2xl mx-auto">
            Everything you need to create a professional, automated interview
            scheduling experience
          </p>

          <img
            src="/homePageImages/features.svg"
            alt="Illustration"
            className="w-full max-w-sm mt-6"
          />
        </div>

        <div className="flex flex-col gap-5 overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="
                border border-surface 
                rounded-xl p-6 
                bg-surface/10
                hover:border-primary 
                transition-all
              "
            >
              <div className="flex items-center gap-4">
                <span className="text-primary font-semibold text-lg">
                  {feature.id}
                </span>

                <h3 className="text-base-strong font-semibold text-lg">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
