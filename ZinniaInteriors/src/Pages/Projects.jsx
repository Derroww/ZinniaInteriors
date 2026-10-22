import React, { useState } from "react";
import { PROJECTS_DATA } from "../Data/data";
import { ArrowRight, Image as ImageIcon, FolderGit2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Living Room",
    "Kitchen",
    "Bedroom",
    "Office",
    "Bathroom",
  ];

  // Filter projects by category
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <>
      <div className="bg-stone-950 text-stone-100 min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-4 pt-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              — Portfolio of Interior Excellence
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100">
              Featured Architectural Projects
            </h1>
            <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Explore our showcase of bespoke spatial transformations across
              luxury private residences and commercial executive suites.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-stone-900 border border-stone-800 p-2 rounded-2xl max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-amber-500 text-stone-950 font-bold shadow-md"
                    : "text-stone-400 hover:text-stone-100 hover:bg-stone-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-stone-900 border border-stone-800 hover:border-amber-500/40 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Project Card Image Container */}
                <div className="relative h-64 bg-stone-950 border-b border-stone-800 overflow-hidden flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        e.target.style.display = "none";
                        if (e.target.nextSibling)
                          e.target.nextSibling.style.display = "flex";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : null}

                  {/* Fallback Display if image fails to load */}
                  <div
                    className={`hidden flex-col items-center justify-center p-6 text-center space-y-2 text-stone-600 ${!project.image ? "!flex" : ""}`}
                  >
                    <ImageIcon className="w-8 h-8 text-stone-700" />
                    <p className="text-xs font-mono text-stone-500">
                      Image not found
                    </p>
                    <p className="text-[10px] text-stone-600 font-mono">
                      {project.image}
                    </p>
                  </div>

                  <span className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md border border-stone-800 text-amber-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Project Card Details */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {project.location && (
                      <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest block">
                        {project.location}
                      </span>
                    )}
                    <h3 className="text-xl font-serif font-bold text-stone-100 group-hover:text-amber-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {project.desc || project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-800/80">
                    <Link to="/contact">
                      <button className="w-full bg-stone-950 hover:bg-amber-500 hover:text-stone-950 border border-stone-800 hover:border-amber-500 text-stone-200 font-semibold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                        Inquire Similar Project{" "}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Banner */}
          <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl text-center space-y-4 shadow-xl">
            <FolderGit2 className="w-10 h-10 text-amber-500 mx-auto" />
            <h3 className="text-2xl font-serif font-bold text-stone-100">
              Have a Specific Architectural Vision?
            </h3>
            <p className="text-stone-400 text-sm max-w-lg mx-auto">
              Our interior architecture team accepts custom commissions for
              private homes, luxury penthouses, and executive offices.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <button className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-3.5 rounded-xl text-sm transition-colors inline-flex items-center gap-2 shadow-lg">
                  Discuss Your Project <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
