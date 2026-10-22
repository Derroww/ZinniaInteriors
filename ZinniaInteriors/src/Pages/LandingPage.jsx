import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="bg-stone-950 text-stone-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative px-4 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text & CTA Buttons */}
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                — A Personal Touch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-100 leading-tight">
                Every room starts as a{" "}
                <span className="italic text-amber-500 font-normal">
                  drawing
                </span>
                , before it becomes a feeling.
              </h1>
              <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-xl">
                Zinnia Interiors crafts bespoke architectural and spatial
                experiences tailored to sophisticated lifestyles.
              </p>

              {/* Fixed Contrast Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link to="/projects">
                  <button className="bg-stone-900 hover:bg-stone-800 text-stone-100 border border-stone-700 font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-md">
                    Explore Projects
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg">
                    Book Consultation
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Render */}
            <div className="relative bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-xl overflow-hidden">
              <div className="border border-stone-500 p-4 rounded-xl space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-stone-500 mb-4">
                  <span>FLOOR PLAN BLUEPRINT</span>
                  <span></span>
                </div>
                <div className="relative h-96 w-full bg-stone-950 border border-stone-800/80 rounded-xl overflow-hidden">
                  <img src="/Images/Design.jpg" alt="Architectural Floor Plan Blueprint" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent pointer-events-none" />
                  <button className="bg-stone-900/90 text-stone-200 border border-stone-700 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
                    Interactive Spatial Render
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Closed inner container div */}
        </section>{" "}
        {/* Closed section */}
      </div>
    </>
  );
}
