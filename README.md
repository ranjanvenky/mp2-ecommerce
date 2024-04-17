<!-- 
If you right click the readme in the file list and
click open preview, you can see how this will look. 

you will need this extension from microsoft.
for a proper preview
https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server
-->



# mp2-ecommerce

[Visit Deployment](https://shepherd.d1d9yratg7bxyv.amplifyapp.com/)

Collaborators: \
[Mohammad Zuiter](https://github.com/moefingers) \
[Diego Puente](https://github.com/dpuentex) \
[Harrison Pursley](https://github.com/HarrisonPursley)\
[Jeffery Grigsby](https://github.com/JefferyG00) \
A beautiful ecommerce website with basic functionality.

<!-- design -->
## Prototypes
![Prototype Home](./_design/Home.png)

## Dev Notes
- config folder containing sequelize config has not been inccluded in git ignore purposely for now.
## Ultra priority:
- Cart model
- Hosting
- cart controller
- better search api
- read binary image from db
- best seller page when loading with store selected does not show store names and doesnt set data properly see console app.jsx:38
- selecting a store and going home too quickly causes error 
- chunk-MCEUSTYS.js?v=5f44b943:9143 Uncaught TypeError: storeData[1].map is not a function
    at NavigationBar (NavigationBar.jsx:39:31)

### [Models](https://docs.google.com/spreadsheets/d/1QfpH7j5gNQoXloyshFjNvAq97LzJzVPM_XfwJFtSe18/edit#gid=0) for SQL database
- spreadsheet
- migrations
- models

### All Pages
- nav bar 

### home page

- search component (with submit) 
- hot items component 

### store page
- avg rate for each item 
- image for item 

### cart page
- display items in cart

### item page
- ratings 
- avg ratings 
- image collection 



## Low priority:
- add style column to store and render different style from database depending on store 
- glow in the back following mouse
- implement bcrypt
#### nav bar
- make animation for navbar
- improve favicon.ico
- optional navbar items 

# Changelog / Completed

- begun work on best seller functionality
- variable rename in fetchProducts function in product page for clarity 
- updated exposed password for db and gitignore
- deployed frontend
- deployed backend
- deployed sql db
- added on click events for buttons in about-us for categories
- added proper destructuring for cartcontext in cart.jsx
- repaired get /products/productbyarray/:array in product controller.. arraywithnorepeats was having a problem.
- repaired problem where selecting all categories would not show any filters
- added about us for main page seperate from about us for each page
- renamed browse to all categories and implemented option to display all categories
- navigate to select store if none is selected
- temporary rename of checkbox component
- added dynamic generation of filter boxes on product page
- refactored fetch store into function in a usecontext
- added redirect if manual navigation to about-us page without selecting store first
- fixed error to retreive cart items
- changed categories in seed
- category context
- added functionality and formatting to category
- added item totals in cart
- formatting on add remove buttons on product cards
- added add remove buttons on product cards to add and remove items from cart
- added in stock / out of stock on product cards
- added the most incredible seeder
- added dynamic category list dropdown from browse depending on store
- nav bar changes depending on status of application
- added count of items in cart
- improved home button functionality
- added best seller array
- added conditional homepage where if a store is selected you will see some more detailed info about it otherwise you'll see options for the stores
- added images column to stores in model and migration and some null placeholders in seeders
- added more data to storeData array to keep track of active store
- dynamic rendering of store selection on homepage
- updated title
- made favicon and placed in public
- Added primary categories to store data
- moved CartContext to ContextList and added StoreContext
- started changelog 4/14/2024