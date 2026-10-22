import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const { showToast } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "Full Interior Architecture",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Preserves your existing AuthContext toast behavior safely
    if (showToast) {
      showToast("Consultation request submitted successfully!");
    } else {
      alert("Consultation request submitted successfully!");
    }
  };

  return (
    <>
      <div className="bg-stone-950 text-stone-100 min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-3 pt-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              — Connect With Our Studio
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100">
              Book a Consultation
            </h1>
            <p className="text-stone-400 text-sm md:text-base max-w-xl mx-auto">
              Initiate your spatial transformation. Share your vision with our
              interior architecture team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Studio Info Sidebar */}
            <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl space-y-8 shadow-xl">
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-100 mb-2">
                  Studio Headquarters
                </h3>
                <p className="text-xs text-stone-400">
                  Visit our design studio or reach out directly for inquiries.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm text-stone-400 mt-0.5">
                      Kilimani, Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <p className="text-sm text-stone-400 mt-0.5">
                      +254 745275367
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sm text-stone-400 mt-0.5">
                      zinniainteriors@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="lg:col-span-2 bg-stone-900 border border-stone-800 p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3.5 text-sm text-stone-100 focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3.5 text-sm text-stone-100 focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-300">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="+254 712 345 678"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3.5 text-sm text-stone-100 focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-300">
                      Service Scope
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceType: e.target.value,
                        })
                      }
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3.5 text-sm text-stone-100 focus:border-amber-500 outline-none transition-colors"
                    >
                      <option>Full Interior Architecture</option>
                      <option>Bespoke Furniture & Millwork</option>
                      <option>Lighting & Spatial Styling</option>
                      <option>Commercial Design</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-300">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your space, timeline, and aesthetic vision..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3.5 text-sm text-stone-100 focus:border-amber-500 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold py-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" /> Submit Consultation Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
