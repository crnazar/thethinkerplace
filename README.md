# The T(h)inker Place

Personal research portfolio website for Dr. Christina Restrepo Nazar.

🌐 **Live Site**: [thethinkerplace.com](https://thethinkerplace.com)

## About

The T(h)inker Place is a research lab exploring AI as cultural borderland, equity-oriented science education, and youth-centered approaches to learning.

## Setup Instructions

### Deploying to GitHub Pages

1. Go to your repository **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Select the **main** branch and **/ (root)** folder
4. Click **Save**
5. Your site will be live at `https://yourusername.github.io/thethinkerplace/`

### Connecting Your Custom Domain (thethinkerplace.com)

1. In your repository, create a file called `CNAME` containing just: `thethinkerplace.com`
2. Go to your domain registrar (where you bought the domain)
3. Add these DNS records:
   - **A Record**: Point `@` to `185.199.108.153`
   - **A Record**: Point `@` to `185.199.109.153`
   - **A Record**: Point `@` to `185.199.110.153`
   - **A Record**: Point `@` to `185.199.111.153`
   - **CNAME Record**: Point `www` to `yourusername.github.io`
4. Wait for DNS propagation (can take up to 24 hours)
5. In GitHub Pages settings, enter your custom domain and enable HTTPS

## Adding Your Content

### Images

Add your images to the `/images` folder:
- `profile.jpg` - Your profile photo
- `hero-bg.jpg` - Hero section background
- `project-*.jpg` - Project screenshots
- `blog-*.jpg` - Blog post images

Then update the HTML to reference them:
```html
<img src="images/profile.jpg" alt="Christina Restrepo Nazar">
```

### Updating Content

Edit `index.html` to:
- Update your bio and descriptions
- Add/remove publications
- Update project links
- Add your social media URLs
- Add your email address

## File Structure

```
thethinkerplace/
├── index.html      # Main HTML file with all sections
├── styles.css      # All styling (dark theme, teal accents)
├── script.js       # Navigation and animations
├── images/         # Your images go here
├── CNAME           # Custom domain (create this)
└── README.md       # This file
```

## Design

- **Colors**: Dark charcoal (#1c1c1c), Teal (#51c1c2), Cream (#f9f9f9)
- **Fonts**: Pacifico (headings), Comfortaa (body)
- **Features**: Responsive design, smooth scrolling, fade-in animations

## License

© 2024 Christina Restrepo Nazar. All rights reserved.
