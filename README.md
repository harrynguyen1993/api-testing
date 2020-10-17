# api-testing
API TESTING is a software testing type that validates Application Programming Interfaces (APIs). The purpose of API Testing is to check the functionality, reliability, performance, and security of the programming interfaces

# API METHODS
  - POST
  - PUT
  - PATCH
  - DELETE
  - GET
  ...
  
# TEST SCENARIO CATEGORIES
  - Positive tests
  - Extended positive tests
  - Negative tests with valid input
  - Negative tests with invalid input
  - Security, Authorization and Permission tests
  - Destructive tests

# STRATEGY 
  - Define scenarios 
    - Smoke testing
    - Sanity testing
    - Regression testing
    - End 2 End testing
    - Functional Testing
    - Security and Authorization
  - Performance
    - Load Tests (positive)
    - Stress Tests (negative)
  - Usability Tests
    -  Documentation, login, authentication, code examples .. etc

# API CHECKING
  - Verify correct HTTP status code: https://www.restapitutorial.com/httpstatuscodes.html
  - Verify response time
  - Verify response payload. Check valid JSON body and correct field names, types, and values — including in error responses (Json schema) https://www.liquid-technologies.com/online-json-to-schema-converter
  - Verify response headers
  - Verify data (Working correctly as expected )
  - Verify endpoints are correctly named 
  - Verify duplicate functionality
  - Verify there is no missing functionality
  - Verify relationships between resources are reflected in the API  correctly
  * Other cases:
    - Verify correct application state.
    - Require fields (Check constrain)
    - Optional fields (Should check length and type in database)
    
# RUNING API
  - Daily (fixed time at nigth)
  - Deployment (CI-CD)
  
# PROPLEM API NEED TO BE SOLVED - GOALS
 - Can swith enviroment by danamic variables
 - Can run paranel 
 - Can run command line
 - Easy to execute suite or a test case (Single test cases)
 - Can mark groub test cases
 - Data drivent: Excel, csv(suggestion)
 - Logger when running
 - Report files
 - Send email after running: HTML file, short status pass fail

# LANGUAGES
  - NodeJS
    - chai
    - chai-http
    - chalk
    - dotenv
    - mocha
    - mochawesome
    - yargs

    ![APIs Testing NodeJS Architect](3DTest.png)
    
   --------------
   
  - Python
    - pytest
    - requests (library)
    

    ![APIs Testing Python Architect](3DTest.png)
   --------------
   
  - Postman tool
    - Newman 

    ![APIs Testing postman tool Architect](3DTest.png) 
   
  - Java
    - Rest Assured
    - Robot framework

