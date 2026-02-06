# Valentine Message Creator

A beautiful Valentine-themed multi-page web application built with pure HTML, CSS, and JavaScript.

## Features

- 🎨 **Modern Romantic Theme**: Rose gold, burgundy, and cream color palette
- 💝 **Animated Background**: Floating hearts, gifts, and teddy bear icons with smooth animations
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- ✨ **Glass-morphism Effects**: Modern frosted glass design for cards
- 🎭 **Smooth Transitions**: Elegant animations and interactions throughout

## Pages Overview

### Landing Page (index.html)
- Welcome screen with call-to-action button
- Animated heart icon with heartbeat effect
- Beautiful gradient background

### Page 1: Share Your Heart (page1.html)
- Three input fields for personalized messages
- Character limit of 200 per message
- Next and Skip buttons
- Step indicator (Step 1 of 4)

### Page 2: Add a Special Touch (page2.html)
- Three media type options:
  - 🖼️ Add Image - Share a beautiful photo
  - 🎥 Add Video - Upload a memorable video clip
  - 🎵 Add Audio - Include a voice message or song
- Selection highlighting
- Next and Skip buttons
- Step indicator (Step 2 of 4)

### Page 3: Upload Your Media (page3.html)
- Dynamic file upload based on selected media type
- Live preview of uploaded media:
  - Image preview with proper sizing
  - Video player with controls
  - Audio player with controls
- File name display
- Submit and Back buttons
- Dummy API call to JSONPlaceholder
- Step indicator (Step 3 of 4)

### Page 4: Final Preview (page4.html)
- Display all three messages in beautiful cards
- Animated message cards with slide-in effect
- Media displays after 2-second delay
- Action buttons:
  - Create New - Start over
  - Print - Print the valentine
  - Edit - Go back to upload page
- Heartbeat animation

## Technical Details

### Data Flow
- **LocalStorage**: Used to persist data between pages
  - `valentineMessages`: Stores the three messages
  - `mediaType`: Stores selected media type (image/video/audio)
  - `mediaFile`: Stores file data as base64 string

### Styling
- **Fonts**: Playfair Display (headings) & Inter (body text)
- **Colors**:
  - Primary: #800020 (Burgundy)
  - Secondary: #A0153E (Deep Rose)
  - Accent: #B76E79 (Rose Gold)
  - Background: #E8B4B8 (Light Pink)
  - Base: #FFF8E7, #FAF0E6 (Cream shades)

### Animations
- `float`: Floating animation for background icons (15s loop)
- `fadeIn`: Fade-in effect for sections
- `slideIn`: Slide-in animation for message cards
- `heartbeat`: Pulsing animation for heart icon

### API Integration
- Dummy POST request to `https://jsonplaceholder.typicode.com/posts`
- Sends form data with messages and media metadata
- No actual file storage required

## File Structure

```
/app/frontend/public/
├── index.html      # Landing page
├── page1.html      # Message input page
├── page2.html      # Media type selection page
├── page3.html      # File upload page
└── page4.html      # Final preview page
```

## How to Access

1. Open your browser
2. Navigate to: `http://localhost:3000`
3. Click "Start Creating" to begin

Or directly access:
- Landing: `http://localhost:3000/index.html`
- Page 1: `http://localhost:3000/page1.html`
- Page 2: `http://localhost:3000/page2.html`
- Page 3: `http://localhost:3000/page3.html`
- Page 4: `http://localhost:3000/page4.html`

## Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers

## Notes

- No backend required - purely static HTML/CSS/JS
- All data stored in browser's localStorage
- File previews use FileReader API and createObjectURL
- Print functionality uses browser's native print dialog
- Skip buttons allow progressing without filling forms

## Future Enhancements

- Add download functionality for final valentine
- Social media sharing options
- More animation options
- Additional media effects and filters
- Theme customization options
