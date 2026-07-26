import { createFileRoute, Link } from "@tanstack/react-router";
import heroThali from "@/assets/hero-thali.jpg";
import chefHome from "@/assets/chef-home.jpg";
import tiffin from "@/assets/tiffin.jpg";
import dishButter from "@/assets/dish-butter-chicken.jpg";
import dishDal from "@/assets/dish-dal.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ghar — Modern Indian Homemade Food, Delivered Daily" },
      {
        name: "description",
        content:
          "Fresh, chef-cooked Indian home meals — thalis, dal-chawal, biryani and more — delivered to your door in Bengaluru.",
      },
      { property: "og:title", content: "Ghar — Indian Homemade Food, Delivered" },
      {
        property: "og:description",
        content: "Small-batch home food, cooked this morning, on your table tonight.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="grain-bg absolute inset-0 -z-10" />
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center pt-16 pb-24 md:pt-24 md:pb-32">
          <div>
            <span className="eyebrow">Ghar · घर · home</span>
            <h1 className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
              The Indian meal you grew up on,{" "}
              <span className="italic text-primary">delivered daily.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              No cloud kitchen shortcuts. No frozen anything. Just small-batch home food cooked by
              chefs from Punjab, Kerala and Bengal — dropped at your door in a warm dabba.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="btn-primary">See this week's menu →</Link>
              <Link to="/how-it-works" className="btn-ghost">How it works</Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div>
                <div className="font-display text-2xl text-foreground">12k+</div>
                meals cooked / month
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-2xl text-foreground">4.9★</div>
                across 2,300 reviews
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <div className="font-display text-2xl text-foreground">30 min</div>
                avg delivery
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-accent/30 blur-2xl -z-10" />
            <img
              src={heroThali}
              alt="Homemade Indian thali with dal, sabzi, roti and rice"
              width={1600}
              height={1200}
              className="rounded-[1.5rem] shadow-2xl object-cover aspect-[4/3] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-lg max-w-[220px]">
              <div className="eyebrow">Today's thali</div>
              <div className="font-display text-lg mt-1">Rajma · Jeera Rice · Aloo Gobi</div>
              <div className="text-sm text-muted-foreground mt-1">₹189 · serves 1</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/30">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
          <span className="eyebrow text-foreground/70">As loved on</span>
          <span>Times Food</span>
          <span>Condé Nast Traveller</span>
          <span>LBB Bangalore</span>
          <span>Homegrown</span>
          <span>The Hindu</span>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Why Ghar</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Home food, held to a higher standard.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Every dish is cooked the way an Indian grandmother would — slow, seasoned by hand, and
            served warm. We just add the logistics.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Cooked this morning",
              d: "Our kitchens fire up at 5am. Nothing is stored, frozen or reheated for you.",
            },
            {
              t: "Regional chefs, real recipes",
              d: "Punjabi rajma from a Ludhiana home. Meen curry from a Kochi grandmother.",
            },
            {
              t: "Honest sourcing",
              d: "Cold-pressed oils, A2 ghee, atta from a mill we visit. No shortcuts.",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-shadow"
            >
              <div className="h-10 w-10 rounded-full bg-accent grid place-items-center font-display text-lg">
                {f.t[0]}
              </div>
              <h3 className="mt-6 font-display text-2xl">{f.t}</h3>
              <p className="mt-3 text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <span className="eyebrow">On the menu</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">This week</h2>
            </div>
            <Link to="/menu" className="btn-ghost">Full menu →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: dishButter, name: "Butter Chicken", tag: "Punjabi", price: "₹289" },
              { img: dishDal, name: "Dal Tadka + Jeera Rice", tag: "North Indian", price: "₹189" },
              { img: dishBiryani, name: "Hyderabadi Veg Biryani", tag: "Dum-cooked", price: "₹229" },
            ].map((d) => (
              <article
                key={d.name}
                className="group rounded-2xl overflow-hidden bg-card border border-border"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <div className="eyebrow text-xs">{d.tag}</div>
                    <h3 className="font-display text-xl mt-1">{d.name}</h3>
                  </div>
                  <div className="font-display text-lg">{d.price}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 lg:order-1">
          <img
            src={chefHome}
            alt="Home chef rolling fresh chapati"
            width={1200}
            height={1400}
            loading="lazy"
            className="rounded-[1.5rem] object-cover aspect-[4/5] w-full shadow-xl"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow">The kitchen</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Meet the hands behind your dabba.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Kavita ji has been rolling phulkas for 34 years. Every morning she leads a team of 12
            home chefs — most of them women running their own micro-kitchens with us.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "60% of our chefs are women earning a fair wage from home",
              "Every kitchen is FSSAI certified and audited monthly",
              "Zero single-use plastic — dabbas returned & reused",
            ].map((li) => (
              <li key={li} className="flex gap-3 text-foreground">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                {li}
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn-primary mt-8">Our story</Link>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-foreground p-10 md:p-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="grain-bg absolute inset-0 opacity-30" />
          <div className="relative">
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-accent">
              Ghar Tiffin
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              A month of home food, one subscription.
            </h2>
            <p className="mt-5 text-primary-foreground/80 text-lg max-w-lg">
              Lunch or dinner, delivered every weekday. Skip anytime. Pause when you travel. Cancel
              in one tap.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-medium hover:brightness-95 transition"
              >
                Start from ₹2,999/mo
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 font-medium hover:bg-primary-foreground/10 transition"
              >
                See how it works
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={tiffin}
              alt="Steel tiffin dabba with fresh homemade Indian meal"
              width={1200}
              height={1200}
              loading="lazy"
              className="rounded-2xl object-cover aspect-square w-full shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
