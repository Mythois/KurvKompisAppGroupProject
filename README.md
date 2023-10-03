# Project 2
Our app is...

## Structure
The app is structured in such a way that the various parts of the website are organized into their own folders within common directories with similar elements, as follows:
* "frontend", including every element of the frontend:
    - The different pages are grouped under "pages."
    - The various components that make up the different pages are located under "components."
    - The different tools used to assist in various parts are located under "utils."
    - Icons are located under "assets."

The actual app is under "project_2/frontend/src/App.tsx."

## Functional Requirements
* Something here
* And something here
    - Maybe even something here

## Technical Requirements
* Something here
* And something here
    - Maybe even something here

## Testing
Somethingsomething test

## Future Work
- What is our plan?

## Building and Running the Project
### How to get started
1. Create a folder on your machine in which you want the project to live, for example the folder "project_1"
2. Go to the GitLab repository https://gitlab.stud.idi.ntnu.no/it2810-h23/Team-22/project_2 and select "Clone" and copy the URL pertaining to "Clone with HTTPS".
3. Open the folder created in step 1 in a terminal and enter "git clone the-url-from-clone-with-https"
4. Wait until the cloning process is finished
5. Run "git pull" in the terminal just to be sure that you got everything from the repository
6. Run "git branch -a" to see all branches
7. Run "git checkout name-of-branch" to switch to another branch
8. Once you are in the desired branch make sure that you are in the "project_2/frontend" folder. For example if you created the folder "project_2" folder in step 1, you may want to run "cd project_2" and "cd frontend" to enter the correct folder.
9. Run "npm install" and wait for the process to finish.
10. You can now run "npm run dev" to start a live server that should update everytime you make changes to the codebase.

Step 8 may  have to and step 9 and 10 certainly  have to be repeated everytime you start your IDE. 

### How to save changes in a branch
Once you have made changes that you want to save in the branch you are currently working in, do the following:
1. Run "git status" to see all changed files
2. Assuming you want to add all changed files / all changes to the branch you are currently working in, run the command "git add --all".
5. Check that you have added all changes by running: git status
4. Commit the changes you have made by running: git commit -m"[#issueNumber]your-commit message header" -m"your-detailed-commit-message"
5. Push the commited changes to the branch: git push