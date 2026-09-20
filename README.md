# Target Shopping Assistant V2.1

V2.1 fixes and improves the V2 testing build.

## What's new in V2.1

- Working Shopping Mode with large touch targets and progress tracking
- Tap an item's name to open the Edit Item dialog
- Removed the separate item "•••" edit button
- Tap a list name in the Lists tab to open that list
- Removed the separate "Open" button for lists
- Shopping Mode supports checking/unchecking items and tapping item names to edit
- Updated service-worker cache version so the V2.1 files can replace stale V2 cached files

## Existing V2 features

- Multiple shopping lists
- Favorites / recurring-style items
- Target product search
- Item quantities
- Item prices
- Budget tracking
- Aisle/location
- Notes
- List duplication
- List sharing
- Filters
- Local storage
- iPhone PWA installation
- Offline app shell

## Testing

Keep this build on the V2 branch until testing is complete. After V2.1 passes testing, merge the branch into main and create a GitHub release/tag named v2.1.0.

Target buttons use Target's public search URL and do not store Target credentials.
