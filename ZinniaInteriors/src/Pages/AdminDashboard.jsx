import React, { useState } from "react";
import { useShop } from "../Context/ShopContext";
import {
  PackageCheck,
  Truck,
  ShoppingBag,
  MapPin,
  DollarSign,
} from "lucide-react";

export default function AdminDashboard() {
  const { orders } = useShop();
  const [filter, setFilter] = useState("All");

  const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 text-stone-100 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold text-amber-500">
              Admin Control Center
            </h1>
            <p className="text-xs text-stone-400 mt-1">
              Manage customer orders, payments, and delivery fulfillment
            </p>
          </div>
        </div>

        {/* High level Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-4 bg-amber-500/10 text-amber-500 rounded-xl">
              <DollarSign className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs text-stone-400 uppercase font-bold">
                Total Revenue
              </p>
              <p className="text-2xl font-bold text-stone-100">
                ${totalRevenue.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-xl">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs text-stone-400 uppercase font-bold">
                Total Orders
              </p>
              <p className="text-2xl font-bold text-stone-100">
                {orders.length}
              </p>
            </div>
          </div>

          <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-4 bg-blue-500/10 text-blue-500 rounded-xl">
              <Truck className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs text-stone-400 uppercase font-bold">
                Active Deliveries
              </p>
              <p className="text-2xl font-bold text-stone-100">
                {orders.length}
              </p>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-stone-200">
            Customer Orders & Delivery Locations
          </h2>

          {orders.length === 0 ? (
            <p className="text-stone-500 text-sm py-8 text-center">
              No orders placed yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-stone-300">
                <thead className="bg-stone-950 text-amber-500 uppercase text-xs">
                  <tr>
                    <th className="p-3">Order ID</th>
                    <th className="p-3">Customer</th>
                    <th className="p-3">Delivery Location</th>
                    <th className="p-3">Payment</th>
                    <th className="p-3">Total</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-stone-800/50">
                      <td className="p-3 font-mono font-bold text-amber-400">
                        {order.id}
                      </td>
                      <td className="p-3">
                        <p className="font-bold text-stone-100">
                          {order.customerName}
                        </p>
                        <p className="text-xs text-stone-500">{order.phone}</p>
                      </td>
                      <td className="p-3 max-w-xs">
                        <p className="flex items-center gap-1 text-xs text-stone-300">
                          <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />{" "}
                          {order.shippingAddress}
                        </p>
                      </td>
                      <td className="p-3 uppercase text-xs font-semibold text-emerald-400">
                        {order.paymentMethod} ({order.paymentAccount})
                      </td>
                      <td className="p-3 font-bold text-stone-100">
                        ${order.totalAmount.toLocaleString()}
                      </td>
                      <td className="p-3">
                        <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-bold">
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
