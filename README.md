# Hello-Books-API

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8d26dff5a5e949aeb724dc336d8c9efa)](https://app.codacy.com/app/sam-karis/Hello-Books-React?utm_source=github.com&utm_medium=referral&utm_content=sam-karis/Hello-Books-React&utm_campaign=badger)

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