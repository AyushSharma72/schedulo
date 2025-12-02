import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-primary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-strong leading-tight">
                Streamline Your{" "}
                <span className="text-primary">Hiring Process</span>
              </h1>
              <p className="text-lg md:text-xl text-base leading-relaxed">
                Eliminate manual coordination with Schedulo's Easy interview
                scheduling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton
                text="Get Started"
                extraStyles="bg-primary text-on-background hover:bg-primary-dark  btn-primary"
              />
            </div>

            <div className="pt-4 border-t border-surface">
              <p className="text-sm text-base-soft mb-3">
                100% Trusted Platform
              </p>
              <div className="flex gap-6 flex-wrap text-base-light font-semibold text-sm">
                Interview? Schedule It With Schedulo
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block relative">
            <div className="gradient-primary-box rounded-2xl p-8 border border-primary-light">
              <div className="space-y-6">
               
                <div className="bg-background rounded-lg p-4 border border-primary-light shadow-sm">
                  <p className="text-sm font-semibold text-base-strong mb-2">
                    Interview Schedule
                  </p>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary-light rounded-full w-3/4"></div>
                    <div className="h-2 bg-primary-light rounded-full w-full"></div>
                    <div className="h-2 bg-primary-light rounded-full w-4/5"></div>
                  </div>
                </div>

             
                <div className="bg-background rounded-lg p-4 border border-success-soft shadow-sm">
                  <p className="text-sm font-semibold text-success">
                    ✓ Approved
                  </p>
                  <p className="text-xs text-base-soft mt-1">
                    Interview scheduled for tomorrow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
