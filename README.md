# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Simple React JS Project
-------------------------
Project Title: 📛
Meal-App
-------------------------------------

What is the use of this Repo
--------------------------------
Creating a Component in React
Making HTTP calls
Communicating between parent and child component
Using Bootstrap along with React
Using Basic Routing in React
The project Template can be used to build bigger projects


Live Link / Demo Link: 🔗
----------------------------

Prerequisites
-------------------

Install Node JS
----------------
Refer to https://nodejs.org/en/ to install nodejs

and all other files 


Table of Content: 📑
-----------------------
User Details(user)

About the Project: 📚
---------------------
A responsive web application that allows users to browse meals by category, view meal details, and save favorites—all powered by the [MealDB API](https://www.themealdb.com/api.php). Built with **React or Next.js** and styled using **TailwindCSS or Bootstrap**.

Technologies Used:
--------------------

Front-end: React JS
Back-end: Express JS
Database: MongoDB
style :css ,bootstrap

Key Features: 
---------------
User Types:

Client:
------
Register & Login
can view category list and manage it

User Functionalities:

1.Login:
User having Unique username and password

### 📂 Sidebar with Category List
- Fetch and display meal categories from  
  `https://www.themealdb.com/api/json/v1/1/categories.php`
- Click a category to filter meals using  
  `https://www.themealdb.com/api/json/v1/1/filter.php?c={CategoryName}`

### 🍽️ Meals Display
- Display meals in a responsive grid layout
- Each meal card includes:
  - Meal image
  - Meal name
  - "View Details" button

### 🔍 Meal Detail View
- Fetch full details via  
  `https://www.themealdb.com/api/json/v1/1/lookup.php?i={MealID}`
- Show:
  - Ingredients
  - Instructions
  - Meal image

### ❤️ Favorite Meals
- Add/remove meals from favorites via a heart icon/button
- Store favorites in **Session Storage**
- Indicator shows if a meal is already a favorite
- Favorites accessible via sidebar section

## 💡 Bonus Features (Optional)
- 🔎 Live Search: Filter meals by name in real-time
- 🎲 Random Meal: Button fetches a random meal using  
  `https://www.themealdb.com/api/json/v1/1/random.php`


folder structure
---------------
meal-app/
├── public/                 # Static assets like images or icons
├── src/
│   ├── components/         # Reusable UI components (e.g., MealCard, CategoryList)
│   ├── pages/              # Page components (e.g., Home, WishList)
│   ├── redux/            # Redux for global state (e.g., WishListSlice,store)
│   ├── services/           # API utility functions (e.g., allApi.js)
│   ├──         
│   └──           
├── .gitignore
├── README.md
├── package.json
└── 

Component/File	Description
Sidebar.jsx	Sidebar component to list and select meal categories
MealCard.jsx	Displays individual meal items with image, name, and "View Details"
WishList.jsx	Lists all meals added to the favorites 
Header.jsx	Optional navigation or branding component
WishlistSlice	Redux-Slice and store  for managing favorites state across components
MealAppHome.jsx  Display sidebar and grid items 
Home.jsx     Display landingpage (Details about meals)
allApi.js	API functions to interact with MealDB (e.g., register and login Api)
App.jsx / index.jsx	Main entry point for the app, includes routes and layout


Used Libraries
------------------
express cors dotenv mongoose
React bootstrap 
react fontawesome
react router-dom
react toastify for alert messages
jwtwebtoken -Authentication
Redux