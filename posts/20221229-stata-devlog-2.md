---
title: 'Stata Devlog 1: A working map and firestore database'
date: '2022-12-29'
---

You must be saying, wow, another devlog on the same day... I know it's strange, but there's a lot to talk about. I decided to take a sharp detour away from trying to implement Google authentication, and focus on building the rest of the app first. The main page of the app that will be its defining feature is the search page, which is basically a large map that populates with all of the posts made at different locations. I was able to implement the map using the flutter_map tool and the MapBox api, which allows you to design and publish custom maps for any use case. The map looks really cool when implemented. Overlayed on top of the map is a search bar to search for specific posts or users. The UI has been completed, but the search bar has no behavior yet. 

After implementing the map, I went ahead and set up a new Firebase project, to store the database of posts, and hopefully enable me to implement Google authentication in the future. The firestore database can now store posts with a username and post text. The posts can be created from a modal on the home page that can be opened using a floatiing action button. The next step is to fetch post data from the Firestore database, and display this on the home page.
