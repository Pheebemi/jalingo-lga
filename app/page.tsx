'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { JalingoMap } from "@/components/jalingo-map";

const WARDS = [
  "Abbare Yelwa",
  "Barade",
  "Kachalla Sembe",
  "Kona",
  "Majidadi",
  "Mayo Goi",
  "Sarkin Dawaki",
  "Sintali",
  "Turaki 'A'",
  "Turaki 'B'",
];

const DIRECTORATES = [
  { title: "Civil Registration", desc: "Birth, marriage and death certificates, indigene letters and attestations issued at the secretariat." },
  { title: "Revenue & Taxation", desc: "Tenement rates, market levies, signage permits and business registration across the city." },
  { title: "Primary Healthcare", desc: "Ward clinics, immunisation, maternal care and public-health outreach." },
  { title: "Primary Education", desc: "Support for schools, teachers and pupils in every ward of the capital." },
  { title: "Urban Works & Sanitation", desc: "Roads, drainage, street lighting, waste management and public buildings." },
  { title: "Social & Community Dev.", desc: "Youth, women and community programmes, and support for vulnerable residents." },
];

const FEATURES = [
  {
    tag: "The Capital",
    title: "The seat of Taraba State",
    body: "Jalingo is the capital city of Taraba State and the administrative heart of the region — home to the State Government House, the State Assembly, federal institutions and the Jalingo Local Government Council.",
    points: ["State Government House", "Taraba State University", "Federal Medical Centre", "Jalingo Central Market"],
    img: "/1.jfif",
    alt: "Jalingo city view",
    w: 1200,
    h: 800,
  },
  {
    tag: "Growing City",
    title: "A city planning its future",
    body: "As the fastest-growing urban centre in the state, Jalingo balances new development with the needs of long-standing neighbourhoods — investing in roads, drainage, sanitation and street lighting ward by ward.",
    points: ["Township road network", "Drainage & flood control", "Waste management", "Street lighting"],
    img: "/2.jpg",
    alt: "Jalingo urban growth view",
    w: 1200,
    h: 800,
  },
  {
    tag: "Commerce",
    title: "Where the region trades",
    body: "From the Central Market to the roadside shops of Turaki and Sarkin Dawaki, Jalingo is the commercial hub of Taraba — a meeting point for farmers, traders and businesses from every corner of the state.",
    points: ["Central & satellite markets", "Business permits", "Transport corridors", "Artisan support"],
    img: "/3.jfif",
    alt: "Jalingo market and commerce view",
    w: 1200,
    h: 800,
  },
];

const PROJECTS = [
  { value: "18", unit: "km", title: "Township roads", detail: "Resurfacing and drainage across the inner city.", status: "Ongoing" },
  { value: "24", unit: "points", title: "Water schemes", detail: "Boreholes and standpipes serving city wards.", status: "Ongoing" },
  { value: "10", unit: "clinics", title: "Ward health posts", detail: "Refurbishment and equipment upgrades.", status: "Planned" },
  { value: "6", unit: "markets", title: "Market upgrades", detail: "Stalls, sanitation and access improvements.", status: "Planned" },
];

