# Table of Contents

1. [Project 2](#project-2)
2. [Building and Running the Project](#building-and-running-the-project)
3. [Prettier](#prettier)
4. [Development](#development)
   1. [Built With](#built-with)
   2. [Dependencies](#dependencies)
5. [Structure](#structure)
6. [Functional Requirements](#functional-requirements)
7. [Technical Requirements](#technical-requirements)
8. [Testing](#testing)
9. [Future Work](#future-work)

# Project 2

We have made a shopping list app, where the user can make their own shopping lists based on an item register, where items represent groceries. The main functionality of this app is making customized shopping lists, to make the everyday shopping easier. The user will have a register of items to choose from, and may also add items to this register as they wish. The user will also have the opportunity to read details about each item.

## Building and Running the Project

To get started, run the following commands in the following order:

| Command                                                                       | Description                                  |
| ----------------------------------------------------------------------------- | -------------------------------------------- |
| `git clone https://gitlab.stud.idi.ntnu.no/it2810-h23/Team-22/project_2.git ` | clone project                                |
| `cd GoCart`                                                                   | navigate into root folder                    |
| `npm run back`                                                                | install dependencies and run backend server  |
| `npm run front`                                                               | install dependencies and run frontend server |

Or manually:

### Cloning the repository

1. Create a folder on your machine in which you want the project to live, for example the folder "project_2"
2. Go to the GitLab repository https://gitlab.stud.idi.ntnu.no/it2810-h23/Team-22/project_2 and select "Clone" and copy the URL pertaining to "Clone with HTTPS".
3. Open the folder created in step 1 in a terminal and enter "git clone the-url-from-clone-with-https"
4. Wait until the cloning process is finished
5. Run "git pull" in the terminal just to be sure that you got everything from the repository
6. Run "git branch -a" to see all branches
7. Run "git checkout name-of-branch" to switch to another branch
8. Once you are in the desired branch make sure that you are in the "GoCart" folder. For example, if you created the folder "project_2" folder in step 1, you may want to run "cd GoCart" to enter the correct folder.

### Installing mongodb community edition (locally)

1. Install mongodb community edition on your computer by following the instructions at https://www.mongodb.com/docs/manual/administration/install-community/
2. During installation of mongodb or thereafter install mongodb compass
3. Run mongodb using the terminal by following the instructions given at the link above for your platform
4. After all installation is complete, start mongodb compass
5. Connect to the database with mongodb compass
6. Create a database called GoCart with a collection called Products
7. Upload the json file you find at GoCart/frontend/src/utils/mockup/GoCart.Products.json to the Products collection

### Running the project

1. Going back to the project. From the GoCart folder you can run npm run back to run the backend server and connect the project to the database. Thereafter, you can run npm run front in a new terminal (remember to cd into GoCart if you are not already there). This will start the website.
2. Interact with our website.

## Prettier

Prettier is recomended to format on save. To activate follow these steps:

```
- Install Prettier extension
- Open settings for your VS Code
- Click on the formatting section of the Text Editor tab and enable Format on Save Mode.
- Highlight your code and right-click. Select Format Document. Once you click on Format Document, a dialog box will tell you to configure your code formatter. This is to set your default code formatter. Click on the configure button.
- After you click on configure, select Prettier as the default formatter.
```

Source for guided step by step tutorial: https://www.educative.io/answers/how-to-set-up-prettier-and-automatic-formatting-on-vs-code

Or use shift + alt + F to format

## Development

### Technology

- [Typescript](https://www.typescriptlang.org/)
  - JavaScript with syntax for types
- [React](https://reactjs.org/)
  - Component based JavaScript library used for creating user interfaces
- [Vite](https://vitejs.dev/)
  - Build tool
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
  - A GraphQL server for your API
- [Apollo Client](https://www.apollographql.com/docs/react/)
  - A GraphQL client for your frontend
- [GraphQL](https://graphql.org/)
  - A query language for your API

### Dependencies

This project uses the [npm](https://www.npmjs.com/) package manager.

- [React-router](https://reactrouter.com/en/main)
- [Tailwind CSS](https://tailwindcss.com/)

## Structure

The app is structured in such a way that the various parts of the website are organized into their own folders within common directories with similar elements, as follows:

- "frontend", including every element of the frontend:
  - The different pages are grouped under "pages."
  - The various components that make up the different pages are located under "components."
  - The different tools used to assist in various parts are located under "utils."
  - Icons are located under "assets."

The actual app is under "project_2/frontend/src/App.tsx."

## Functional Requirements

Search functionality, e.g., through a dialog/form/search field for search input

- We have implemented a "Searchbar" component, which updates the displayed shopping items while writing so that the items matches the search input.

List-based presentation of searches with provisions for handling large result sets, either by paging through them or dynamically loading more results through scrolling.

- The ItemRegister page shows a list-based presentation of possible shopping items depending on the input of the search field. Large result sets are handled by dynamically loading more items if the user choose to, by clicking "show more" or "show less".

The ability to view more details about each object.

- By clicking on an item in the list one will be sent to a page showing more information about the selected item, gathered from the database.

Sorting and filtering options for the result set (note that sorting and filtering should be applied to the entire result set, not just what happens to be loaded on the client).

- We have implemented filtering based on the categories of the items in the database, where the filtering is applied to the entire result set, and shown on the page as the category changes.
- We have implemented sorting options in an alphabetic order or reversed alphabetic order, where the alphabetic order is default. This is also applied to the entire result set, and displayed on the screen in the chosen order.

Inclusion of some form of user-generated data that should be stored persistently on the database server and presented (either user-added information, reviews, ratings, search history, or other data like a shopping list).

- The user will be able to add shopping items to the item register, but this is yet to be implemented.

The solution should demonstrate aspects of universal design and web accessibility.

- The website is designed to change the layout of the page based on the size of the user device.
- On desktop the home page will have a double view showing one component on the left side and one component on the right side. If the screen turns small enough (about phone size) the page will be split into two different pages.
- If the screen turns small phone sized a footer will appear.

The solution should demonstrate aspects of sustainable web development through design choices.

- Yet to be discussed within the team.

Good design, sensible choices, and solutions that align with the type of data you choose.

- The website follows a lot of the standards of web pages making it easy to navigate giving it a good design.

## Technical Requirements

The user interface should be based on React and programmed in TypeScript. The project should be set up using Vite.

- We have build the project using React and typecript, set up by Vite.

Use of state management, for example, redux, mobx, recoil, apollo local state management, etc.

- Yet to be implemented, but we are planning on implementing this for created shopping lists.

A custom/developer GraphQL backend, with the freedom to choose the type of database server on the backend, but the project should use a backend database set up by the group.

- Our custom GraphQL backend is built using Apollo Server, a powerful GraphQL server implementation. Apollo Server provides an efficient and flexible means to interact with our backend data.

Use of good and relevant components and libraries (freedom to choose, and we encourage maximum reuse of third-party solutions).

- We have used Tailwind for making the styling process smoother.

## Testing

The test are set up using vitest and should be covering both frontend and backend.

- Yet to be implemented.

## Future Work

- Our plan includes:
  - Implementing functionality for adding items to the database.
  - Implementing functionality for adding items to a shoppingList.
  - Switching from the use of local storage to local state management.
  - Implementing darkmode and other styling choices should be smoother.
  - Implementing functionality for deleting items you have added to the database.
  - Making the website accesible.
  - Setting up tests.
