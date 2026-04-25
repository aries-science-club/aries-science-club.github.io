---
# ==============================================================================
# EVENT FRONT-MATTER (The Data Section)
# ==============================================================================

# 1. TITLE: The name of your event.
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
summary: "This is a detailed template explaining how to manage your events."

# 5. HIDE FROM UPCOMING (Optional):
# If set to 'true', this event will NOT show up in the "Upcoming Events" cards.
# However, it WILL still show up as a glowing dot on the calendar.
# Set to 'false' or delete this line to show it in the Upcoming Events cards.
hide_from_upcoming: true

# 6. TAGS (Optional): Used in the archive/gallery filtering.
tags: ["template", "guide"]
---

# ==============================================================================
# EVENT CONTENT (The Page Itself)
# ==============================================================================
# Anything below the '---' marks is the main content of the event page.
# Users will see this when they click "Read More" on an event card.

# Event Name
*31 December, 2026*

---

### About the Event
Write the full description of your event here. You can use **bold text**, lists, links, or embed images.

### Schedule
* **10:00 AM:** Introduction
* **11:00 AM:** Keynote Speaker

---

<!-- 
==============================================================================
HOW EVENT LIFECYCLES WORK
==============================================================================

Q: What happens when an Upcoming Event date passes? Does it get hidden automatically?

A: By default, NO, it does not disappear automatically. Hugo sorts the files in the `content/events/` folder by date. The "Upcoming Events" section on your homepage simply grabs the 2 most recent files in that folder.

If an event date passes and you don't add any new events, the old event will stay in the "Upcoming Events" box. 

HOW TO MANAGE PAST EVENTS:
To keep your site clean and organized, you have two options when an event finishes:

Option 1 (The "Archive" Method - Recommended!):
1. Simply move this `.md` file from `content/events/` into the `content/archive/` folder.
2. Because it is no longer in the "events" folder, it immediately vanishes from the "Upcoming Events" cards.
3. However, because our new calendar reads from BOTH folders, the glowing dot remains perfectly intact on the calendar!
4. It will now also show up beautifully on your dedicated Archive page.

Option 2 (The "Hide" Method):
1. Leave the file in `content/events/`.
2. Change `hide_from_upcoming: false` to `hide_from_upcoming: true` in the front-matter at the top of this file.
3. It vanishes from the homepage cards, but stays on the calendar.

Option 1 is the best practice for maintaining a clean workspace!
-->
