# Project 2
We have made a shopping list app, where the user can make their own shopping lists based on an item register.

## Structure
The app is structured in such a way that the various parts of the website are organized into their own folders within common directories with similar elements, as follows:
* "frontend", including every element of the frontend:
    - The different pages are grouped under "pages."
    - The various components that make up the different pages are located under "components."
    - The different tools used to assist in various parts are located under "utils."
    - Icons are located under "assets."

The actual app is under "project_2/frontend/src/App.tsx."

## Functional Requirements
Search functionality, e.g., through a dialog/form/search field for search input
* We have implemented a "Searchbar" component, which updates the displayed shopping item while writing so that the items matches the search input.

List-based presentation of searches with provisions for handling large result sets, either by paging through them or dynamically loading more results through scrolling.
* The ItemRegister page shows a list-based presentation of possible shopping items depending on the input of the search field. Large result sets are yet to be handled when the DB is implemented.

The ability to view more details about each object.
* By clicking on an item in the list one will be sendt to a page showing more information about the selected item. We are yet to fix so that actual information is shown and not just the placeholder information.

Sorting and filtering options for the result set (note that sorting and filtering should be applied to the entire result set, not just what happens to be loaded on the client).
* We are planning on implementing filtering based on the categories of the items in the database.

Inclusion of some form of user-generated data that should be stored persistently on the database server and presented (either user-added information, reviews, ratings, search history, or other data like a shopping list). 
* The user will be able to add shopping items to the item register.

The solution should demonstrate aspects of universal design and web accessibility.
* The website is designed to change the layout of the page based on the size of the user device. 
* On desktop the home page will have a double view showing one component on the left side and one component on the right side. If the screen turns small enough (about phone size) the page will be split into two different pages.
* If the screen turns small phone sized a footer will appear.

The solution should demonstrate aspects of sustainable web development through design choices.
* **{?}** Yet to be discussed within the team.

Good design, sensible choices, and solutions that align with the type of data you choose.
* The website follows a lot of the standards of web pages making it easy to navigate giving it a good design.

## Technical Requirements
The user interface should be based on React and programmed in TypeScript. The project should be set up using Vite.
* We have build the project using React and typecript, set up by Vite.

Use of state management, for example, redux, mobx, recoil, apollo local state management, etc.
* Yet to be implemented.

A custom/developer GraphQL backend, with the freedom to choose the type of database server on the backend, but the project should use a backend database set up by the group.
* Yet to be implemented.
* The backend is going to be build using GraphQL so that it should, by changing the **{?}** variable be able to interact with different types of database servers.
* For the project it is going to be built a database set up by de group following the **{?}** model. 

Use of good and relevant components and libraries (freedom to choose, and we encourage maximum reuse of third-party solutions).
* Yet to be implemented.
* We have used Tailwind for making the styling process smoother.

## Testing
The test are set up using vitest and should be covering all the different components and **{?}**
* Yet to be implemented.

## Future Work
- Our plan includes adding the missing functionality named above, as well as setting up and implementing the usage of a database. We are also planning on making the styling smoother.

## Building and Running the Project
### How to get started
1. Create a folder on your machine in which you want the project to live, for example the folder "project_1"
2. Go to the GitLab repository https://gitlab.stud.idi.ntnu.no/it2810-h23/Team-22/project_2 and select "Clone" and copy the URL pertaining to "Clone with HTTPS".
3. Open the folder created in step 1 in a terminal and enter "git clone the-url-from-clone-with-https"
4. Wait until the cloning process is finished
5. Run "git pull" in the terminal just to be sure that you got everything from the repository
6. Run "git branch -a" to see all branches
7. Run "git checkout name-of-branch" to switch to another branch
8. Once you are in the desired branch make sure that you are in the "MatLyst" folder. For example if you created the folder "project_2" folder in step 1, you may want to run "cd MatLyst" to enter the correct folder.
9. You can now run "npm run dev" to start a live server that should update everytime you make changes to the codebase.

Step 8 may  have to and step 9 and 10 certainly  have to be repeated everytime you start your IDE. 

### How to save changes in a branch
Once you have made changes that you want to save in the branch you are currently working in, do the following:
1. Run "git status" to see all changed files
2. Assuming you want to add all changed files / all changes to the branch you are currently working in, run the command "git add --all".
5. Check that you have added all changes by running: git status
4. Commit the changes you have made by running: git commit -m"[#issueNumber]your-commit message header" -m"your-detailed-commit-message"
5. Push the commited changes to the branch: git push