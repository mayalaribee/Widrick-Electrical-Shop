export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold text-blue-900">
            Widrick Electrical
          </h1>

          <div className="hidden gap-8 font-medium md:flex">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-blue-950 to-blue-700 px-6 pb-24 pt-40 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-200">
              Electrical • Batteries • Hydraulic Hoses
            </p>

            <h2 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Dependable service for farms, equipment, and homeowners.
            </h2>

            <p className="mb-8 text-lg leading-8 text-blue-100">
              Widrick Electrical provides reliable batteries, hydraulic hoses,
              fittings, starter and alternator repair, generator repair, and DC
              electric motors.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="rounded-md bg-white px-8 py-4 text-center font-bold text-blue-900 hover:bg-blue-100"
              >
                View Services
              </a>

              <a
                href="#contact"
                className="rounded-md border border-white px-8 py-4 text-center font-bold text-white hover:bg-white hover:text-blue-900"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-xl bg-white p-8 text-slate-900 shadow-2xl">
            <h3 className="mb-6 text-2xl font-bold text-blue-900">
              Business Hours
            </h3>

            <div className="rounded-lg bg-slate-100 p-6">
              <p className="text-xl font-bold">Monday–Friday</p>
              <p className="mt-2 text-3xl font-bold text-blue-800">
                8:00 AM – 4:00 PM
              </p>
            </div>

            <p className="mt-6 text-slate-600">
              Quick turnaround, dependable quality, and parts stocked for many
              types of equipment.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 font-bold uppercase tracking-widest text-blue-700">
            About Us
          </p>

          <h2 className="mb-6 text-4xl font-bold text-slate-900">
            Reliable service you can count on for years.
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
            <p className="mb-3 font-bold uppercase tracking-widest text-blue-700">
              Our Services
            </p>

            <h2 className="text-4xl font-bold">
              Parts, repairs, and custom solutions.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Batteries",
                text: "Batteries for cars, trucks, ATVs, snowmobiles, UTVs, boats, and emergency lighting systems.",
              },
              {
                title: "Hydraulic Hoses",
                text: "Custom-built and repaired hydraulic hoses with high-pressure and low-pressure hose options.",
              },
              {
                title: "Adapters & Fittings",
                text: "Pipe, JIC, BSP, Metric, ORFS, and ORB thread options in multiple angles and styles.",
              },
              {
                title: "Starter & Alternator Repair",
                text: "Starter repair services plus stocked starters and alternators for many pieces of equipment.",
              },
              {
                title: "Generator Repair",
                text: "Generator repairs for 6, 12, and 24 volt systems, including positive and negative ground.",
              },
              {
                title: "Electric Motors",
                text: "DC motor options for equipment such as plows and golf carts.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 h-1 w-14 rounded bg-blue-700" />
                <h3 className="mb-4 text-2xl font-bold text-blue-900">
                  {service.title}
                </h3>
                <p className="leading-7 text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-5 text-4xl font-bold">
            Need a battery, hose, fitting, or repair?
          </h2>

          <p className="mb-8 text-lg text-blue-100">
            Contact Widrick Electrical for dependable service and quick
            turnaround.
          </p>

          <a
            href="#contact"
            className="inline-block rounded-md bg-white px-8 py-4 font-bold text-blue-900 hover:bg-blue-100"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 font-bold uppercase tracking-widest text-blue-700">
              Contact
            </p>

            <h2 className="mb-6 text-4xl font-bold">
              We’re ready to help.
            </h2>

            <p className="mb-8 text-lg leading-8 text-slate-600">
              Replace these placeholders with the real contact information
              before publishing.
            </p>

            <div className="space-y-4 text-lg">
              <p><strong>Phone:</strong> Replace with phone number</p>
              <p><strong>Email:</strong> Replace with email address</p>
              <p><strong>Address:</strong> Replace with business address</p>
              <p><strong>Hours:</strong> Monday–Friday, 8:00 AM–4:00 PM</p>
            </div>
          </div>

          <div className="rounded-xl bg-slate-100 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-900">
              Service Areas
            </h3>

            <p className="mb-6 leading-8 text-slate-600">
              Serving customers in construction, agriculture, equipment repair,
              and everyday residential needs.
            </p>

            <div className="space-y-3">
              {[
                "Construction",
                "Agriculture",
                "Homeowners",
                "Equipment repair",
                "Battery replacement",
                "Hydraulic hose repair",
              ].map((item) => (
                <div key={item} className="rounded-md bg-white p-4 font-medium">
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
