# 💕 Romantic Anniversary Website

A beautiful, heartfelt single-page website created to celebrate our first proposal anniversary. This website features automatic photo slideshows, background music, and a handwritten love letter expressing our long-distance journey.

## 🌟 Features

- **Live Typing Animation**: Letter appears character by character with a blinking cursor, like it's being written in real-time
- **Music Playlist**: Three romantic songs playing sequentially in a continuous loop
- **Photo Slideshows**: Automatic looping slideshows in header and footer using all our precious memories
- **Falling Red Rose Petals**: Beautiful red rose animations cascading down the screen
- **Floating Hearts**: Gentle heart animations creating a romantic atmosphere
- **Handwritten Style**: Beautiful handwriting-style fonts with paper texture
- **Fully Responsive**: Looks beautiful on both mobile and desktop devices
- **GitHub Pages Ready**: Simple static website, easy to deploy

## 📁 Folder Structure

```
Kittu/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Slideshow and interactive features
├── README.md           # This file
├── Kittu/              # Folder containing 52 images
│   └── (52 .jpg files)
└── Music/              # Folder containing background music
    └── Genius Movie Song Download Mp3 Ringtone Pagalworld.mp3
```

## 🚀 How to Host on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., `anniversary-love-letter`)
5. Make sure it's set to **Public**
6. Click **"Create repository"**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. In your new repository, click **"uploading an existing file"**
2. Drag and drop ALL files and folders from the `Kittu` directory:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - The entire `Kittu/` folder (with all 52 images)
   - The entire `Music/` folder (with the music file)
3. Scroll down and click **"Commit changes"**

**Option B: Using Git Command Line**

```bash
# Navigate to your Kittu folder
cd /Users/sujith/Desktop/Kittu

# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit - Anniversary love letter"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/anniversary-love-letter.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, click **"Settings"** (top menu)
2. Scroll down and click **"Pages"** in the left sidebar
3. Under **"Source"**, select **"main"** branch
4. Click **"Save"**
5. Wait 1-2 minutes for deployment

### Step 4: Access Your Website

Your website will be live at:
```
https://YOUR-USERNAME.github.io/anniversary-love-letter/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## 💻 Local Testing

To test the website locally before uploading:

1. Open the `Kittu` folder in Finder
2. Right-click on `index.html`
3. Select **"Open With"** → **"Safari"** (or your preferred browser)

**Note**: Some browsers may block autoplay music and local file access. For full functionality, test using a local server or deploy to GitHub Pages.

### Using Python Local Server (Recommended)

```bash
# Navigate to the Kittu folder
cd /Users/sujith/Desktop/Kittu

# Start a simple HTTP server
python3 -m http.server 8000

# Open browser to: http://localhost:8000
```

## 🎨 Customization Guide

### Changing Colors

Edit `styles.css` and modify the CSS variables at the top:

```css
:root {
    --primary-pink: #ffd6e8;      /* Main pink color */
    --soft-cream: #fff8f0;        /* Background cream */
    --warm-rose: #ffb3d9;         /* Accent rose */
    --light-purple: #e8d5ff;      /* Purple tint */
}
```

### Changing Slideshow Speed

Edit `script.js` and modify the interval values:

```javascript
// Header slideshow timing (currently 4 seconds)
setInterval(() => {
    headerIndex = changeSlide('headerSlideshow', headerIndex);
}, 4000);  // Change this value (in milliseconds)

// Footer slideshow timing (currently 5 seconds)
setInterval(() => {
    footerIndex = changeSlide('footerSlideshow', footerIndex);
}, 5000);  // Change this value (in milliseconds)
```

### Changing the Letter Content

Edit `index.html` and modify the text within the `<div class="letter-content">` section.

### Adding More Images

1. Add new images to the `Kittu/` folder
2. Edit `script.js` and add the new image filenames to the `images` array

### Changing the Music

Replace the music file in the `Music/` folder and update the filename in `index.html`:

```html
<audio id="bgMusic" loop>
    <source src="Music/YOUR-NEW-SONG.mp3" type="audio/mpeg">
</audio>
```

## 🎁 Special Features

- **Live Typing Effect**: Text appears character by character with a blinking cursor, creating an intimate feeling
- **Music Playlist**: Three songs play sequentially and loop continuously
- **Dual Slideshows**: Header and footer show different photos at different speeds
- **Falling Rose Petals**: Red rose petals cascade down the screen with realistic motion
- **Floating Hearts**: Romantic hearts float up the screen continuously
- **Sparkles**: Subtle sparkle effects on the letter paper
- **Music Controls**: Visible play/pause button in the top-right corner
- **Mobile Optimized**: Fully responsive design for all screen sizes

## 💝 Made with Love

This website was created with love to celebrate our first proposal anniversary - December 19.

From Kerala to Uttar Pradesh, from Taiwan to Bangalore, from distance to forever.

**Always yours, Forever & Beyond ❤️**

---

## 📝 Technical Details

- **No Backend Required**: Pure HTML, CSS, and JavaScript
- **No Dependencies**: No external libraries needed
- **Browser Compatibility**: Works on all modern browsers
- **Performance**: Optimized images and smooth animations
- **Accessibility**: Semantic HTML and ARIA labels

## 🐛 Troubleshooting

**Music not playing automatically?**
- Most browsers block autoplay. Click the play button in the top-right corner.

**Images not loading?**
- Make sure the `Kittu/` folder is in the same directory as `index.html`
- Check that image filenames match exactly (case-sensitive)

**Slideshow not working?**
- Open browser console (F12) to check for errors
- Ensure `script.js` is in the same directory as `index.html`

**Website looks different on mobile?**
- This is normal - the design is responsive and adapts to screen size
- Test on actual device for best results

---

Enjoy your romantic anniversary website! 💕✨
