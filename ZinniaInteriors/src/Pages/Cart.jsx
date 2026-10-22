import React from "react";
import { useShop } from "../Context/ShopContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShoppingBag,
  Image as ImageIcon,
} from "lucide-react";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useShop();
  const navigate = useNavigate();

  const subtotal =
    cart?.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0) ||
    0;

  if (!cart || cart.length === 0) {
    return (
      <>
        <div className="bg-stone-950 text-stone-100 min-h-screen py-20 px-4 flex items-center justify-center">
          <div className="max-w-md w-full bg-stone-900 border border-stone-800 p-8 rounded-2xl text-center space-y-6 shadow-xl">
            <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mx-auto">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-stone-100">
                Your Cart is Empty
              </h2>
              <p className="text-stone-400 text-sm">
                Explore our curated design shop and add artisanal furniture or
                architectural decor to your space.
              </p>
            </div>
            <Link to="/shop">
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg">
                Browse Design Shop
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-stone-950 text-stone-100 min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-stone-800 pb-6 pt-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                — Order Review
              </span>
              <h1 className="text-3xl font-serif font-bold text-stone-100 mt-1">
                Your Shopping Cart
              </h1>
            </div>
            <button
              onClick={clearCart}
              className="text-xs text-stone-400 hover:text-red-400 uppercase tracking-wider font-semibold transition-colors"
            >
              Clear Cart
            </button>
          </div>

          {/* Cart Items List */}
          <div className="space-y-4">
            {cart.map((item) => {
              const itemTotal = item.price * (item.quantity || 1);
              return (
                <div
                  key={item.id}
                  className="bg-stone-900 border border-stone-800 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    {/* Item Image Slot */}
                    <div className="w-20 h-20 bg-stone-950 border border-stone-800 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={(e) => {
                            e.target.style.display = "none";
                            if (e.target.nextSibling)
                              e.target.nextSibling.style.display = "flex";
                          }}
                          className="w-full h-full object-cover"
                        />
                      ) : null}
                      <div
                        className={`hidden flex-col items-center justify-center p-2 text-center text-stone-600 ${!item.image ? "!flex" : ""}`}
                      >
                        <ImageIcon className="w-6 h-6 text-stone-700" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">
                        {item.category || "Decor"}
                      </span>
                      <h3 className="font-serif font-bold text-stone-100 text-lg">
                        {item.name}
                      </h3>
                      <p className="text-xs text-stone-400 font-mono">
                        KSH {Number(item.price).toLocaleString()} ×{" "}
                        {item.quantity || 1}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Controls & Total */}
                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 pt-4 sm:pt-0 border-t sm:border-t-0 border-stone-800">
                    <div className="flex items-center gap-2 bg-stone-950 border border-stone-800 rounded-xl p-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, (item.quantity || 1) - 1)
                        }
                        className="p-1.5 text-stone-400 hover:text-stone-100 transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold font-mono text-stone-200">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, (item.quantity || 1) + 1)
                        }
                        className="p-1.5 text-stone-400 hover:text-stone-100 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Line Total in KSH */}
                    <span className="font-bold text-amber-500 text-base sm:text-lg min-w-[120px] text-right font-mono">
                      KSH {itemTotal.toLocaleString()}
                    </span>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                      className="p-2 text-stone-500 hover:text-red-400 bg-stone-950 border border-stone-800 rounded-xl transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subtotal & Checkout Summary Box */}
          <div className="bg-stone-900 border border-stone-800 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Subtotal Amount
              </span>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-amber-500 font-mono">
                KSH {subtotal.toLocaleString()}
              </p>
              <p className="text-[11px] text-stone-500">
                Taxes and shipping calculated at checkout.
              </p>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
