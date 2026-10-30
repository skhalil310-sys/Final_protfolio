# Vyro — AI Video Ads Agency Portfolio

A premium, fast, fully responsive one-page portfolio website for **Vyro**, an AI video ad agency. Built with pure HTML5, CSS3, and vanilla modern JavaScript (zero frameworks, zero build tools).

---

## 🌐 How to Get a Shareable Live Link (Free & Instant)

### Option 1: Netlify Drop (Fastest — No Account/Git needed)
1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)** in your browser.
2. Drag and drop this `Protfolio` folder directly into the upload area.
3. In ~15 seconds, Netlify gives you an active public link (e.g. `https://vyro-agency.netlify.app`) that you can send to anyone immediately.

### Option 2: Deploy to Vercel
Vercel has a strict **100 MB per-file limit**. The raw 519 MB master video (`0719.mp4`) has been safely moved to `_raw_master_videos/` and excluded via `.vercelignore`. The site now uses web-optimized streaming videos (all under 43 MB).

To deploy on Vercel:
1. Open PowerShell / Command Prompt in this folder.
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the simple prompts (press Enter to accept defaults). Vercel will deploy and output your live link (e.g. `https://protfolio-vyro.vercel.app`).
4. Or push this folder to GitHub and import it into **[vercel.com/new](https://vercel.com/new)**.

---

## ⚙️ How to Edit Details & Add New Videos

All editable content is located at the top of [`script.js`](file:///c:/Users/a/OneDrive/Desktop/Protfolio/script.js) inside the `CONFIG` object.

### 1. Change Founder Name & Contact Details
Open `script.js` and edit the fields at the top:
```javascript
const CONFIG = {
  founderName: "Muhammad Abdul Rehman", // Updates your name across the About section and headings
  agencyName: "Vyro",
  tagline: "AI Video Ads That Make People Stop Scrolling.",

  contact: {
    whatsappNumber: "+92 3246414775", // Display number
    whatsappRaw: "923246414775",       // Raw number for wa.me links
    email: "skhalil310@gmail.com",
    defaultQuoteMessage: "Hi Vyro, I want a quote for a video ad."
  },
  // ...
};
```

### 2. How to Add a New Video Ad
1. Place your compressed video inside `assets/web/` (e.g. `my_new_ad_web.mp4`).
2. Save a thumbnail poster in `assets/thumbnails/` (e.g. `poster_new.jpg`).
3. Add an entry to the `works` array in `script.js`:
```javascript
{
  id: "my-new-ad",
  title: "My New Ad Title",
  category: "Food & Beverage Ads",
  file: "assets/web/my_new_ad_web.mp4",
  poster: "assets/thumbnails/poster_new.jpg",
  aspect: "9:16", // or "16:9"
  featured: false,
  description: "Brief summary shown in the lightbox modal."
}
```

---

## 🎨 Asset Structure
- `assets/vyro_studio_logo_transparent.png`: Transparent agency logo.
- `assets/founder.png`: Founder portrait (watermark cropped out with CSS).
- `assets/thumbnails/`: High-resolution poster images for every ad.
- `assets/web/`: Web-optimized H.264 MP4 videos (crf 24-26, max 720p, faststart enabled, all < 43 MB).
- `_raw_master_videos/`: Your uncompressed master video files kept safe locally (excluded from web deployments).
