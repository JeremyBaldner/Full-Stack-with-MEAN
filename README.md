# Full Stack Web App
## Architecture
**Compare and contrast the types of front-end development used in the full stack project:** <br>
**Express HTML**: Express is used to render the HTML templates for the multi-page application. Express utilizes the model–view–controller (MVC) architecture to show the correct template based on the route provided. The template was made up of HTML and CSS and dynamically compiled by Handlebars. This allows for fast and reusable webpage templates.<br>
**JavaScript**: JavaScript was used to provide dynamic functionality to the front-end of this project. For example, Handlebars compiles the HTML/CSS templates into JavaScript functions to make them dynamic. JavaScript also provided the routes and access to the JSON files to display data on the front-end.<br>
**Single-page application (SPA)**: The SPA used the Angular framework with HTML, CSS, and TypeScript to create a dynamic web application. The SPA also included Bootstrap for faster front-end development and access to interface components.<br><br>
**Why did the backend use a NoSQL MongoDB database?** <br>
MongoDB’s NoSQL database offers more flexibility and scalability. This application uses JSON as the model for reading and writing data which works better with the unstructured nature of the NoSQL database. The application also does not require complex data queries so gathering data from a NoSQL database would be quicker than SQL. NoSQL can also be developed quicker which allowed me to spend more time on delivering features and the core business logic.<br><br>
## Functionality
**How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?** <br>
JSON is used to store and transmit data objects. JavaScript is a programming language used to develop webpages. JSON can be used by JavaScript to read and write data from the database and the website.<br><br>
**Provide instances in the full stack process when you refactored code to improve functionality and efficiencies.** <br>
An example of when I refactored code to improve the functionality and efficiency was when I converted the HTML templates to Handlebar templates. This reduced the file size, which improved readability. It also allowed for fast development and provided dynamic rendering which improved the functionality.<br><br>
**Name the benefits that come from reusable user interface (UI) components.** <br>
Reusable UI provides a way to reduce the amount of code needing to be written, improves the readability, and improves the maintainability of those components.<br><br>
## Testing
**Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.** <br>
The methods used in this application are GET, POST, PUT, and DELETE. To provide security after sending a request from a method to an endpoint, the endpoint was wrapped in an authentication function. If the user was properly logged in, the requests would be returned from the database. This can make testing difficult due to the need for authentication. Tools such as Postman can be helpful by providing a way to pass an authentication token to gain access to the test data in the database. This tool can also be used to test if the authentication function works as expected by passing valid and invalid authentication tokens.<br><br>
## Reflection
**How has this course helped you in reaching your professional goals?** <br>
This course gave me experience with the design and development of a full stack web application through the utilization of the MEAN stack (MongoDB, Express, Angular, and Node.js). I was also able to create a software design document (SDD) to track the technical specifications. The SDD included UML diagrams to demonstrate the sequence and classes of the application. I will be able to use the experiences I gained throughout this course as reference while utilizing my critical thinking skills in a professional environment.<br><br>
**What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?** <br>
Full stack web development, front-end development, back-end development, MEAN stack usage, multipage application development, single-page application development, command line interface usage, GitHub push and pull requests, software design document creation, and RESTful API development and testing.

