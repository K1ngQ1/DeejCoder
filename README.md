# deejCoder

## Software Requirements:
### Preface
This is a first version of the web app and defines the website and requirements thereof.

## Introduction
This system is needed to help newcomers of the deej controller to help them get their first pieces of code of the ground and running

## User requirements definition
Provide the users an easy to understand app to generate code for them

### Functional components 
Way to generate code
Way to save the code
Way for users to log in and out and sign up

### Non-functional components

#### Usability
For the first iteration the app will only have a profile, sign up, log in, code generator and home page but future versions will include guides.

#### Reliability
This app will be refactored making it easier to track and locate errors and bugs and fix them

#### Performance
All users will be stored in a single db and the users code will be stored in a separate db file and given a unique user_id to be able to assign to a specific user

#### Security
This app will have JWT token verification, react route protecting and encryption of user sensitive information on the db

#### Design constraints
This app will be simple in design and have a interchangeable theme button located bottom left to allow the user to select one of the vast options of different color options

#### Implementation Requirements:
This app will allow users to create code snippets and save them to their profile

#### Interface Requirements:
Typescript React front end, express backend and mongo database for storing the information 

#### Support Requirements:
This will be installed with the npm install and then run with npm start. It will be monitored with the hosting service's built in monitoring tools and updated and maintained by a full-stack web dev.

## System Requirements Specifications
Described functional and non-functional requirements in previous topics.

## System Evolution
This is a multi-page react app that can and will be extended in future versions with further support for different types of components and guides in the pipeline

## Appendices
This will be a single page application with a router to display pages. It will work with a express server and communications will be handled by axios and mongo's communication interface for CRUD operations.

