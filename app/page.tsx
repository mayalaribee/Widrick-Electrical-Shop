import {
  BatteryCharging,
  Cable,
  Wrench,
  Zap,
  Settings,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "Batteries",
    icon: BatteryCharging,
    text: "We stock batteries for cars, trucks, ATVs, snowmobiles, UTVs, boats, and emergency lighting systems, including starting, deep cycle, sealed lead acid, and AGM batteries.",
  },
  {
    title: "Hydraulic Hoses",
    icon: Cable,
    text: "Your local hydraulic hose and fitting specialists. We custom-build and repair hydraulic hoses with quick turnaround and dependable quality.",
  },
  {
    title: "Adapters & Fittings",
    icon: Settings,
    text: "We carry Pipe, JIC, BSP, Metric, ORFS, and ORB threads in male and female options, available in straight, 45-degree, and 90-degree angles.",
  },
  {
    title: "Starter & Alternator Repair",
    icon: Wrench,
    text: "We offer starter repair service and keep starters and alternators stocked for many different pieces of equipment.",
  },
  {
    title: "Generator Repair",
    icon: Zap,
    text: "We repair generators for 6, 12, and 24 volt systems, including positive and negative ground setups.",
  },
  {
    title: "Electric Motors",
    icon: Zap,
    text: "We stock DC motor options for equipment such as plows and golf carts.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="fixed left-0 top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-black tracking-tight text-blue-950">
            Widrick Electrical
          </h1>

          <div className="hidden items-center gap-8 font-semibold md:flex">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 px-6 pb-24 pt-40 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(135deg,#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-200">
              Electrical • Batteries • Hydraulic Hoses
            </p>

            <h2 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              Dependable service for your equipment, farm, and home.
            </h2>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-blue-100">
              Widrick Electrical provides reliable parts, repairs, batteries,
              hydraulic hoses, adapters, generators, starters, alternators, and
              electric motors.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="rounded-md bg-white px-8 py-4 text-center font-bold text-blue-950 transition hover:bg-blue-100"
              >
                View Services
              </a>

              <a
                href="#contact"
                className="rounded-md border-2 border-white px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-blue-950"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 text-slate-900 shadow-2xl">
            <h3 className="mb-6 text-3xl font-black text-blue-950">
              Quick Service. Reliable Parts.
            </h3>

            <div className="space-y-4">
              {[
                "Battery sales",
                "Hydraulic hose repair",
                "Custom hose building",
                "Adapters and fittings",
                "Starter and alternator repair",
                "Generator repair",
                "DC electric motors",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-100 p-4">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 font-bold uppercase tracking-[0.25em] text-blue-700">
            About Us
          </p>

          <h2 className="mb-6 text-4xl font-black md:text-5xl">
            Service you can rely on for years to come.
          </h2>

          <p className="text-lg leading-9 text-slate-600">
            Here at Widrick Electrical, we strive to provide for our customers’
            needs in a timely manner and offer dependable services that can be
            relied upon for years to come. We serve construction, agriculture,
            and everyday homeowners.
          </p>
        </div>
      </section>

      <section id="services" className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 font-bold uppercase tracking-[0.25em] text-blue-700">
              Our Services
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Parts, repairs, and custom solutions.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-900 text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-4 text-2xl font-black text-blue-950">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-slate-600">{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-blue-900 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-8">
            <Clock className="mb-4 h-9 w-9" />
            <h3 className="mb-3 text-2xl font-black">Hours</h3>
            <p>Monday–Friday</p>
            <p className="text-2xl font-black">8:00 AM – 4:00 PM</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-8">
            <Phone className="mb-4 h-9 w-9" />
            <h3 className="mb-3 text-2xl font-black">Phone</h3>
            <p>Replace with phone number</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-8">
            <MapPin className="mb-4 h-9 w-9" />
            <h3 className="mb-3 text-2xl font-black">Location</h3>
            <p>Replace with business address</p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-bold uppercase tracking-[0.25em] text-blue-700">
              Contact
            </p>

            <h2 className="mb-6 text-4xl font-black md:text-5xl">
              Need a battery, hose, fitting, or repair?
            </h2>

            <p className="mb-8 text-lg leading-8 text-slate-600">
              Reach out to Widrick Electrical for dependable service and quick
              turnaround.
            </p>

            <div className="space-y-5 text-lg">
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-700" />
                <span><strong>Phone:</strong> Replace with phone number</span>
              </p>

              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-700" />
                <span><strong>Email:</strong> Replace with email address</span>
              </p>

              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-700" />
                <span><strong>Address:</strong> Replace with business address</span>
              </p>

              <p className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-700" />
                <span><strong>Hours:</strong> Monday–Friday, 8:00 AM–4:00 PM</span>
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-100 p-8">
            <h3 className="mb-6 text-2xl font-black text-blue-950">
              Serving
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Construction",
                "Agriculture",
                "Homeowners",
                "Equipment repair",
                "Battery replacement",
                "Hydraulic hose repair",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-white p-5 font-bold shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-slate-400">
        © {new Date().getFullYear()} Widrick Electrical. All rights reserved.
      </footer>
    </main>
  );
}
