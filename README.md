# Hello-Books-React

[![Build Status](https://travis-ci.org/sam-karis/Hello-Books-React.svg?branch=develop)](https://travis-ci.org/sam-karis/Hello-Books-React)
[![Maintainability](https://api.codeclimate.com/v1/badges/f3175d9d2d15ab7e6861/maintainability)](https://codeclimate.com/github/sam-karis/Hello-Books-React/maintainability)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5411087ed4f041d48e26e69b7297e74f)](https://www.codacy.com/app/sam-karis/Hello-Books-React?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=sam-karis/Hello-Books-React&amp;utm_campaign=Badge_Grade)
[![Coverage Status](https://coveralls.io/repos/github/sam-karis/Hello-Books-React/badge.svg?branch=develop)](https://coveralls.io/github/sam-karis/Hello-Books-React?branch=develop)

Hello-Books-React is a library management appication. It help in management and tracking of books and users who interact with the library's books. The application enable new users to register while existing users can login borrow, return and view their borrowing history. Application admins have the ability to add, edit, and delete books from the library

- To view the application online click [here](https://hello-books-react.herokuapp.com/).  
- To view documentation for the API click [here](https://hellobookapi.docs.apiary.io/) and for github [code](https://github.com/sam-karis/Hello-Books-API)

## Technologies used
- React
- Redux
- Python 3.6.5, Flask REST API

## Installation and setup locally

### Backend API
Create python virtual environment and clone the API from link above following instruction in it's documentation.
```
python3 -m venv env
source ./env/bin/activate 
git clone https://github.com/sam-karis/Hello-Books-API.git  
```
set global environments and to run the application locally use ```flask run```

### Front-end - (React and Redux)
 1. clone the application and move to the directory
 ```
 git clone https://github.com/sam-karis/Hello-Books-React.git

 cd Hello-Books-React
 ```  

 2. Installing packages   
 ```npm```
 3. Create a `.env` and set the api url.   
 For localhost ```REACT_APP_api_url='http://127.0.0.1:5000/api/v2/'```   
 For heroku
 ```REACT_APP_api_url=' https://hello-books-react.herokuapp.com/api/v2/'```


 3. To run the application use   
```npm start```

### Author 
Sammy Kariuki  