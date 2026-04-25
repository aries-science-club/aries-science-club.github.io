---
# ==============================================================================
# ARCHIVE EVENT FRONT-MATTER (The Data Section)
# ==============================================================================

# 1. TITLE: The name of your past event or highlight.
title: "Draft Archive Template (DO NOT PUBLISH)"

# 2. DATE: Must be in YYYY-MM-DD format. 
# This determines the sorting order on the Archive page and Homepage Past Highlights.
date: 2026-12-31

# 3. COVER IMAGE: The main thumbnail for the event card.
# Put your image in static/images/ and reference it like below.
cover_image: "/images/placeholder.jpg"

# 4. SUMMARY: A short 1-2 sentence description.
# This appears on the homepage "Past Highlights" cards and the Archive list.
summary: "This is a detailed template explaining how to create rich archive pages with text, images, and videos."

# 5. AUTHOR: Name of the person who wrote the post or "ARIES Science Club".
author: "ARIES Science Club"

# 6. VIDEO (Optional): Automatically embeds a YouTube/Vimeo video at the bottom of the page.
# Provide the full embed URL (e.g., https://www.youtube.com/embed/VIDEO_ID)
video_url: "https://www.youtube.com/embed/lILgstYoNV4"

# 7. IMAGE GALLERY (Optional): Automatically creates a swipeable photo carousel!
# List all your image paths here.
images:
  - "/images/placeholder.jpg"
  - "/images/placeholder.jpg"

# 8. HIDE FROM PAST HIGHLIGHTS (Optional):
# If set to 'true', this event will NOT show up in the "Past Highlights" section 
# on the homepage. However, it WILL still show up on the main Archive page.
hide_from_past_highlights: true

# 9. TAGS (Optional): Used for the interactive filter buttons on the Archive page.
# Try to keep these consistent (e.g., "astrophysics", "meeting", "guest-lecture").
tags: ["template", "guide"]
---

# ==============================================================================
# ARCHIVE CONTENT (The Page Itself)
# ==============================================================================
# Anything below the '---' marks is the main content of the archive page.
# Users will see this when they click on the event card.

This was an incredible event! Here is a summary of what happened. You can use standard Markdown to format your text, such as **bold text**, *italics*, and lists:

* Point 1
* Point 2
* Point 3

---

## Adding Images

To embed an image inside your article, use standard Markdown image syntax. Make sure you upload your photos to the `static/images/` folder first.

![Description of the image for accessibility](/images/placeholder.jpg)

*Pro-tip: If you want to center an image or make it look like a nice gallery grid, you can also use plain HTML right inside this markdown file!*

```html
<div style="text-align: center; margin: 40px 0;">
    <img src="/images/placeholder.jpg" style="border-radius: 12px; max-width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
    <p style="color: #94a3b8; font-size: 0.9rem; margin-top: 10px;">Caption for your image</p>
</div>
```

---

## Adding Videos

To embed a YouTube or Vimeo video, you don't need complicated HTML. Hugo has built-in "shortcodes" for this.

**For YouTube:**
Just use the shortcode with the video ID (the part of the URL after `v=`).
```go
{{< youtube w7Ft2ymGmfc >}}
```

**For Vimeo:**
```go
{{< vimeo 146022717 >}}
```

**For a direct MP4 video file hosted on your site:**
Put the `.mp4` file in your `static/videos/` folder (create it if it doesn't exist).
```html
<video width="100%" controls style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
  <source src="/videos/my-cool-event.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

---

## Final Tips

Whenever an upcoming event finishes, you don't need to create a brand new file! Just take the `.md` file from `content/events/`, move it into `content/archive/`, and expand the content section to include all the photos and videos from the day!
