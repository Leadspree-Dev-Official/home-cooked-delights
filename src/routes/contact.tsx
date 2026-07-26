import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Start a Subscription — Ghar" },
      {
        name: "description",
        content:
          "Get in touch with Ghar Kitchen or start your weekday home-food subscription. Bengaluru, Hyderabad, Pune.",
      },
      { property: "og:title", content: "Contact Ghar Kitchen" },
      { property: "og:description", content: "Start a subscription or say hello." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="grain-bg">
        <div className="container-x py-20 md:py-28 max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold leading-tight">
            Say hello, or start eating.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Fill this in and we'll get back within a few hours (or drop us a WhatsApp).
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid lg:grid-cols-[1.4fr_1fr] gap-14">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Your name" name="name" placeholder="Aarav Sharma" />
            <Field label="Phone" name="phone" placeholder="+91 98450 12345" type="tel" />
          </div>
          <Field label="Email" name="email" placeholder="you@email.com" type="email" />
          <Field label="Delivery pincode" name="pincode" placeholder="560095" />
          <div>
            <label className="block text-sm font-medium mb-2">What are you looking for?</label>
            <select className="w-full rounded-xl border border-border bg-background px-4 py-3">
              <option>Weekday tiffin subscription</option>
              <option>One-off meal order</option>
              <option>Corporate / bulk catering</option>
              <option>Just saying hello</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Anything else?</label>
            <textarea
              rows={4}
              placeholder="Jain preferences, allergies, delivery notes…"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 resize-none"
            />
          </div>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            {sent ? "Thanks — we'll be in touch ✨" : "Send message"}
          </button>
        </form>

        <aside className="space-y-8">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8">
            <h3 className="font-display text-2xl">Kitchen HQ</h3>
            <p className="mt-3 text-primary-foreground/80">
              5th Block, Koramangala<br />
              Bengaluru 560095
            </p>
            <p className="mt-4 text-primary-foreground/80">
              Mon – Sat<br />
              7am – 9pm
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li><span className="text-foreground font-medium">WhatsApp</span><br />+91 98450 12345</li>
              <li><span className="text-foreground font-medium">Email</span><br />hello@gharkitchen.in</li>
              <li><span className="text-foreground font-medium">Press</span><br />press@gharkitchen.in</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-accent/40 border border-accent p-8">
            <h3 className="font-display text-2xl">Cities we serve</h3>
            <p className="mt-3 text-foreground/80">Bengaluru · Hyderabad · Pune</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Not in your city? Leave your pincode above — we launch new zones every quarter.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring/50"
      />
    </div>
  );
}
