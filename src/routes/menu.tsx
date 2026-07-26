import { createFileRoute, Link } from "@tanstack/react-router";
import dishButter from "@/assets/dish-butter-chicken.jpg";
import dishDal from "@/assets/dish-dal.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishDosa from "@/assets/dish-dosa.jpg";
import heroThali from "@/assets/hero-thali.jpg";
import tiffin from "@/assets/tiffin.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "This Week's Menu — Ghar Homemade Indian Food" },
      {
        name: "description",
        content:
          "Explore Ghar's weekly rotating menu of Indian home food — thalis, curries, biryanis, dosas and regional specials cooked fresh daily.",
      },
      { property: "og:title", content: "This Week's Menu — Ghar" },
      {
        property: "og:description",
        content: "A rotating weekly menu of Indian home food. Cooked fresh, delivered daily.",
      },
    ],
  }),
  component: Menu,
});

type Dish = {
  name: string;
  desc: string;
  region: string;
  price: string;
  veg: boolean;
  img: string;
};

const dishes: { section: string; items: Dish[] }[] = [
  {
    section: "Signature thalis",
    items: [
      {
        name: "North Indian Thali",
        desc: "Dal makhani, aloo gobi, jeera rice, 2 phulkas, boondi raita, gulab jamun.",
        region: "Punjab · Delhi",
        price: "₹249",
        veg: true,
        img: heroThali,
      },
      {
        name: "Sadya-style Thali",
        desc: "Sambar, avial, thoran, olan, red rice, banana chips, payasam. On banana leaf.",
        region: "Kerala",
        price: "₹289",
        veg: true,
        img: dishDosa,
      },
    ],
  },
  {
    section: "Mains",
    items: [
      {
        name: "Butter Chicken",
        desc: "Slow-cooked in a clay pot, finished with A2 white butter and kasuri methi.",
        region: "Delhi",
        price: "₹289",
        veg: false,
        img: dishButter,
      },
      {
        name: "Dal Tadka + Jeera Rice",
        desc: "Yellow dal tempered twice with ghee, cumin and Kashmiri chili.",
        region: "Uttar Pradesh",
        price: "₹189",
        veg: true,
        img: dishDal,
      },
      {
        name: "Hyderabadi Veg Biryani",
        desc: "Dum-cooked with saffron milk, fried onions, mint. Served with raita and salan.",
        region: "Hyderabad",
        price: "₹229",
        veg: true,
        img: dishBiryani,
      },
      {
        name: "Masala Dosa",
        desc: "24-hour fermented batter, potato masala, coconut chutney and sambar.",
        region: "Karnataka",
        price: "₹149",
        veg: true,
        img: dishDosa,
      },
    ],
  },
  {
    section: "Tiffin subscriptions",
    items: [
      {
        name: "Daily Ghar Tiffin",
        desc: "1 sabzi, 1 dal, 3 phulkas, rice, salad, sweet. Rotating weekly menu.",
        region: "Mon – Fri",
        price: "₹2,999/mo",
        veg: true,
        img: tiffin,
      },
    ],
  },
];

function Menu() {
  return (
    <div>
      <section className="grain-bg">
        <div className="container-x py-20 md:py-28 max-w-3xl">
          <span className="eyebrow">Menu · Week of Monday</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold leading-tight">
            What's cooking this week.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            The menu rotates every Monday. Everything is cooked to order, in small batches, in our
            three home-kitchens across Bengaluru.
          </p>
        </div>
      </section>

      {dishes.map((group) => (
        <section key={group.section} className="container-x py-16 border-t border-border/60">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10">
            {group.section}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {group.items.map((d) => (
              <article
                key={d.name}
                className="group grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] gap-5 items-start"
              >
                <div className="overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={d.img}
                    alt={d.name}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`inline-grid place-items-center h-4 w-4 rounded-sm border-2 ${
                        d.veg ? "border-cardamom" : "border-primary"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          d.veg ? "bg-cardamom" : "bg-primary"
                        }`}
                      />
                    </span>
                    <span className="eyebrow text-xs">{d.region}</span>
                  </div>
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <p className="text-muted-foreground mt-2">{d.desc}</p>
                  <div className="mt-3 font-display text-lg">{d.price}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="container-x py-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Not sure what to try?</h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Order the Chef's Sampler — we'll pick four of this week's best dishes for you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-medium"
          >
            Order the sampler
          </Link>
        </div>
      </section>
    </div>
  );
}
