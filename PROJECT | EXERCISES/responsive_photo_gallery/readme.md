Project Exercise 6: Responsive Photo
Gallery with CSS Grid
Description:

Build a responsive product showcase webpage using HTML and CSS Grid. The layout
should adapt to different screen sizes, displaying products in a grid that adjusts the
number of columns on phones, tablets, and desktops. Use CSS Grid, media queries,
and relative units to ensure a seamless user experience across all devices, following a
mobile-first approach.


Hint :

Mobile First: Style for phones first, then use media queries for larger screens.

Grid-template-columns is Key: Use repeat(auto-fit, minmax(.. , 1fr)) for responsive
columns.

Media Queries for Breakpoints: Use min-width media queries for tablets (768px+) and
desktops (1024px+). Adjust grid-template-columns inside them.

Relative Units: Use %, rem, em, vh, vw for sizing, not just px.

Test Responsively: Use browser dev tools (device toolbar) to test on different screen
sizes.