function Illu({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image src={src} alt={alt} width={width} height={height} unoptimized className={className} />
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-widest ${
        light ? "text-amber-300" : "text-indigo-700 dark:text-indigo-400"
      }`}
    >
      {children}
    </p>
  );
}

function Star({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5l2.9 6.3 6.6.7-4.9 4.4 1.4 6.6L12 17.1 6 20.5l1.4-6.6L2.5 9.5l6.6-.7z" />
    </svg>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % FEATURES.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = FEATURES[activeSlide];

  return (
    <div className="bg-white text-gray-900 dark:bg-[#0a0b12] dark:text-gray-100">
      {/* Top bar */}
      <header className="sticky top-0 z-999 border-b border-gray-200 bg-white/90 backdrop-blur-sm dark:border-white/10 dark:bg-[#0a0b12]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-10">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-indigo-700 font-bold text-white">JL</span>
            <span className="leading-tight">
              <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-600 dark:text-amber-400">
                <Star className="size-3" /> State Capital
              </span>
              <span className="block text-sm font-bold">Jalingo LGA</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-gray-600 lg:flex dark:text-gray-300">
            <a href="#capital" className="hover:text-indigo-700 dark:hover:text-indigo-400">The Capital</a>
            <a href="#map" className="hover:text-indigo-700 dark:hover:text-indigo-400">Map</a>
            <a href="#directorates" className="hover:text-indigo-700 dark:hover:text-indigo-400">Directorates</a>
            <a href="#wards" className="hover:text-indigo-700 dark:hover:text-indigo-400">Wards</a>
            <a href="#projects" className="hover:text-indigo-700 dark:hover:text-indigo-400">Projects</a>
            <a href="#leadership" className="hover:text-indigo-700 dark:hover:text-indigo-400">Leadership</a>
          </nav>
          <a href="#contact" className="rounded-full bg-indigo-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-800 focus:ring focus:ring-indigo-300">
            Contact us
          </a>
        </div>
      </header>

      {/* Hero — full-bleed carousel with image background and overlay */}
      <section id="top" className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${currentSlide.img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-indigo-900/75 to-indigo-800/45" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-24">
          <div className="max-w-xl lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-indigo-950">
              <Star className="size-3.5" /> Capital of Taraba State
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Jalingo
              <span className="mt-1 block text-2xl font-semibold text-indigo-200 sm:text-3xl">
                Local Government Area
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm font-semibold leading-relaxed text-white sm:text-base lg:text-lg">
              {currentSlide.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#directorates" className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-indigo-950 transition hover:bg-amber-300 focus:ring focus:ring-amber-200">
                Council services
              </a>
              <a href="#capital" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:border-amber-300 hover:text-amber-300">
                About the city
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 rounded-full bg-slate-950/30 px-4 py-2 backdrop-blur-sm">
              {FEATURES.map((feature, index) => (
                <button
                  key={feature.title}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === index ? "w-8 bg-amber-400" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="map" className="border-y border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-[#101223]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Location</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Jalingo LGA on the map</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The capital of Taraba State sits at the heart of the broader regional landscape, with the council area highlighted for quick orientation.
            </p>
          </div>

          <div className="mt-10 rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0a0b12] sm:p-8">
            <div className="mx-auto max-w-4xl">
              <JalingoMap />
            </div>
          </div>
        </div>
      </section>

      {/* Stat ribbon */}
      <section className="border-y border-gray-200 bg-white dark:border-white/10 dark:bg-[#0a0b12]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-gray-200 px-0 sm:grid-cols-4 sm:divide-y-0 dark:divide-white/10">
          {[
            ["10", "Wards"],
            ["Jalingo", "Headquarters"],
            ["≈195 km²", "Land area"],
            ["1991", "State capital since"],
          ].map(([v, l]) => (
            <div key={l} className="px-5 py-8 text-center">
              <p className="text-2xl font-extrabold text-indigo-700 sm:text-3xl dark:text-indigo-400">{v}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature zig-zag */}
      <section id="capital" className="mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-24">
        <div className="space-y-20 sm:space-y-28">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <Eyebrow>{f.tag}</Eyebrow>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{f.title}</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{f.body}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-300">
                      <span className="flex size-5 flex-none items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-400">
                        <Star className="size-2.5" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`flex items-center justify-center rounded-2xl bg-indigo-50 p-8 dark:bg-[#101223] ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <Illu src={f.img} alt={f.alt} width={f.w} height={f.h} className="h-auto w-full max-w-md" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Directorates — bordered grid */}
      <section id="directorates" className="border-y border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-[#0c0e18]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Directorates</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Council services for city residents
            </h2>
          </div>
          <div className="mt-12 grid border-l border-t border-gray-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10">
            {DIRECTORATES.map((d, i) => (
              <div
                key={d.title}
                className="group border-b border-r border-gray-200 bg-white p-8 transition hover:bg-indigo-50/60 dark:border-white/10 dark:bg-[#0a0b12] dark:hover:bg-[#131628]"
              >
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-bold group-hover:text-indigo-700 dark:group-hover:text-indigo-400">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wards — ruled two-column list */}
      <section id="wards" className="mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <Eyebrow>Our Wards</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Every neighbourhood represented
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The council serves the wards of Jalingo — from the old quarters of
              Kona and Majidadi to the growing districts of Turaki and Sarkin
              Dawaki.
            </p>
            <div className="mt-8 flex items-center justify-center rounded-2xl bg-indigo-50 p-6 dark:bg-[#101223]">
              <Illu
                src="/illustrations/walk-city.svg"
                alt="Illustration of people walking in the city"
                width={650}
                height={619}
                className="h-auto w-full max-w-xs"
              />
            </div>
          </div>
          <div>
            <ul className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-white/10 dark:border-white/10">
              {WARDS.map((w, i) => (
                <li
                  key={w}
                  className="group flex items-center gap-5 py-4 transition hover:bg-indigo-50/50 dark:hover:bg-[#131628]"
                >
                  <span className="w-8 text-sm font-bold text-amber-600 dark:text-amber-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold group-hover:text-indigo-700 dark:group-hover:text-indigo-400">
                    {w}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects — big-number cards */}
      <section id="projects" className="bg-indigo-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-24">
          <div className="max-w-2xl">
            <Eyebrow light>Projects</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Investing in the capital
            </h2>
            <p className="mt-4 text-lg text-indigo-100/80">
              Works under way and planned across the wards of Jalingo.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-amber-400">{p.value}</span>
                  <span className="text-sm font-semibold text-indigo-200">{p.unit}</span>
                </div>
                <h3 className="mt-3 text-sm font-bold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-indigo-100/75">{p.detail}</p>
                <span
                  className={`mt-4 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    p.status === "Ongoing"
                      ? "bg-amber-400/20 text-amber-300"
                      : "bg-white/10 text-indigo-200"
                  }`}
                >
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="border-b border-gray-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-24">
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
            <Image
              src="/chairman.jpg"
              alt="Hon. Nura Dantsoho"
              width={520}
              height={650}
              className="mx-auto aspect-4/5 w-72 rounded-2xl object-cover shadow-sm sm:w-80 md:mx-0 md:w-96 lg:w-[26rem]"
              priority
            />

            <div>
              <Eyebrow>Leadership</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Hon. Nura Dantsoho</h2>
              <p className="mt-1 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                Executive Chairman, Jalingo Local Government Council
              </p>
              <blockquote className="mt-5 border-l-4 border-amber-400 pl-6">
                <p className="max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                  &ldquo;As the capital city council, our duty is to set the
                  standard — clean streets, working services and a government
                  that answers to the people of every ward in Jalingo.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Contact — split */}
      <section id="contact" className="grid lg:grid-cols-2">
        <div className="bg-gray-50 px-5 py-16 sm:px-10 sm:py-24 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] dark:bg-[#0c0e18]">
          <div className="mx-auto max-w-xl lg:mx-0">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Visit the council secretariat
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Our offices are open to every resident of Jalingo for certificates,
              permits, rates and community matters.
            </p>
            <dl className="mt-8 space-y-5">
              {[
                ["Address", "Jalingo LGA Secretariat, Jalingo, Taraba State"],
                ["Phone", "+234 (0) 800 000 0000"],
                ["Email", "info@jalingo.tr.gov.ng"],
                ["Hours", "Monday – Friday, 8:00am – 4:00pm"],
              ].map(([t, d]) => (
                <div key={t} className="border-l-2 border-indigo-200 pl-4 dark:border-indigo-400/30">
                  <dt className="text-xs font-bold uppercase tracking-wide text-indigo-700 dark:text-indigo-400">{t}</dt>
                  <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="flex items-center justify-center bg-indigo-50 px-5 py-16 sm:px-10 dark:bg-[#101223]">
          <Illu
            src="/illustrations/meeting.svg"
            alt="Illustration of a council meeting"
            width={788}
            height={453}
            className="h-auto w-full max-w-md"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950 text-indigo-100/70">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 sm:px-10 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-amber-400 font-bold text-indigo-950">JL</span>
            <div>
              <p className="font-bold text-white">Jalingo LGA</p>
              <p className="text-xs">Capital of Taraba State, Nigeria</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#capital" className="hover:text-white">The Capital</a>
            <a href="#directorates" className="hover:text-white">Directorates</a>
            <a href="#wards" className="hover:text-white">Wards</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <p className="text-xs">
            © {new Date().getFullYear()} Jalingo Local Government Area.
          </p>
        </div>
      </footer>
    </div>
  );
}
