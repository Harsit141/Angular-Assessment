# Angular TollGate Assessment - BookApp

## Objective

This is a simple web application, where, you can add the details of a book and display the details of all the added books in a Table Format. Complete this BookApp application by adding the missing code wherever required and submit it within the alloted time.

## Things to do

1. The app is composed of 2 Components and 1 Service which are part of AppModule.

			- Components (AppComponent and HeaderComponent)
			- Service (BookService)  
	
2. Do the following in AppModule  

			- Add the module components to the Declarations list.
			- Add the Other modules required to the imports list.
			- Add the services to the providers list.
			- Add AppComponent to the Bootstrap list.

3. AppComponent is the RootComponent and should contain HeaderComponent

4. Header Component contain the 'Navbar' and should display the App Title, which is, "BookApp".

5. AppComponent should Display a Form, for getting the details of the book to be added from the user, and a Table, which shows the details of the books that are already added.

6. The form should contain the below input fileds:

			- Input of type text for getting the Book Name.

			- Input of type text for getting the Author Name.

			- Input of type text for getting the Publishing Year.

			- Input of type text for getting the Language.

-  Apply the appropriate validator to each of the Input fields, so that, the form should be valid only when all the field is containing the value.

- Bind the Input fields to the appropriate properties of the Book Model Object, using ngModel.

7. Table should display the details as follows.    

		-  Should display serial number, name, author, year and language for each book.
		- Each row should be dynamically created using approriate structural directive depending upon the number of books, the component, received from the server.  
		- Use String Interpolation to bind the values of book object to table data cell content.

8. Complete the below functions of AppComponent :  

			- getBooksFromServer() - Subscribes to observable returned by getBooks() and assign the received books to the books array.
			- newBook() - Called when the form is submitted. Adds the Book to the list by calling addBook().

9. Complete the Below functions of BookService.
 
			- getBooks() - Performs the API call using HttpClient get() and returns the Observable of Book[].
			- addBook() - Performs the API call using HttpClient post() and returns the Observable of Book.  

10. Below is the available endpoints for Making API calls.

			- GET - http://localhost:3000/books - get all the books
			- POST - http://localhost:3000/books - add a new book 

11.  Also, Read the comments given in the files and add your code accordingly.
