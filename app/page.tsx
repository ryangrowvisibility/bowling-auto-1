import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(916) 395-2804";
const TEL = "tel:+19163952804";
const SMS = "sms:+19163952804";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Bowling%20Auto%201&query_place_id=ChIJyZaD4Y3PmoARLMopidhGeMY";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=7172+Bowling+Dr+Sacramento+CA+95823";
const ADDRESS = "7172 Bowling Dr, Sacramento, CA 95823";

const services = [
  { icon: "gauge", name: "Engine Diagnostics", body: "Check-engine light on, rough idle, or a noise you can't place? We find the actual cause first, then tell you what it costs before we touch anything." },
  { icon: "disc", name: "Brake Service", body: "Pads, rotors, calipers and brake fluid. If it squeals, grinds or the pedal feels soft, bring it in and we'll show you what's worn." },
  { icon: "thermo", name: "A/C Repair", body: "Sacramento summers are no joke. We check the system, find leaks or failed parts, and get cold air blowing again.", featured: true },
  { icon: "cog", name: "Transmission Service", body: "Slipping, hard shifts or a delay going into gear. We service and repair transmissions and give you an honest read on repair versus replace." },
  { icon: "wrench", name: "Tune-Ups & Oil Changes", body: "Scheduled maintenance, oil and filter changes, and tune-ups done quickly so you're back on the road the same day whenever possible." },
  { icon: "car", name: "Suspension & Steering", body: "Shocks, struts, ball joints and tie rods. If the ride is bouncy or the car pulls, we'll track it down and fix it right." },
  { icon: "battery", name: "Electrical & Batteries", body: "Alternators, starters, batteries and wiring. A car that won't start is usually one of these, and we test before we replace." },
];

const reviews = [
  { name: "Tabitha W.", job: "Brakes, then an alternator", quote: "My car wouldn't start the Monday after a brake job and I was upset. The owner was patient and kind, found the alternator had gone out, and fixed it fast at a very reasonable price. They even cleaned up my battery and fixed my bumper. I will forever trust my vehicle with him." },
  { name: "Angel R.", job: "Regular customer", quote: "Al is amazing and gets the job done. He's very reasonable, understands that life happens, and works with you every day that he can. I go to him for all my mechanic needs." },
  { name: "Tim T.", job: "Tune-up", quote: "Had my car tuned up and it was done quick. The staff were friendly and professional." },
  { name: "Langifisi G.", job: "General service", quote: "Excellent service provider." },
  { name: "Richard C.", job: "Repeat customer", quote: "Best in town." },
  { name: "Brandi Y.", job: "Repeat customer", quote: "Love this place." },
];

const steps = [
  { title: "Call or stop by", body: `Call ${PHONE} or pull into the lot on Bowling Drive. Tell us what the car is doing and when it started.` },
  { title: "We diagnose it", body: "We look the car over and find the real problem. No guessing and no throwing parts at it." },
  { title: "You approve the price", body: "You get a straight answer on what's wrong and what it costs before any work begins. No surprise charges." },
  { title: "We fix it and keep you posted", body: "We do the repair and keep you updated while the car is in the bay. If something isn't right afterward, call us and we follow up." },
];

const faqs = [
  { q: "Do you tell me the price before you start?", a: "Yes. Customers mention this more than anything else: we explain what's wrong and what it will cost before the work begins, and we don't add surprise charges." },
  { q: "What if the problem comes back after the repair?", a: "Call us. If a repair we did isn't working right, we follow up and make it right at no additional charge. That's how we've earned a 4.8-star Google rating." },
  { q: "What are your hours?", a: "Monday through Friday 8 a.m. to 6 p.m., and Saturday 9 a.m. to 4 p.m. We're closed Sunday." },
  { q: "What kinds of cars do you work on?", a: "We do general repair on all makes: cars, trucks and SUVs, foreign and domestic. If you're not sure, call and ask." },
  { q: "Do I need an appointment?", a: `Calling ahead at ${PHONE} is the best way to get your car in quickly, but you're welcome to stop by during business hours.` },
  { q: "Where are you located?", a: `${ADDRESS}, in South Sacramento near Meadowview and Florin. The shop is wheelchair accessible, entrance and parking lot included.` },
  { q: "Is Bowling Auto the same shop as Super Auto?", a: "Yes. You may see the shop listed online as Super Auto or Super Auto Bowling. Same location, same team, same phone number." },
];

