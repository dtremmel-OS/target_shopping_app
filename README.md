# Target Shopping Assistant PWA — V2.4

V2.4 refines the Favorites system around a standalone Favorites registry.

## V2.4 Favorites behavior
- Favorites are created and deleted only from the Favorites tab.
- The Shop tab `Add Favorite` button adds an existing favorite to the current list; it does not create a new favorite.
- Edit Item no longer allows changing favorite status. The star is a static status indicator.
- Shopping Mode also shows a static favorite star; it is not a button.
- A favorite remains in the Favorites tab even when it is not used by any list.
- Favorites with no linked list show `Lists: None`.
- Deleting a list item does not delete its favorite.
- Deleting a favorite from the Favorites edit screen removes the favorite designation from linked items but does not delete those items.
- If the favorite is still linked to one or more lists, deletion asks for confirmation first.
- Favorite quantity is no longer stored as a default favorite property. New favorite items are added with quantity 1; each list item keeps its own quantity.
- Editing a favorite updates its linked list items for name, category, price, aisle/location, and note, but does not change item quantities.
- Existing V2.x item-level favorites are migrated into the new Favorites registry automatically.

## iPhone dialog behavior
V2.4 explicitly blurs the active element before opening edit dialogs and focuses the dialog itself to reduce automatic keyboard opening on iPhone PWA.

## Future ideas — intentionally not in V2.4
- Add a reset button to Shop Tab and Shopping Mode to reset all Done items to Open.
- Add the Shop Tab progress bar to Shopping Mode.

## Data
The app uses localStorage under the existing `target-list-v2` key so existing local data can migrate into V2.4.
