# GraphQL Book Search Application (Converted Express App to Graphql)

## User Story
As an avid reader, I want to search for new books to read so that I can keep a list of books to purchase.

## Acceptance Criteria Per Project Description
- **Given** a book search engine
  - **When** I load the search engine
    - **Then** I am presented with a menu with the options **Search for Books** and **Login/Signup** and an input field to search for books and a submit button.

- **When** I click on the **Search for Books** menu option
  - **Then** I am presented with an input field to search for books and a submit button.

- **When** I am not logged in and enter a search term in the input field and click the submit button
  - **Then** I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site.

- **When** I click on the **Login/Signup** menu option
  - **Then** a modal appears on the screen with a toggle between the option to log in or sign up.

- **When** the toggle is set to **Signup**
  - **Then** I am presented with three inputs for a username, an email address, and a password, and a signup button.

- **When** the toggle is set to **Login**
  - **Then** I am presented with two inputs for an email address and a password and login button.

- **When** I enter a valid email address and create a password and click on the signup button
  - **Then** my user account is created and I am logged in to the site.

- **When** I enter my account’s email address and password and click on the login button
  - **Then** the modal closes and I am logged in to the site.

- **When** I am logged in to the site
  - **Then** the menu options change to **Search for Books**, an option to see my saved books, and **Logout**.

- **When** I am logged in and enter a search term in the input field and click the submit button
  - **Then** I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account.

- **When** I click on the **Save** button on a book
  - **Then** that book’s information is saved to my account.

- **When** I click on the option to see my saved books
  - **Then** I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account.

- **When** I click on the **Remove** button on a book
  - **Then** that book is deleted from my saved books list.

- **When** I click on the **Logout** button
  - **Then** I am logged out of the site and presented with a menu with the options **Search for Books** and **Login/Signup** and an input field to search for books and a submit button.

## Starting Point
 It was already a working application. Project was to convert it from RESTful API practices to a GraphQL API.

### User Type:
- `_id`
- `username`
- `email`
- `bookCount`
- `savedBooks` (array of the Book type).

### Book Type:
- `bookId`
- `authors`
- `description`
- `title`
- `image`
- `link`

### Auth Type:
- `token`
- `user` (References the User type).



## Installation
1. Navigate to the project directory.
2. Run `npm install` to install the required dependencies.
3. Set up your environment variables in a `.env` file.
4. Start the server with `npm start`.

## Usage
Visit the application in your browser, where you can search for books, create an account, save books to your profile, and manage your saved books.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Contact Me
https://github.com/KimCBNS/refactor-restful-graphql
