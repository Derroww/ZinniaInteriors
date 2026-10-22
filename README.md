# Zinnia Interiors — Luxury Spatial & Interior Architecture Platform

A modern, high-contrast, fully responsive web application and admin management system engineered for **Zinnia Interiors**, an interior architecture atelier and curated design studio operating out of Kilimani, Nairobi, Kenya.

---

## 🏢 Company Profile & Business Overview

**Zinnia Interiors** is an interior architecture and luxury spatial curation studio based in Nairobi, Kenya. The firm specializes in high-end residential, executive commercial, and bespoke hospitality spaces across East Africa.

### Core Business Pillars:
1. **Full Interior Architecture**: Structural spatial planning, wall reconfiguration, electrical/lighting schematics, and high-definition photorealistic 3D renderings.
2. **Bespoke Furniture & Millwork**: Handcrafted timber joinery, custom cabinetry, wardrobes, and curated international furniture procurement.
3. **Lighting & Spatial Curation**: Architectural lighting design, custom fixture selection, fine art staging, and acoustic textile integration.
4. **Curated E-Commerce Shop**: Direct-to-client procurement of luxury interior decor, artisanal lighting, and signature furniture priced in Kenyan Shillings (**KSH**).

---

## 🎯 Problem Statement

Traditional luxury interior design workflows suffer from fragmentation between initial architectural consultation, physical studio material selection, and post-concept furniture procurement:

* **Lack of Visual & Spatial Transparency**: Clients often struggle to visualize spatial concepts and floor plan blueprints without integrated interactive renders.
* **Inconsistent Design Language Across Channels**: Many studio websites fail to reflect the high-end, tactile luxury aesthetic of their physical ateliers.
* **Fulfillment & Currency Disconnects**: E-commerce platforms targeting Kenyan clients frequently operate in foreign currencies (e.g., USD) and lack seamless integration with local mobile money payment networks (M-Pesa Express).
* **Opaque Project Tracking**: Clients lack clear visibility into order fulfillment stages (*Processing*, *In Transit*, *Delivered*).

---

## 💡 Solution

**Zinnia Interiors Web Platform & Atelier Hub** bridges the gap between architectural concept design, local luxury e-commerce, and real-time order fulfillment:

* **High-Contrast Dark Mode Design System**: Built with deep stone containers (`bg-stone-950`, `stone-900`) and warm amber accents (`text-amber-500`) to evoke a luxury atelier experience.
* **Localized E-Commerce & Currency**: Standardized product pricing in Kenyan Shillings (**KSH**) with integrated M-Pesa Express and credit card checkout flows.
* **Interactive Product & Spatial Modals**: Quick-view product detail overlays and floor plan blueprint render views.
* **Role-Based Admin Control Center**: Email-verified administrative route (`/admin`) restricted to authorized staff (`derricksum@gmail.com`) for tracking revenue metrics and updating client order fulfillment in real time.
* **Zero-Break Image Asset Fallbacks**: Local image slot resolution targeting `public/Images/` with automatic placeholder indicators for missing or unlinked visual assets.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology / Library | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 18 / Vite | Fast, module-based component architecture |
| **Styling & Design** | Tailwind CSS | Custom utility-first dark theme design system |
| **Routing** | React Router DOM (v6) | Multi-page SPA navigation and protected admin routes |
| **Icons** | Lucide React | Modern architectural and UI icons |
| **Backend & Authentication** | Firebase Auth & Firestore | Role-based email authentication and live order persistence |
| **State Management** | React Context API (`ShopContext`, `AuthContext`) | Global shopping cart, order state tracking, and auth state |
| **UI Components** | Custom Radix/Shadcn-inspired UI | High-contrast cards, buttons, and modal overlays |

---

## 🔑 Key Features

### 1. Public Spatial & Studio Pages
* **Landing Page**: High-impact hero section, core studio metrics, and featured project previews.
* **About Page**: Mission statement, studio performance statistics (*120+ Completed Projects*, *18 Architectural Awards*), and core design pillars.
* **Studio Atelier**: Highlights the physical Kilimani material library, collaborative design lab, 3D spatial suite, and appointment booking workflow.
* **Services Page**: Interactive breakdown of architectural scopes, millwork execution, and spatial lighting design with direct inquiry triggers.
* **Process Page**: Step-by-step methodology covering *Concept & Spatial Blueprint*, *Material Selection*, *Site Execution*, and *Final Staging*, complete with blueprint render containers.
* **Projects Portfolio**: Filterable project gallery by category (*Living Room*, *Kitchen*, *Bedroom*, *Office*, *Bathroom*) with local image mapping.

### 2. Curated Design Shop & Shopping Cart
* **Catalog Grid & Category Filters**: Filter products by *Furniture*, *Lighting*, and *Decor*.
* **Interactive Product Modals**: Click any card to trigger a full specification modal view.
* **Localized Shopping Cart**: Quantity increment/decrement controls, item deletion, live subtotal calculations in **KSH**, and cart persistence.

