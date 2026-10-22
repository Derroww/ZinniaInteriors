import React from "react";
import {
  Compass,
  PenTool,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Briefing",
      icon: Compass,
      description:
        "We begin with an in-depth spatial analysis and client interview to define architectural vision, functional needs, lifestyle routines, and budget parameters.",
    },
    {
      number: "02",
      title: "Drawing & 3D Modeling",
      icon: PenTool,
      description:
        "Translating concepts into technical blueprints, floor plans, lighting schematics, and photorealistic 3D spatial renders for complete visual clarity.",
    },
    {
      number: "03",
      title: "Material Selection & Execution",
      icon: Layers,
      description:
        "Curating bespoke millwork, luxury textiles, premium stone, and artisan furniture pieces followed by precise project management and installation.",
    },
  ];

  return (
    <>
      <div className="bg-stone-950 text-stone-100 min-h-screen py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-3 pt-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              — Methodical Spatial Design
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100">
              The Zinnia Design Process
            </h1>
            <p className="text-stone-400 text-sm md:text-base max-w-2xl mx-auto">
              Executing architectural precision and aesthetic harmony at every
              step of your interior transformation.
            </p>
          </div>

          {/* Process Cards */}
          <div className="space-y-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-stone-900 border border-stone-800 hover:border-amber-500/40 p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-xl flex flex-col md:flex-row items-start md:items-center gap-6"
                >
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-center bg-stone-950 border border-stone-800 rounded-2xl p-4 min-w-[80px] h-[80px]">
                    <span className="text-2xl font-mono font-bold text-amber-500">
                      {step.number}
                    </span>
                  </div>

                  {/* Content Details */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-amber-500" />
                      <h2 className="text-xl font-bold font-serif text-stone-100">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Status Indicator */}
                  <div className="hidden lg:flex items-center gap-1.5 text-xs text-amber-500 font-semibold uppercase tracking-wider bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Phase {step.number}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action Footer */}
          <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl text-center space-y-4">
            <h3 className="text-xl font-bold font-serif text-stone-100">
              Ready to Begin Your Project?
            </h3>
            <p className="text-stone-400 text-sm max-w-lg mx-auto">
              Schedule a consultation with our interior architects to discuss
              your spatial vision and scope.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <button className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-3.5 rounded-xl text-sm transition-colors inline-flex items-center gap-2 shadow-lg">
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
