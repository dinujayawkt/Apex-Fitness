import SectionHeading from "../ui/section-heading";
import AnimateInView from "../ui/animate-in-view";

const highlights = [
  "Expert-Level Coaching",
  "World-Class Equipment",
  "Recovery Zone",
  "Nutrition Bar",
  "Yoga and Mobility Studio",
  "InBody Scan Technology",
];

const mediaStyle = {
  background:
    "linear-gradient(150deg, rgba(0, 0, 0, 0.45), transparent 55%), radial-gradient(circle at 40% 35%, color-mix(in srgb, var(--gold) 32%, transparent), transparent 48%), color-mix(in srgb, var(--brown) 72%, var(--black))",
  borderColor: "color-mix(in srgb, var(--gold) 40%, var(--line))",
};

export default function AboutSection() {
  return (
    <section id="about" className="section bg-(--bg)">
      <div className="container grid items-start gap-[clamp(1.4rem,4vw,3.4rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
        <div>
          <SectionHeading eyebrow="Our Story" title="Not Just a Gym. A Movement." />
          <AnimateInView delay={0.1}>
            <p className="max-w-[64ch] leading-[1.7] text-(--muted)">
              Apex Fitness combines high-performance training systems with a welcoming
              atmosphere. Whether you are beginning your journey or leveling up, our programs
              are built to help you see measurable results.
            </p>
          </AnimateInView>
          <ul className="mt-8 grid grid-cols-1 gap-[0.65rem] sm:grid-cols-2">
            {highlights.map((item, index) => (
              <AnimateInView key={item} delay={0.06 * index}>
                <li className="border border-(--line) px-3 py-[0.72rem] text-[0.74rem] uppercase tracking-[0.08em] text-(--text)">
                  {item}
                </li>
              </AnimateInView>
            ))}
          </ul>
        </div>

        <AnimateInView className="w-full" delay={0.2}>
          <div
            className="ml-auto flex min-h-[clamp(300px,35vw,450px)] w-full max-w-[520px] items-end justify-center border-2 p-5 lg:max-w-[520px]"
            style={mediaStyle}
          >
            <p className="m-0 text-[0.65rem] uppercase tracking-[0.12em] text-(--gold)">
              See your strength story unfold.
            </p>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