### 3. Checkout & Payment Gateway
* Multi-input delivery address form (Kilimani, Nairobi localized defaults).
* Payment selection between **M-Pesa Express** and **Credit/Debit Card**.
* Summary breakdown with itemized prices in **KSH**.

### 4. Admin Dashboard & Role-Based Access (`/admin`)
* **Email Verification Guard**: Restricted to verified administrator accounts (e.g., `derricksum@gmail.com`). Unauthenticated or unauthorized users are safely redirected to `/dashboard`.
* **Revenue & Delivery Metrics**: Real-time aggregation of Total Revenue (**KSH**), Total Orders, and Active Shipments.
* **Live Fulfillment Toggles**: Single-click status controls to mark orders as **Processing**, **In Transit**, or **Delivered**.
* **Order Status Filters**: Quick filtering of customer orders by shipment progression.

---

## 📁 Project Folder Structure

```
text

ZinniaInteriors/
├── public/
│   ├── favicon.svg
|   ├── icons.svg
│   └── Images/                  # Local project & product image assets
│       ├── Living-room.jpg
│       ├── Kitchen.jpg
│       ├── Bedroom.jpg
│       ├── Bathroom.jpg
│       ├── commercial.jpg
│       ├── Design.jpg
│       ├── Floor-lamp.jpg
        ├── Velvet-sofa.jpg          
        ├── Vase-set.jpg
        ├── Wool-rug.jpg
        ├── Coffee-table.jpg

├── src/
│   ├── assets/                  # Shared visual assets
│   ├── Auth/
    ├── Login.jsx                # Access authentication
│   ├── ProtectedRoute.jsx       # Role-based email verification route guard
│   ├── components/
│   │   ├── Navbar.jsx           # Global navigation header
│   │    
│   │   └── ui/                  # Reusable UI primitives (Card, Button, alert.)
│   ├── Context/
│   │   ├── AuthContext.jsx      # User login, Firebase auth, & toast state
│   │   └── ShopContext.jsx      # Cart items, orders array, & status update functions
│   ├── Data/
│   │   └── data.js              # PROJECTS_DATA & PRODUCTS_DATA arrays
│   ├── firebase
        └── config.js            # External backend 
    ├── Pages/
│   │   ├── LandingPage.jsx      # Homepage
│   │   ├── About.jsx            # Company narrative & statistics
│   │   ├── Studio.jsx           # Kilimani atelier material library & visit booking
│   │   ├── Services.jsx         # Architectural scope offerings
│   │   ├── Process.jsx          # Workflow methodology & floor plan portfolio renders
│   │   ├── Projects.jsx         # Category-filtered architectural shoping
│   │   ├── Products.jsx         # Shop catalog with quick-view detail modal
│   │   ├── Cart.jsx             # Cart review in KSH
│   │   ├── Checkout.jsx         # Address input & M-Pesa Express selection
│   │   ├── DeliveryPage.jsx     # Customer live order status tracking
│   │   └── AdminDashboard.jsx   # Administrator control center & fulfillment controls
│   ├── App.jsx                  # React Router DOM layout & routes
│   ├── main.jsx                 # Vite application entry point
│   └── index.css                # Tailwind CSS imports & global styles
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json

# Setup & Security Guide 

## 🚀 Installation & Local Development Setup

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm** 

---

### 1. Clone the Repository

```
Bash
git clone 

```

### 2. Install Dependencies

``` 
Bash

npm install

```

### 3. Image Asset Setup
Ensure all project and product photographs are placed inside the public/Images/ directory:

```
public/Images/Living-room.jpg
public/Images/Kitchen.jpg
public/Images/Bedroom.jpg
public/Images/Bathroom.jpg
public/Images/commercial.jpg
public/Images/Design.jpg
public/Images/Velvet-sofa.jpg
public/Images/Wool-rug.jpg
public/Images/Vase-set.jpg
public/Images/Coffee-table.jpg
public/Images/Floor-lamp.jpg

```

### 4. Configure Firebase

This document provides a step-by-step setup guide for integrating Firebase Authentication and Cloud Firestore into the Zinnia Interiors web application.

###  📋 Table of Contents

### 1. Create a Firebase Project

### 2. Register Web Application

### 3. Enable Authentication Providers

### 4. Set Up Cloud Firestore Database

### 5. Configure Local Environment Variables

### Firebase Initialization Code (src/firebase/config.js)

### firebase installation;

```
Bash

npm install firebase

```



### 5. Run Local Development Server

``` 
Bash

npm run dev

```


# 🔒 Admin Access & Security Configuration

## Access to the Admin Control Center (http://localhost:5173/admin) is protected by src/Auth/ProtectedRoute.jsx.

## To add or modify authorized administrator emails, update the ADMIN_EMAILS array inside src/Auth/ProtectedRoute.jsx:

```
const ADMIN_EMAILS = [
  'derricksum@gmail.com', // Primary Administrator
  'admin@zinniainteriors.com'
];

```

## Unauthenticated users attempting to access /admin are redirected to /login.

Authenticated non-admin accounts attempting to access /admin are redirected to /dashboard.

# 📄 License

This project is open-source software licensed under the MIT License.


