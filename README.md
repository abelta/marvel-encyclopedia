# MARVEL ENCYCLOPEDIA

This project is a submission for the Zara Coding Challenge.
It uses Marvel's API to showcase an organized array of characters and the comics they feature in.
It also provides the chance to search by name, keep favorites and filter by said favorites.

## Tech stack
* React 18
* Next JS 14 (using app router)
* Tailwind
* Zustand
* **NODE 21 recommended**
## SSR strategy
Home page turned out to be too dynamimc to consider for SSR (at least on this first iteration.)

Detail page uses SSR to pregenerate pages for the first 50 results (could potentially be adjusted to more.)
## To run
Install dependencies first:
````
npm
````
Dev mode:
````
npm dev
````
Pro mode:
````
npm run build
npm run start
````
## Tests
Better to run on pregenerated content to mimic a pro environment.

````
npm run build
npm run start
`````
Then in a different terminal
````
npm run cypress:open
````
(A Cypress instance will appear.)
