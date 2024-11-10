# Book App #
A simple web application built with HTML, CSS, and JavaScript that allows users to manage their personal library. This app includes a dark mode toggle, displays books by category, and offers signup/signin functionality for user accounts. Users can view book details, filter books by category, and save their personal book collection.

#Features
- Dark Mode: Switch between light and dark themes for a better user experience.
- Book Details: View detailed information about each book, including title, author, description, and cover image.
- Category-based Book Display: Filter books based on categories such as fiction, non-fiction, science, and more.
- Signup/Signin: Secure user authentication allowing users to create accounts and log in to save their book collections.
- Add/Edit/Delete Books: Users can manage their books (add new books, edit existing ones, and delete books from their collection).
Demo
You can view the live demo of the app here [Click Here]()

# Tech Stack
## Frontend:
- HTML5: For structuring the content and pages.
- CSS3: For styling the app, including support for light and dark themes.
- JavaScript: For the app's interactivity, including dark mode toggle, book CRUD operations, and signup/signin functionality.
- Local Storage: For saving user data and book collections in the browser.

# index.html
- Contains the structure of the application including the forms for adding books, signing up/signing in, and the category filter options.

# style.css
- Styles the app with custom themes for light and dark modes, layouts, and book display styles.

# script.js
## Contains the JavaScript for:

- Dark mode toggle functionality.
- Managing books (add, edit, delete).
- Filtering books by category.
- Handling user authentication (sign up, sign in, etc.).
- How It Works
- Dark Mode Toggle
- The app allows users to switch between light and dark themes using a toggle button. The theme preference is stored in the browser's localStorage to persist across page refreshes.
- Book CRUD (Create, Read, Update, Delete)
- Users can add new books with title, author, description, and cover image URL.
- Books are displayed in a list and can be filtered by category (e.g., fiction, non-fiction, science).
- Books can be edited or deleted.
- Category-based Book Display
- Books are displayed based on their assigned category.
- Categories such as Fiction, Non-Fiction, Science, Biography, etc., can be selected from a filter menu.
- Signup/Signin Functionality
- Users can create an account (signup) by providing a username and password.

- After signup, users can log in (signin) using their credentials. This feature ensures that users can save and retrieve their personal book collections.

## Note: The app uses localStorage to simulate user authentication, but you could integrate a real authentication system (e.g., Firebase Authentication) for production.

# Usage
## Signup/Signin:

- First, users need to sign up or sign in using a username and password.
- Upon successful sign-in, users can add books to their collection.

## Adding Books:

- After signing in, users can use the "Add Book" form to input book details, including the title, author, description, and category.
- The books are stored in localStorage and are displayed under the relevant category.
## Editing and Deleting Books:

- Users can edit or delete books from their library by clicking on the corresponding buttons next to each book.

## Switching Themes:

- Users can toggle between light and dark themes by clicking the dark mode button.
## Thank you for review the whole content !! stay tuned for more content