const areas = ["South Sacramento", "Meadowview", "Parkway", "Florin", "Pocket", "Bowling Drive corridor", "Greater Sacramento"];

const gallery = [
  { src: "/images/red-pickup.jpg", alt: "Red pickup truck in the Bowling Auto 1 lot", cls: "sm:col-span-2" },
  { src: "/images/silver-sedan.jpg", alt: "Silver sedan parked at the shop", cls: "" },
  { src: "/images/gray-charger.jpg", alt: "Gray sedan in the lot after service", cls: "" },
  { src: "/images/interior.jpg", alt: "Vehicle interior during service", cls: "" },
  { src: "/images/customer-classic.jpg", alt: "Customer with a classic car at Bowling Auto 1", cls: "" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Bowling Auto 1",
  alternateName: ["Super Auto", "Super Auto Bowling"],
  telephone: "+1-916-395-2804",
  image: "/images/shop-front.jpg",
  address: { "@type": "PostalAddress", streetAddress: "7172 Bowling Dr", addressLocality: "Sacramento", addressRegion: "CA", postalCode: "95823", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 38.4968035, longitude: -121.4560035 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "38" },
  areaServed: areas,
  sameAs: ["https://www.yelp.com/biz/bowling-auto-sacramento", "https://reviews.birdeye.com/bowling-auto-1-167673209373829"],
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm font-bold uppercase tracking-wide text-brand">{children}</p>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />

      {/* Utility strip */}
      <div className="hidden bg-coal text-sm text-white/85 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <span className="inline-flex items-center gap-2"><Icon name="pin" className="h-4 w-4" />{ADDRESS}</span>
          <span className="inline-flex items-center gap-2"><Icon name="clock" className="h-4 w-4" />Mon–Fri 8–6 · Sat 9–4 · Sun closed</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Bowling Auto 1 home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><Icon name="wrench" className="h-5 w-5" /></span>
            <span className="font-head text-2xl font-bold uppercase leading-none tracking-wide text-ink">Bowling Auto <span className="text-brand">1</span></span>
          </a>
          <nav className="hidden items-center gap-7 font-semibold text-ink/80 lg:flex" aria-label="Main">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#area" className="hover:text-brand">Location</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="hidden font-bold text-ink md:inline">{PHONE}</a>
            <a href={TEL} className="btn hidden bg-brand text-white hover:bg-brand-dark md:inline-flex"><Icon name="phone" className="h-5 w-5" />Call Now</a>
            <a href={TEL} className="grid h-11 w-11 place-items-center rounded-lg bg-brand text-white md:hidden" aria-label={`Call ${PHONE}`}><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="top" className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="bg-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:px-6 md:py-20 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand-dark">
                <Icon name="pin" className="h-4 w-4" />Bowling Drive, South Sacramento
              </p>
              <h1 className="text-[clamp(2.4rem,5.4vw,4rem)] font-bold uppercase text-ink">
                Auto Repair in <span className="text-brand">South Sacramento</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted md:text-xl">
                Brakes, A/C, diagnostics, tune-ups and transmission work on all makes. Owner Asif Sheikh and manager Lal Nare give you an honest price up front, keep you posted while your car is in the bay, and follow up if a repair isn't right.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn bg-brand text-lg text-white hover:bg-brand-dark"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
                <a href={SMS} className="btn border-2 border-ink/15 bg-white text-ink hover:border-brand"><Icon name="chat" className="h-5 w-5" />Text Us</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem] text-ink">
                <span className="inline-flex items-center gap-2"><Stars className="h-[18px] w-[18px]" /><strong>4.8</strong></span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-brand">38 Google reviews</a>
                <span className="text-line" aria-hidden="true">|</span>
                <span>All makes &amp; models</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Open Saturdays</span>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-line bg-tint shadow-[0_30px_60px_-35px_rgba(0,0,0,0.45)]">
                <img src="/images/shop-front.jpg" alt="Bowling Auto 1 shop building and lot on Bowling Drive in Sacramento" className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]" width={810} height={1080} />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 rounded-xl border border-line bg-white p-4 shadow-lg sm:left-auto sm:right-[-12px] sm:w-72">
                <Stars className="h-4 w-4" />
                <p className="mt-2 text-[0.95rem] leading-snug text-ink">“Had my car tuned up and it was done quick. The staff were friendly and professional.”</p>
                <p className="mt-2 text-sm font-semibold text-muted">Tim T. · Google review</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-y border-line bg-tint">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "award", t: "4.8 on Google", s: "38 reviews" },
              { icon: "tag", t: "Price before work", s: "No surprise charges" },
              { icon: "repeat", t: "We follow up", s: "If a fix isn't right" },
              { icon: "users", t: "8-person shop", s: "Owner on site" },
            ].map((i) => (
              <div key={i.t} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-brand ring-1 ring-line"><Icon name={i.icon} className="h-5 w-5" /></span>
                <div><p className="font-bold leading-tight text-ink">{i.t}</p><p className="text-sm text-muted">{i.s}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <Eyebrow>Services</Eyebrow>
              <h2 className="text-4xl font-bold uppercase text-ink md:text-5xl">Complete auto repair</h2>
              <p className="mt-4 text-lg text-muted">The sign out front says it: complete auto repair, A/C, tune-ups and brakes. Here's what we handle most days.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`reveal lift flex flex-col rounded-2xl border bg-white p-6 ${s.featured ? "border-brand ring-1 ring-brand" : "border-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                    
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold uppercase text-ink">{s.name}</h3>
                  <p className="mt-2 flex-1 text-muted">{s.body}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand hover:text-brand-dark">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
              <article className="reveal flex flex-col justify-center rounded-2xl bg-coal p-6 text-white">
                <h3 className="text-2xl font-semibold uppercase">Not on the list?</h3>
                <p className="mt-2 text-white/80">If your car is making a noise or a light is on, call and describe it. We'll tell you straight whether it's something we can fix.</p>
                <a href={TEL} className="btn mt-5 bg-white text-ink hover:bg-brand-soft"><Icon name="phone" className="h-5 w-5" />{PHONE}</a>
              </article>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Eyebrow>Reviews</Eyebrow>
                <h2 className="text-4xl font-bold uppercase text-ink md:text-5xl">Rated 4.8 from 38 Google reviews</h2>
                <p className="mt-3 text-lg text-muted">Honest pricing, clear updates, and a shop that stands behind its work.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn shrink-0 border-2 border-ink/15 bg-white text-ink hover:border-brand">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <figure className="reveal mt-12 rounded-2xl border border-line bg-white p-7 md:p-10">
              <Stars />
              <blockquote className="mt-4 text-xl leading-relaxed text-ink md:text-2xl">“{reviews[0].quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-lg font-bold text-white">T</span>
                <span><strong className="block text-ink">{reviews[0].name}</strong><span className="text-sm text-muted">{reviews[0].job} · Google review</span></span>
              </figcaption>
            </figure>
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.slice(1).map((r, i) => (
                <figure key={r.name} className={`reveal flex flex-col rounded-2xl border border-line bg-white p-6 ${i === 0 ? "lg:col-span-2" : ""}`}>
                  <figcaption className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft font-bold text-brand">{r.name[0]}</span>
                    <span><strong className="block leading-tight text-ink">{r.name}</strong><span className="text-sm text-muted">{r.job}</span></span>
                  </figcaption>
                  <Stars className="mt-4 h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-ink">“{r.quote}”</blockquote>
                </figure>
              ))}
            </div>
            <p className="reveal mt-8 text-muted">Customers on Birdeye and Yelp say the same things: honest assessments, no surprise charges, kept posted while the car is in the bay, and a shop that follows up if a repair isn't working right.</p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal grid grid-cols-2 gap-4">
              <img src="/images/shop-sign.jpg" alt="Bowling Auto 1 street sign: Complete Auto Repair, A/C, Tune-Up, Brakes, (916) 395-2804" className="aspect-[3/4] w-full rounded-2xl object-cover" width={810} height={1080} loading="lazy" />
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-brand p-6 text-white">
                  <p className="font-head text-5xl font-bold">4.8</p>
                  <p className="mt-1 font-semibold">Google rating</p>
                  <p className="text-sm text-white/80">from 38 reviews</p>
                </div>
                <div className="flex-1 rounded-2xl border border-line bg-tint p-6">
                  <p className="font-head text-2xl font-bold uppercase text-ink">Two names, one shop</p>
                  <p className="mt-2 text-sm text-muted">Also listed as Super Auto and Super Auto Bowling.</p>
                </div>
              </div>
            </div>
            <div className="reveal">
              <Eyebrow>About the shop</Eyebrow>
              <h2 className="text-4xl font-bold uppercase text-ink md:text-5xl">A neighborhood shop that tells you the truth</h2>
              <div className="mt-5 space-y-4 text-lg text-muted">
                <p>Bowling Auto 1 is a full-service repair shop on Bowling Drive in South Sacramento, owned by Asif Sheikh and managed by Lal Nare. About eight people work here, fixing everything from a squeaky brake to a transmission that won't shift.</p>
                <p>What keeps customers coming back is simple. You hear the price before the work starts. You get updates while your car is here. And if a repair isn't working right afterward, you call and we follow up at no additional charge.</p>
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: "tag", t: "Upfront pricing", s: "No surprise charges on the bill." },
                  { icon: "chat", t: "Kept in the loop", s: "Updates at every stage of the work." },
                  { icon: "shield", t: "Stands behind it", s: "Follow-up if a fix doesn't hold." },
                  { icon: "heart", t: "Works with you", s: "Patient, reasonable, real people." },
                ].map((d) => (
                  <li key={d.t} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={d.icon} className="h-5 w-5" /></span>
                    <span><strong className="block text-ink">{d.t}</strong><span className="text-muted">{d.s}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="text-4xl font-bold uppercase text-ink md:text-5xl">Getting your car fixed</h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-2xl border border-line bg-white p-6">
                  <span className="font-head text-6xl font-bold leading-none text-brand">{i + 1}</span>
                  <h3 className="mt-4 text-xl font-semibold uppercase text-ink">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <Eyebrow>From the lot</Eyebrow>
              <h2 className="text-4xl font-bold uppercase text-ink md:text-5xl">Cars and trucks we've worked on</h2>
            </div>
            <div className="mt-10 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((g) => (
                <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className={`reveal h-full w-full rounded-2xl object-cover ${g.cls}`} />
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="reveal">
              <Eyebrow>Location &amp; area</Eyebrow>
              <h2 className="text-4xl font-bold uppercase text-ink md:text-5xl">Serving South Sacramento</h2>
              <p className="mt-4 text-lg text-muted">Find us at {ADDRESS}. Most of our customers come from these neighborhoods:</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {areas.map((a) => <li key={a} className="rounded-full border border-line bg-white px-3.5 py-1.5 font-semibold text-ink">{a}</li>)}
              </ul>
              <dl className="mt-8 grid gap-3 text-ink">
                <div className="flex gap-3"><dt className="w-24 font-bold">Mon–Fri</dt><dd>8:00 a.m. – 6:00 p.m.</dd></div>
                <div className="flex gap-3"><dt className="w-24 font-bold">Saturday</dt><dd>9:00 a.m. – 4:00 p.m.</dd></div>
                <div className="flex gap-3"><dt className="w-24 font-bold">Sunday</dt><dd>Closed</dd></div>
              </dl>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn mt-8 border-2 border-ink/15 bg-white text-ink hover:border-brand"><Icon name="route" className="h-5 w-5" />Get directions</a>
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-line bg-white">
              <iframe title="Map to Bowling Auto 1, 7172 Bowling Dr, Sacramento" src="https://maps.google.com/maps?q=7172%20Bowling%20Dr%2C%20Sacramento%2C%20CA%2095823&output=embed" className="h-[380px] w-full lg:h-full lg:min-h-[460px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.6fr]">
            <div className="reveal">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="text-4xl font-bold uppercase text-ink md:text-5xl">Common questions</h2>
              <p className="mt-4 text-lg text-muted">Don't see yours? Call <a href={TEL} className="font-bold text-brand">{PHONE}</a>.</p>
            </div>
            <div className="reveal divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-center justify-between gap-6 text-lg font-bold text-ink">
                    {f.q}
                    <span className="faq-toggle grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 max-w-2xl pr-10 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-paper pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal relative overflow-hidden rounded-3xl bg-brand px-7 py-12 text-white md:px-14 md:py-16">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" aria-hidden="true" />
              <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
                <div>
                  <h2 className="text-4xl font-bold uppercase md:text-5xl">Car acting up? Call Bowling Auto.</h2>
                  <p className="mt-3 text-lg text-white/85">Talk to Asif or Lal today. Open Monday–Friday 8–6 and Saturday 9–4.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href={TEL} className="btn bg-white text-lg text-brand-dark hover:bg-brand-soft"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
                  <a href={SMS} className="btn border-2 border-white/40 text-white hover:border-white"><Icon name="chat" className="h-5 w-5" />Send a text</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-tint">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-6">
          <div>
            <p className="font-head text-2xl font-bold uppercase text-ink">Bowling Auto <span className="text-brand">1</span></p>
            <p className="mt-1 text-sm text-muted">Also known as Super Auto Bowling</p>
            <address className="mt-4 not-italic text-ink">7172 Bowling Dr<br />Sacramento, CA 95823</address>
            <a href={TEL} className="mt-3 inline-block text-lg font-bold text-brand">{PHONE}</a>
          </div>
          <div>
            <p className="font-bold text-ink">Hours</p>
            <ul className="mt-3 space-y-1 text-muted"><li>Mon–Fri 8 a.m.–6 p.m.</li><li>Sat 9 a.m.–4 p.m.</li><li>Sun closed</li></ul>
          </div>
          <div>
            <p className="font-bold text-ink">Services</p>
            <ul className="mt-3 space-y-1 text-muted">{services.map((s) => <li key={s.name}>{s.name}</li>)}</ul>
          </div>
          <div>
            <p className="font-bold text-ink">Find us online</p>
            <ul className="mt-3 space-y-1">
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand">Google reviews</a></li>
              <li><a href="https://www.yelp.com/biz/bowling-auto-sacramento" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand">Yelp</a></li>
              <li><a href="https://reviews.birdeye.com/bowling-auto-1-167673209373829" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand">Birdeye</a></li>
              <li><a href="https://www.bbb.org/us/ca/sacramento/profile/auto-repair/super-auto-bowling-1156-35000861" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand">BBB profile</a></li>
            </ul>
            <p className="mt-4 text-sm text-muted">Serving South Sacramento, Meadowview, Parkway, Florin and Pocket.</p>
          </div>
        </div>
        <div className="border-t border-line py-5 text-center text-sm text-muted">© {new Date().getFullYear()} Bowling Auto 1, Sacramento, CA</div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-paper/95 p-2.5 backdrop-blur md:hidden">
        <a href={TEL} className="btn bg-brand text-white"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={SMS} className="btn border-2 border-ink/15 bg-white text-ink"><Icon name="chat" className="h-5 w-5" />Text</a>
      </div>
    </>
  );
}
