import React, { useState } from "react";
import { PRODUCTS_DATA } from "../Data/data";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useShop } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Eye,
  X,
  Check,
  Image as ImageIcon,
  ShoppingCart,
} from "lucide-react";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart, cart } = useShop();

  const itemsPerPage = 3;
  const totalPages = Math.ceil(PRODUCTS_DATA.length / itemsPerPage);

  const currentProducts = PRODUCTS_DATA.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const totalCartCount =
    cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const isItemInCart = (id) => cart?.some((item) => item.id === id);

  return (
    <>
      <div className="bg-stone-950 text-stone-100 min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-b border-stone-800 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                — Artisanal Collection
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-100 mt-1">
                Curated Design Shop
              </h2>
              <p className="text-stone-400 text-xs mt-1">
                Select artisanal furniture & architectural decor pieces.
              </p>
            </div>

            <Link to="/cart">
              <Button
                variant="outline"
                className="relative flex items-center gap-2 bg-stone-900 border-stone-800 hover:border-amber-500/50 text-stone-200"
              >
                <ShoppingBag className="w-4 h-4 text-amber-500" />
                <span className="text-xs uppercase font-bold tracking-wider"></span>
                {totalCartCount > 0 && (
                  <span className="bg-amber-500 text-stone-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full ml-1">
                    {totalCartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentProducts.map((prod) => (
              <Card
                key={prod.id}
                className="bg-stone-900 border-stone-800 hover:border-amber-500/40 p-5 flex flex-col justify-between transition-all duration-300 shadow-xl rounded-2xl"
              >
                <div>
                  {/* Image Container with Fallback Slot for public/images/ */}
                  <div
                    onClick={() => setSelectedProduct(prod)}
                    className="relative h-56 bg-stone-950 border border-stone-800/80 rounded-xl mb-4 overflow-hidden cursor-pointer flex items-center justify-center group"
                  >
                    {prod.image ? (
                      <img
                        src={prod.image}
                        alt={prod.name}
                        onError={(e) => {
                          e.target.style.display = "none";
                          if (e.target.nextSibling)
                            e.target.nextSibling.style.display = "flex";
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : null}

                    {/* Fallback Display if Image Path in Data isn't loaded yet */}
                    <div
                      className={`hidden flex-col items-center justify-center p-4 text-center space-y-1 text-stone-600 ${!prod.image ? "!flex" : ""}`}
                    >
                      <ImageIcon className="w-8 h-8 text-stone-700" />
                      <p className="text-[11px] font-mono text-stone-500">
                        Image slot ready
                      </p>
                      <p className="text-[9px] text-stone-600 font-mono">
                        Add photo to public/images/
                      </p>
                    </div>

                    {/* Quick View Hover Overlay */}
                    <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-stone-900/90 text-stone-200 border border-stone-700 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-amber-500" /> Quick
                        View
                      </span>
                    </div>
                  </div>

                  <span className="text-xs text-amber-500 uppercase font-semibold tracking-wider">
                    {prod.category}
                  </span>
                  <h3
                    onClick={() => setSelectedProduct(prod)}
                    className="font-bold text-stone-100 text-lg mt-1 font-serif cursor-pointer hover:text-amber-500 transition-colors"
                  >
                    {prod.name}
                  </h3>
                  {prod.description && (
                    <p className="text-stone-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>
                  )}
                </div>

                {/* Price & Action Row */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-stone-800">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-500 block">
                      Price
                    </span>
                    <span className="font-bold text-amber-500 text-base sm:text-lg">
                      KSH {Number(prod.price).toLocaleString()}
                    </span>
                  </div>

                  <Button
                    onClick={() => addToCart(prod)}
                    className={`${
                      isItemInCart(prod.id)
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30"
                        : "bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold"
                    } transition-colors text-xs px-4 py-2 rounded-xl`}
                  >
                    {isItemInCart(prod.id) ? (
                      <span className="flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Added
                      </span>
                    ) : (
                      "Add to Cart"
                    )}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 pt-6">
            <Button
              variant="secondary"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="bg-stone-900 border-stone-800 text-stone-300 hover:bg-stone-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="secondary"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-stone-900 border-stone-800 text-stone-300 hover:bg-stone-800"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-xl w-full p-6 space-y-6 shadow-2xl relative text-stone-100">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-100 bg-stone-950 border border-stone-800 rounded-xl transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="h-56 bg-stone-950 border border-stone-800 rounded-xl overflow-hidden flex items-center justify-center">
                  {selectedProduct.image ? (
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      onError={(e) => {
                        e.target.style.display = "none";
                        if (e.target.nextSibling)
                          e.target.nextSibling.style.display = "flex";
                      }}
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                  <div
                    className={`hidden flex-col items-center justify-center p-4 text-center space-y-1 text-stone-600 ${!selectedProduct.image ? "!flex" : ""}`}
                  >
                    <ImageIcon className="w-8 h-8 text-stone-700" />
                    <p className="text-xs font-mono text-stone-500">
                      Image slot ready
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    {selectedProduct.category}
                  </span>

                  <h3 className="text-xl font-serif font-bold text-stone-100">
                    {selectedProduct.name}
                  </h3>

                  <p className="text-stone-300 text-xs leading-relaxed">
                    {selectedProduct.description ||
                      "Artisanal architectural piece designed and finished to luxury studio specifications."}
                  </p>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-500 block">
                        Price
                      </span>
                      <span className="text-lg font-bold text-amber-500">
                        KSH {Number(selectedProduct.price).toLocaleString()}
                      </span>
                    </div>

                    <Button
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-lg"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" /> Add
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
