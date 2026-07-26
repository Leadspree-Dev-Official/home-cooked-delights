import { createFileRoute, Link } from "@tanstack/react-router";
import chefHome from "@/assets/chef-home.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Ghar Kitchen" },
      {
        name: "description",
        content:
          "Ghar started in a two-burner kitchen in Bengaluru with one goal — bring back the taste of ghar ka khaana. Meet the chefs and the mission.",
      },
      { property: "og:title", content: "Our Story — Ghar Kitchen" },
      {
        property: "og:description",
        content: "A home kitchen, three cities, and a mission to bring back ghar ka khaana.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="grain-bg">
        <div className="container-x py-20 md:py-28 max-w-3xl">
          <span className="eyebrow">Our story</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold leading-tight">
            We started because we missed home.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            In 2021, three friends living away from their families realised something obvious — no
            app was actually delivering the food we grew up on. Cloud kitchens gave us restaurant
            food in a box. We wanted the dal our mothers made.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid lg:grid-cols-2 gap-14 items-center">
        <img
          src={chefHome}
          alt="Kavita ji, head chef, rolling chapati"
          width={1200}
          height={1400}
          loading="lazy"
          className="rounded-3xl object-cover aspect-[4/5] w-full shadow-xl"
        />
        <div>
          <span className="eyebrow">The kitchen</span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">
            One home kitchen. Then twelve.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            We started with Kavita ji, a home chef in Koramangala who cooked 20 dabbas a day out of
            her own kitchen. Today, Ghar is a network of twelve home chefs across Bengaluru,
            Hyderabad and Pune — most of them women earning an honest wage without leaving home.
          </p>
          <p className="mt-4 text-muted-foreground text-lg">
            Every kitchen is FSSAI licensed and audited monthly. Every recipe is one the chef has
            cooked their whole life.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <span className="eyebrow">Principles</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold max-w-2xl">
            The four things we don't compromise on.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Real ingredients", d: "Cold-pressed oils, A2 ghee, whole spices ground in-house." },
              { n: "02", t: "Cooked today", d: "Nothing stored beyond 8 hours. Nothing reheated." },
              { n: "03", t: "Fair to chefs", d: "Our home chefs keep 55% of every order they cook." },
              { n: "04", t: "Kind packaging", d: "Reusable steel dabbas. Compostable liners for the rest." },
            ].map((p) => (
              <div key={p.n} className="rounded-2xl bg-card border border-border p-6">
                <div className="font-display text-3xl text-primary">{p.n}</div>
                <h3 className="mt-4 font-display text-xl">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 grid md:grid-cols-3 gap-10 text-center">
        {[
          { n: "12", t: "Home chefs" },
          { n: "3", t: "Cities" },
          { n: "1.4L+", t: "Meals delivered" },
        ].map((s) => (
          <div key={s.t}>
            <div className="font-display text-6xl text-primary">{s.n}</div>
            <div className="mt-2 text-muted-foreground">{s.t}</div>
          </div>
        ))}
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl md:text-4xl">Come eat with us.</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            One meal from Ghar and you'll get why our regulars call it "Sunday lunch at nani's".
          </p>
          <Link to="/menu" className="btn-primary mt-6">See this week's menu</Link>
        </div>
      </section>
    </div>
  );
}
