---
# ==============================================================================
# UPCOMING EVENT FRONT-MATTER (The Data Section)
# ==============================================================================

# 1. TITLE: The name of your upcoming event.
title: "Draft Event Template (DO NOT PUBLISH)"

# 2. DATE: Must be in YYYY-MM-DD format. 
# This date is used for sorting and determines exactly where the glowing dot 
# appears on the Interactive Calendar.
date: 2026-12-31

# 3. COVER IMAGE: An absolute URL or a path to an image in the static/images/ folder.
# Used as the thumbnail in the Upcoming Events cards.
cover_image: "/images/placeholder.jpg"

# 4. SUMMARY: A short 1-2 sentence description.
# This appears on the homepage cards and in the calendar pop-out modal.
summary: "This is a detailed template explaining how to manage your events and add rich media."

# 5. HIDE FROM UPCOMING (Optional):
# If set to 'true', this event will NOT show up in the "Upcoming Events" cards.
# However, it WILL still show up as a glowing dot on the calendar.
# Set to 'false' or delete this line to show it in the Upcoming Events cards.
hide_from_upcoming: true

# 6. TAGS (Optional): Used in the archive/gallery filtering when this event is moved to the archive.
tags: ["template", "guide"]
---

# ==============================================================================
# EVENT CONTENT (The Page Itself)
# ==============================================================================
# Anything below the '---' marks is the main content of the event page.
# Users will see this when they click "Read More" on an event card.

This is the main description of your upcoming event. You can use standard Markdown to format your text, such as **bold text**, *italics*, and lists:

### Schedule
* **10:00 AM:** Introduction
* **11:00 AM:** Keynote Speaker

---

## Adding Images

To embed an image inside your article, use standard Markdown image syntax. Make sure you upload your photos to the `static/images/` folder first.

![Description of the image for accessibility](/images/placeholder.jpg)

*Pro-tip: If you want to center an image or make it look like a nice poster, you can use plain HTML right inside this markdown file!*

```html
<div style="text-align: center; margin: 40px 0;">
    <img src="/images/placeholder.jpg" style="border-radius: 12px; max-width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
    <p style="color: #94a3b8; font-size: 0.9rem; margin-top: 10px;">Caption for your image</p>
</div>
```

---

## Adding Videos (Promos or Teasers)

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

<!-- 
==============================================================================
HOW EVENT LIFECYCLES WORK
==============================================================================

Q: What happens when an Upcoming Event date passes? Does it get hidden automatically?

A: By default, NO, it does not disappear automatically. The "Upcoming Events" section on your homepage simply grabs the most recent files in that folder.

HOW TO MANAGE PAST EVENTS:
To keep your site clean and organized, you have two options when an event finishes:

Option 1 (The "Archive" Method - Recommended!):
1. Simply move this `.md` file from `content/events/` into the `content/archive/` folder.
2. Because it is no longer in the "events" folder, it immediately vanishes from the "Upcoming Events" cards.
3. However, because our new calendar reads from BOTH folders, the glowing dot remains perfectly intact on the calendar!
4. It will now also show up beautifully on your dedicated Archive page, and you can edit it to add event photos!

Option 2 (The "Hide" Method):
1. Leave the file in `content/events/`.
2. Change `hide_from_upcoming: false` to `hide_from_upcoming: true` in the front-matter at the top of this file.
3. It vanishes from the homepage cards, but stays on the calendar.

Option 1 is the best practice for maintaining a clean workspace!
-->
