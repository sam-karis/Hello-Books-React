# Hello-Books-API

[![Maintainability](https://api.codeclimate.com/v1/badges/f3175d9d2d15ab7e6861/maintainability)](https://codeclimate.com/github/sam-karis/Hello-Books-React/maintainability)

Hello-Books-APi is a library management appication. It help in management and tracking of books and users who interact with the library's books. The application also enable new users to register while existing users can login. Users can also reset their password and borrow books.

- To view documentation for the API click [here](https://hellobookapi.docs.apiary.io/).   

| Functionality              |Authorized|
|----------------------------|---------------------
|Add a book                  | Admin only               
|Modify a book’s information | Admin only
|Remove a book               | Admin only
|Retrieves all books         | Everybody
|Borrow a book               | logged in User and Admin
|Register a user             | Everybody
|Get registered users        | Admin only
|Login a user                | Registered user
|Logout a user               | Loggged in user
|Reset a user Password       | Registered user
|Borrow a books              |Logged in user
|Return a books              |Logged in user
|Get user borrowing history  |Logged in user