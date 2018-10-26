# MyReads Project
---
This is the completed version of MyReads app with a little extra styling besides the
basic functionality required by the project rubric.

# Core App Functionality
---
* Main screen showing book shelves under the categories of "Currently Reading", "Want to Read", and "Read"
* A Search Page to find new books which can be accessed by clicking the plus sign on the bottom right of the main screen
* A Drop Down Menu control on each individual book on both the main screen and the search screen to allow for shelving a book on a particular book shelf

## TL;DR
---
To get started developing right away:
* You'll need to have [NodeJS](https://nodejs.org/en/) installed
* Download the project [Zip](https://github.com/Patel-Jenu-1991/myreads/archive/master.zip) or clone the [Repository](https://github.com/Patel-Jenu-1991/myreads.git)
* CD into the project directory and install all project dependencies with `npm install`
* start the development server with `npm start`

## App Structure
---
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── Book.js # The book component for display on the main and search screens.
    ├── BookCase.js # A component to display multiple BookShelf components.
    ├── BookShelf.js # A component to display a set of books.
    ├── ShelfChanger.js # A component for shelving a book on a particular shelf.
    ├── Search.js # A component to display the search bar and results.
    └── SortBooks.js # A module containing functions for sorting and combining book data.
```
---
## Create React App
---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

---
## Credits
---

* Instructors at Udacity
* Reviewers at Udacity
* Classmates from the GwG FEND Nanodegree Program

---
## References
---

MDN | REACT DOCS | CLASSROOM LECTURES | STACK OVERFLOW | COLORZILLA
---
