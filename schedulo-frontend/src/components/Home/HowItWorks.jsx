import Xarrow, { Xwrapper } from "react-xarrows";

export default function HowItWorks() {
  const steps = [
    {
      id: "step1",
      title: "Create Window",
      desc: "HR sets up hiring windows and time slots",
    },
    {
      id: "step2",
      title: "Share Access",
      desc: "Generate access codes for candidates",
    },
    {
      id: "step3",
      title: "Candidates Book",
      desc: "Candidates select slots and upload resumes",
    },
    {
      id: "step4",
      title: "Automated Flow",
      desc: "HR approves and notifications are sent",
    },
  ];

  return (
    <section className="py-16 relative bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-base-strong mb-14">
          How Schedulo <span className="text-primary"> Works ?</span>
        </h2>

        <div className="relative flex flex-col gap-24 md:gap-28 p-3">
          {steps.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`flex items-center gap-6 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                <div
                  id={`${item.id}-card`}
                  className="bg-background/80 backdrop-blur-xl border border-surface p-6 rounded-2xl shadow-lg w-full md:w-[60%] hover:shadow-primary/30"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold mb-3 shadow-inner">
                    {index + 1}
                  </div>

                  <h3 className="font-semibold text-xl text-base-strong mb-1">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="hidden md:block">
            <Xwrapper>
              <Xarrow
                start="step1-card"
                end="step2-card"
                color="#9333EA"
                strokeWidth={3}
                headSize={5}
                dashness={{ strokeLen: 5, nonStrokeLen: 9 }}
                curveness={0.8}
                startAnchor={{ position: "right", offset: { x: 5, y: 0 } }}
                endAnchor={{ position: "top", offset: { x: 100, y: 0 } }}
              />

              <Xarrow
                start="step2-card"
                end="step3-card"
                color="#9333EA"
                strokeWidth={3}
                headSize={5}
                dashness={{ strokeLen: 5, nonStrokeLen: 9 }}
                curveness={0.8}
                startAnchor={{ position: "left", offset: { x: 0, y: 0 } }}
                endAnchor={{ position: "top", offset: { x: -100, y: -10 } }}
              />

              <Xarrow
                start="step3-card"
                end="step4-card"
                color="#9333EA"
                strokeWidth={3}
                headSize={5}
                dashness={{ strokeLen: 5, nonStrokeLen: 9 }}
                curveness={0.8}
                startAnchor={{ position: "right", offset: { x: 5, y: 0 } }}
                endAnchor={{ position: "top", offset: { x: 100, y: -10 } }}
              />
            </Xwrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
