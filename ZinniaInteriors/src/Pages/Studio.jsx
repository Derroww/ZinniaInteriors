import React from "react";
import {
  Layers,
  Palette,
  Users,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Studio() {
  const studioFeatures = [
    {
      title: "Tactile Material Library",
      icon: Palette,
      description:
        "A physical archive containing thousands of curated material swatches—from imported Italian marbles and French oak timbers to hand-woven silks and custom metals.",
    },
    {
      title: "Collaborative Workshop",
      icon: Users,
      description:
        "An interactive design lab where clients, interior architects, and master artisans review 1:1 scale mockups and physical spatial mockups together.",
    },
    {
      title: "3D Spatial Suite",
      icon: Layers,
      description:
        "Equipped with real-time architectural rendering displays to walk clients through lighting models and 3D interior floor plans during consultation sessions.",
    },
  ];

  const studioImages = [
    {
      title: "Workspaces",
      subtitle: "Kilimani Design Studio",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Material Sample Lounge",
      subtitle: "Tactile Curation Space",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  return (
    <>
      <div className="bg-stone-950 text-stone-100 min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Page Header */}
          <div className="text-center space-y-4 pt-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              — Where Concepts Take Shape
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100">
              Our Design Studio
            </h1>
            <p className="text-stone-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Located in the heart of Kilimani, Nairobi, our studio acts as a
              tactile material library, digital visualization lab, and
              collaborative workshop for bespoke interior architecture.
            </p>
          </div>

          {/* High-Resolution Studio Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studioImages.map((item) => (
              <div
                key={item.title}
                className="group bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-amber-500/40"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-stone-100 mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Studio Features Section */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-100">
                The Studio Experience
              </h2>
              <p className="text-stone-400 text-sm max-w-xl mx-auto">
                Engineered to bring tactile texture and structural precision
                into every design decision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studioFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-stone-900 border border-stone-800 hover:border-amber-500/40 p-8 rounded-2xl transition-all duration-300 shadow-xl space-y-4"
                  >
                    <div className="p-3.5 bg-amber-500/10 text-amber-500 rounded-xl w-fit">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-stone-100">
                      {feature.title}
                    </h3>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visit Studio Callout Box */}
          <div className="bg-stone-900 border border-stone-800 p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold text-stone-100">
                Schedule a Studio Visit
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                We welcome clients and collaborators by appointment. Experience
                our material library firsthand and explore sample palettes for
                your prospective project.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-amber-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 shrink-0" /> Kilimani, Nairobi
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 shrink-0" /> Mon - Fri: 8:30 AM -
                  5:30 PM
                </span>
              </div>
            </div>

            <Link to="/contact" className="shrink-0">
              <button className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-3.5 rounded-xl text-sm transition-colors flex items-center gap-2 shadow-lg">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
