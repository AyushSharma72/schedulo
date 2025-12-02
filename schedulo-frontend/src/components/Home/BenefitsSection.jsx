import { CheckCircle } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Reduce Coordination Overhead",
      desc: "Automate 80% of scheduling communication",
    },
    {
      title: "Improve Candidate Experience",
      desc: "24/7 self-service booking with instant confirmations",
    },
    {
      title: "Secure & Compliant",
      desc: "Enterprise-grade security with encrypted data handling",
    },
    {
      title: "Real-time Insights",
      desc: "Dashboard monitoring of your entire hiring pipeline",
    },
  ];

  const stats = [
    { value: "80%", label: "Time Saved on Coordination" },
    { value: "100%", label: "Automated Request Processing" },
    { value: "24/7", label: "Candidate Access Availability" },
    { value: "99.9%", label: "System Uptime Guarantee" },
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-base-strong">
              Why Choose <span className="text-primary"> Schedulo ?</span>
            </h2>

            <div className="space-y-6">
              {benefits.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-success-soft mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-base-strong mb-1">
                      {item.title}
                    </h4>
                    <p className="text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-8 border border-surface text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
