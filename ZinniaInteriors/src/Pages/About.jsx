import React from "react";
import {
  ShieldCheck,
  Compass,
  Sparkles,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const corePillars = [
    {
      title: "Architectural Integrity",
      icon: Compass,
      description:
        "Structural spatial planning, precise floorplan blueprints, and bespoke custom joinery tailored to unique interior layouts.",
    },
    {
      title: "Material Curation",
      icon: Sparkles,
      description:
        "Hand-sourcing rare sustainable marbles, artisan European timbers, and luxury textiles crafted for enduring refinement.",
    },
    {
      title: "Turnkey Execution",
      icon: ShieldCheck,
      description:
        "Flawless end-to-end project management—spanning initial spatial concept to white-glove final installation.",
    },
  ];

  const studioStats = [
    { label: "Completed Projects", value: "120+" },
    { label: "Architectural Awards", value: "18" },
    { label: "Years of Excellence", value: "12" },
    { label: "Client Satisfaction", value: "99%" },
  ];

  return (
    <>
      <div className="bg-stone-950 text-stone-100 min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Page Header */}
          <div className="text-center space-y-4 pt-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              — Crafting Bespoke Spaces
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100">
              About Zinnia Interiors
            </h1>
            <p className="text-stone-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Founded on the belief that environment shapes human emotion,
              Zinnia Interiors combines rigorous architectural planning with
              exquisite interior curation to transform residential and
              commercial sanctuaries.
            </p>
          </div>

          {/* Studio Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-stone-900/60 border border-stone-800/80 p-8 rounded-2xl">
            {studioStats.map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <p className="text-3xl sm:text-4xl font-serif font-bold text-amber-500">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Core Pillars Section */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-100">
                Our Core Design Philosophy
              </h2>
              <p className="text-stone-400 text-sm max-w-xl mx-auto">
                Every spatial transformation is guided by three non-negotiable
                principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {corePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <>
                    <div
                      key={pillar.title}
                      className="bg-stone-900 border border-stone-800 hover:border-amber-500/40 p-8 rounded-2xl transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="p-3.5 bg-amber-500/10 text-amber-500 rounded-xl w-fit">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-stone-100">
                          {pillar.title}
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {/* Call to Action Footer */}
          <div className="bg-stone-900 border border-stone-800 p-8 sm:p-10 rounded-2xl text-center space-y-4 shadow-xl">
            <Award className="w-10 h-10 text-amber-500 mx-auto" />
            <h3 className="text-2xl font-serif font-bold text-stone-100">
              Elevate Your Living Experience
            </h3>
            <p className="text-stone-400 text-sm max-w-lg mx-auto">
              Partner with our interior architects to bring your architectural
              vision to life.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <button className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-3.5 rounded-xl text-sm transition-colors inline-flex items-center gap-2 shadow-lg">
                  Schedule Consultation <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
