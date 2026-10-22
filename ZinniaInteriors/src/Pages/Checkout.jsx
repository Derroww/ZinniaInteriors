import React, { useState } from "react";
import { useShop } from "../Context/ShopContext";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  ShieldCheck,
  CreditCard,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

export default function Checkout() {
  const { cart, createOrder } = useShop();
  const { user, showToast } = useAuth();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("M-Pesa Express");
  const [formData, setFormData] = useState({
    fullName: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    paymentAccount: "",
  });

  const subtotal =
    cart?.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0) ||
    0;

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderDetails = {
      id: `ZNN-${Math.floor(100000 + Math.random() * 900000)}`,
      customerName: formData.fullName,
      customerEmail: formData.email,
      phone: formData.phone,
      shippingAddress: formData.address,
      paymentMethod,
      paymentAccount: formData.paymentAccount || formData.phone,
      totalAmount: subtotal,
      items: cart,
      status: "Processing",
      createdAt: new Date().toISOString(),
    };

    createOrder(orderDetails);
    if (showToast) showToast("Order placed successfully!");
    navigate("/delivery");
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="bg-stone-950 text-stone-100 min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl text-center space-y-4">
          <h2 className="text-2xl font-serif font-bold text-stone-100">
            No Items to Checkout
          </h2>
          <p className="text-stone-400 text-sm">
            Please add products to your cart before proceeding.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-stone-950 text-stone-100 min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="pt-4 border-b border-stone-800 pb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              — Finalize Purchase
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 mt-1">
              Checkout & Payment
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          >
            {/* Left Column: Delivery & Payment Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Delivery Address Section */}
              <div className="bg-stone-900 border border-stone-800 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl">
                <div className="flex items-center gap-2.5 text-amber-500">
                  <MapPin className="w-5 h-5" />
                  <h2 className="text-lg font-bold font-serif text-stone-100">
                    Delivery Address
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase font-bold text-stone-400 block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-sm text-stone-100 focus:border-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase font-bold text-stone-400 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-sm text-stone-100 focus:border-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase font-bold text-stone-400 block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 0712345678"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-sm text-stone-100 focus:border-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase font-bold text-stone-400 block mb-1">
                      Street Address / House No.
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Kilimani, Nairobi, Apt 4B"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-sm text-stone-100 focus:border-amber-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Selection Section */}
              <div className="bg-stone-900 border border-stone-800 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl">
                <div className="flex items-center gap-2.5 text-amber-500">
                  <ShieldCheck className="w-5 h-5" />
                  <h2 className="text-lg font-bold font-serif text-stone-100">
                    Select Payment Method
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("M-Pesa Express")}
                    className={`p-4 rounded-xl border flex items-center justify-center gap-3 transition-all ${
                      paymentMethod === "M-Pesa Express"
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-400 font-bold"
                        : "border-stone-800 bg-stone-950 text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    <PhoneCall className="w-5 h-5" />
                    <span className="text-sm">M-Pesa Express</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("Credit / Debit Card")}
                    className={`p-4 rounded-xl border flex items-center justify-center gap-3 transition-all ${
                      paymentMethod === "Credit / Debit Card"
                        ? "border-amber-500 bg-amber-500/10 text-amber-400 font-bold"
                        : "border-stone-800 bg-stone-950 text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span className="text-sm">Credit / Debit Card</span>
                  </button>
                </div>

                {/* Payment Account Input */}
                <div className="pt-2">
                  <label className="text-xs uppercase font-bold text-stone-400 block mb-1">
                    {paymentMethod === "M-Pesa Express"
                      ? "M-Pesa Phone Number"
                      : "Card / Account Details"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={
                      paymentMethod === "M-Pesa Express"
                        ? "07XX XXX XXX"
                        : "XXXX-XXXX-XXXX-XXXX"
                    }
                    value={formData.paymentAccount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        paymentAccount: e.target.value,
                      })
                    }
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-sm text-stone-100 focus:border-amber-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-6 shadow-xl sticky top-6">
              <h2 className="text-xl font-serif font-bold text-stone-100 border-b border-stone-800 pb-3">
                Order Summary
              </h2>

              {/* Line Items List */}
              <div className="space-y-4 max-h-64 overflow-y-auto pr-1 divide-y divide-stone-800/60">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="pt-3 first:pt-0 flex justify-between items-center text-sm"
                  >
                    <div>
                      <p className="font-bold text-stone-200">{item.name}</p>
                      <p className="text-xs text-stone-500">
                        Qty: {item.quantity || 1}
                      </p>
                    </div>
                    {/* Fixed Line Item Price in KSH */}
                    <span className="font-mono font-bold text-amber-500">
                      KSH {(item.price * (item.quantity || 1)).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="border-t border-stone-800 pt-4 flex justify-between items-center">
                <span className="text-stone-300 font-bold">Total:</span>
                <span className="text-xl font-mono font-bold text-amber-500">
                  KSH {subtotal.toLocaleString()}
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold py-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <CheckCircle2 className="w-4 h-4" /> Confirm & Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
