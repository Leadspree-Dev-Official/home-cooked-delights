import { createFileRoute, Link } from "@tanstack/react-router";
import tiffin from "@/assets/tiffin.jpg";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Ghar Works — Order, Cook, Deliver" },
      {
        name: "description",
        content:
          "Four simple steps: pick your meals, we cook them fresh, deliver in a warm dabba, and pick up the empty box the next day.",
      },
      { property: "og:title", content: "How Ghar Works" },
      {
        property: "og:description",
        content: "Order by 10am. Cooked fresh. Delivered warm. Zero waste.",
      },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  const steps = [
    { n: "01", t: "Pick your meals", d: "Order à la carte or subscribe to a weekly tiffin. Change or skip anytime up to 10am." },
    { n: "02", t: "We cook, fresh", d: "At 5am our chefs start prepping. Nothing pre-cooked, nothing frozen." },
    { n: "03", t: "Delivered in a dabba", d: "Insulated steel tiffins keep food warm for 3 hours. Delivered in under 30 minutes." },
    { n: "04", t: "We pick it back up", d: "Leave the empty dabba at your door the next day. We wash, sterilise and reuse." },
  ];

  return (
    <div>
      <section className="grain-bg">
        <div className="container-x py-20 md:py-28 max-w-3xl">
          <span className="eyebrow">How it works</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold leading-tight">
            From our kitchen to your plate in four steps.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            No apps to babysit. No plastic to throw. Just fresh Indian home food, arriving warm.
          </p>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-8 relative">
              <div className="font-display text-6xl text-accent absolute top-6 right-6 opacity-70">
                {s.n}
              </div>
              <h3 className="font-display text-2xl mt-8">{s.t}</h3>
              <p className="mt-3 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <img
            src={tiffin}
            alt="Steel tiffin dabba filled with fresh home food"
            width={1200}
            height={1200}
            loading="lazy"
            className="rounded-3xl object-cover aspect-square w-full shadow-xl"
          />
          <div>
            <span className="eyebrow">Subscriptions</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
              The Ghar Tiffin, made simple.
            </h2>
            <ul className="mt-8 space-y-4 text-lg">
              {[
                "Weekday lunches or dinners, delivered on time",
                "Rotating menu — no repeats within a fortnight",
                "Pause for travel, skip a day, cancel in one tap",
                "Custom preferences: Jain, no-onion-garlic, low-oil",
              ].map((li) => (
                <li key={li} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                  {li}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Link to="/contact" className="btn-primary">Start subscription</Link>
              <Link to="/menu" className="btn-ghost">See the menu</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">Quick answers.</h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {[
            { q: "Where do you deliver?", a: "Currently across Bengaluru, Hyderabad and Pune. New areas launch each quarter — leave your pincode on the contact page." },
            { q: "What if I don't like a dish?", a: "Tell us within 2 hours and we'll refund or resend, no questions asked." },
            { q: "Is there a minimum order?", a: "No minimum for à la carte. Subscriptions start at ₹2,999/month for 20 meals." },
            { q: "Are dabbas really reusable?", a: "Yes — insulated steel tiffins that we collect, wash and reuse. Under 4% of our packaging is single-use." },
          ].map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex justify-between items-center cursor-pointer list-none font-display text-xl">
                {f.q}
                <span className="text-primary text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
