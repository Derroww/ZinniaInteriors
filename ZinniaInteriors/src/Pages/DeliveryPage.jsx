import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useShop } from "../Context/ShopContext";
import { Truck, CheckCircle, Package, Clock, MapPin } from "lucide-react";

export default function DeliveryPage() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { orders } = useShop();

  const activeOrder = orders.find((o) => o.id === orderId) || orders[0];

  if (!activeOrder) {
    return (
      <>
        <div className="max-w-4xl mx-auto px-4 py-20 text-center text-stone-100">
          <Package className="w-16 h-16 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">No Active Deliveries Found</h2>
          <p className="text-stone-400 mt-2">
            Place an order from the shop to track your items here.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-block bg-amber-500 text-stone-950 font-bold px-6 py-3 rounded-xl"
          >
            Browse Shop
          </Link>
        </div>
      </>
    );
  }

  const steps = [
    { title: "Order Confirmed", status: "Completed", icon: CheckCircle },
    { title: "Processing & Packaging", status: "In Progress", icon: Package },
    { title: "Out for Delivery", status: "Pending", icon: Truck },
    { title: "Delivered", status: "Pending", icon: MapPin },
  ];

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-10 text-stone-100 space-y-8">
        <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">
              Live Order Tracker
            </span>
            <h1 className="text-2xl font-bold font-serif text-stone-100">
              Order #{activeOrder.id}
            </h1>
            <p className="text-xs text-stone-400 mt-1">
              Delivery to: {activeOrder.shippingAddress}
            </p>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-xl">
            <p className="text-xs text-amber-400 font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4" /> Est. Delivery:{" "}
              {activeOrder.estimatedDelivery}
            </p>
          </div>
        </div>

        {/* Tracking Steps Bar */}
        <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <>
                <div
                  key={step.title}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div
                    className={`p-4 rounded-full ${idx <= 1 ? "bg-amber-500 text-stone-950" : "bg-stone-800 text-stone-500"}`}
                  >
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-stone-200">
                    {step.title}
                  </p>
                  <span
                    className={`text-xs ${idx <= 1 ? "text-amber-400 font-semibold" : "text-stone-500"}`}
                  >
                    {idx === 0 ? "Done" : idx === 1 ? "In Progress" : "Pending"}
                  </span>
                </div>
              </>
            );
          })}
        </div>

        {/* Embedded Delivery Location Map */}
        <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <MapPin className="text-amber-500" /> Delivery Destination Map
          </h3>
          <div className="w-full h-64 rounded-xl overflow-hidden border border-stone-800">
            <iframe
              title="Delivery Google Map"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://maps.google.com/maps?q=Kilimani,Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
