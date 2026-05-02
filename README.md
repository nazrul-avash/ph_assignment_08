# ☀️ SunCart – Summer Essentials Store

A modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, and beach accessories.

## 🔗 Live URL

[https://your-live-url.vercel.app](https://your-live-url.vercel.app)

---

## ✨ Key Features

- 🛍️ Browse summer products with details (name, price, rating, stock)
- 🔒 Protected product detail pages — login required to view
- 🔐 Authentication via **BetterAuth** (Email/Password + Google OAuth)
- 👤 User profile page with name, email, and photo
- ✏️ Update profile information (name & avatar)
- 📱 Fully responsive — mobile, tablet, and desktop
- 🎨 Smooth animations using **Animate.css / React-Spring / Lottie**
- 🌅 Hero section with summer sale banners
- 🔥 Popular products section and summer care tips

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js](https://nextjs.org/) | React framework with App Router |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | Tailwind component library |
| [BetterAuth](https://better-auth.com/) | Authentication |

---

## 📦 NPM Packages Used

| Package | Purpose |
|---------|---------|
| `better-auth` | Authentication (email + Google OAuth) |
| `react-spring` | UI Slider animations |
| `react-hot-toast` | Toast notifications |

---
---

## 🔐 Environment Variables

Create a `.env.local` file in the root:

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> ⚠️ Never commit `.env.local` to GitHub.

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/suncart.git
cd suncart

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

