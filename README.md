# MyReads: A Book Tracking App

MyReads is a bookshelf app that allows you to manage and organize books you are currently reading, want to read, or have already read. The app offers a search feature to find new books and move them between different shelves. 

This project was built using **React** as part of the Udacity React Nanodegree program.

---

## **Installation and Setup**

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v12+ recommended)
- npm (comes with Node.js)

### Step 1: Clone the repository
You can clone the project using the following command:

```bash
git clone https://github.com/chrisbraycodes/myreads.git


Step 2: Navigate into the project folder

cd myreads

Step 3: Install dependencies

npm install

Step 4: Start the development server

npm start

This will launch the app in your browser at http://localhost:3000.

How to Use the App
Main Page:

The main page displays three shelves:
Currently Reading
Want to Read
Read
You can move books between these shelves using the dropdown menu on each book.
Search Page:

Click the "+" button in the bottom-right corner of the main page to access the search page.
Use the search input to find new books by title, author, or ISBN.
You can move books directly from the search results to any of the three shelves.
State Synchronization:

Any changes you make on the search page will be reflected on the main page and vice-versa.
Your bookshelf state will persist between page refreshes.
Project Structure
php
Copy code
myreads/
├── public/
├── src/
│   ├── components/         # Reusable components like Bookshelf
│   ├── App.js              # Main App component
│   ├── MainPage.js         # Main page showing bookshelves
│   ├── SearchPage.js       # Search page for finding books
│   ├── BooksAPI.js         # API utility to fetch books
│   ├── index.css           # Global CSS styles
│   ├── App.css             # Component-specific styles
│   └── index.js            # React entry point
Features Implemented
Search for books by title, author, or ISBN.
Move books between shelves: Currently Reading, Want to Read, and Read.
State persistence: Your selections are saved between page refreshes.
React Router: Navigate between the main page and search page easily.
Known Issues
Some books might not have a thumbnail or author. In those cases, the app gracefully handles it by filtering such results.
If too many books are added to a shelf, horizontal scrolling will be enabled for that shelf.
Future Improvements
Add a book detail page to display more information about individual books.
Implement drag-and-drop functionality to move books between shelves.
Add user accounts and login functionality to allow multiple users to manage their bookshelves.
Contributing
Feel free to fork the repository and submit a pull request with any improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Udacity React Nanodegree
React