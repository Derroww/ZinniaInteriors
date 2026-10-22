import React from "react";
import {
  Compass,
  PenTool,
  Lightbulb,
  Home,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const servicesList = [
    {
      title: "Full Interior Architecture",
      icon: Compass,
      description:
        "Complete structural spatial planning, wall reconfiguration, ceiling details, and high-definition photorealistic 3D renderings.",
      features: [
        "Spatial Layout & Blueprint Drafting",
        "Photorealistic 3D Visualizations",
        "Structural & Electrical Schematics",
        "Site Coordination & Supervision",
      ],
    },
    {
      title: "Bespoke Furniture & Millwork",
      icon: PenTool,
      description:
        "Custom cabinetry, architectural joinery, handcrafted timber installations, and curated global furniture procurement.",
      features: [
        "Custom Wardrobes & Cabinetry",
        "Artisan European Timber Joinery",
        "Curated International Furniture Sourcing",
        "White-Glove Assembly & Fitting",
      ],
    },
    {
      title: "Lighting & Spatial Styling",
      icon: Lightbulb,
      description:
        "Aesthetic ambient lighting design, custom fixture curation, textile pairing, and final art staging.",
      features: [
        "Architectural Lighting Schematics",
        "Curated Designer Light Fixtures",
        "Textile, Drapery & Rug Selection",
        "Fine Art Staging & Accessories",
      ],
    },
    {
      title: "Turnkey Commercial Atelier",
      icon: Home,
      description:
        "End-to-end luxury commercial interiors, executive suites, boutique hotel spaces, and high-end retail atmospheres.",
      features: [
        "Executive & Retail Spatial Design",
        "Acoustic & Privacy Optimization",
        "Brand Identity Spatial Mapping",
        "On-Time Turnkey Delivery",
      ],
    },
  ];

  return (
    <>
      <div className="bg-stone-950 text-stone-100 min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Page Header */}
          <div className="text-center space-y-4 pt-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              — Tailored Architectural Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100">
              Our Professional Services
            </h1>
            <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              From comprehensive structural remodeling to handcrafted furniture
              joinery, we deliver uncompromising quality for private residences
              and commercial ateliers.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-stone-900 border border-stone-800 hover:border-amber-500/40 p-8 rounded-2xl transition-all duration-300 shadow-xl space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="p-3.5 bg-amber-500/10 text-amber-500 rounded-xl w-fit">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-stone-100">
                      {service.title}
                    </h2>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Feature Checklist */}
                    <div className="pt-2 border-t border-stone-800/80 space-y-2.5">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2.5 text-xs text-stone-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link to="/contact">
                      <button className="w-full bg-stone-950 hover:bg-amber-500 hover:text-stone-950 border border-stone-800 hover:border-amber-500 text-stone-200 font-semibold py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                        Inquire About Service{" "}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Consultation Callout Banner */}
          <div className="bg-stone-900 border border-stone-800 p-8 sm:p-10 rounded-2xl text-center space-y-4 shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-stone-100">
              Need a Custom Architectural Scope?
            </h3>
            <p className="text-stone-400 text-sm max-w-xl mx-auto">
              Our interior architects collaborate with you to define project
              phases, materials, and custom budgets suited to your spatial
              requirements.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <button className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-3.5 rounded-xl text-sm transition-colors inline-flex items-center gap-2 shadow-lg">
                  Book Design Consultation <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
