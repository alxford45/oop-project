QUICK SETUP:
    md oop-project && cd oop-project
    git clone https://github.com/alxford45/oop-project.git
    npm i

CMD QUICK COMMANDS:
    . "<code|subl|atom> ." : "opens vscode in cuurent directory"
    . "cd <directory-name>" : "change directory"
    . "cd ./path/to/directory" : "navigate to specific directory"
    . "cd ../" : "move up one level. chain repeated for x levels ../../../ etc."            . 
    . "dir" : "show all files/directories in current directory"

NPM SCRIPTS: [in progress]
    
VSCODE PLUGINS: [in progress]
    . HTML Snippets
    . TSLint

WORKFLOW: [in progress]
    1) Create new feature branch
        . pull master (update local evironment to most recent repo version)
        . create new feature branch
        . set upstream to feature branch head
    2) Save all changes to feature branch
        . add/commit/push all feature changes to feature branch
    3) Test merge to copy of master branch
        . create copy of master as new branch 
        . pull master branch to new branch
        . set feature branch upstream to new branch (master copy)
        . merge feature branch to master copy branch
        . resolve merge conflicts
    4) Merge feature by pushing to master
        . set working merge of master-copy and feature branch upstream to master branch
        . push to master
    5) Pull master
    6) Repeat

    DEV ENV SETUP (windows):

    1) IDE/EDITOR
        . vscode (recommended)
        . atom
        . sublime
    2) WINDOWS PACKAGE MANAGERS (optional)
        . scoop: https://scoop.sh/
        . chocolatey: https://chocolatey.org/install
    3) NODE
        . using installer: https://nodejs.org/en/download/        
        . using scoop: scoop install nodejs
        . using chocolatety: choco nodejs.install
    4) GIT
        . using installer: https://git-scm.com/downloads
        . using scoop: scoop install git
        . using chocolatey: choco install git.install
    3) CREATE WORKSPACE
        1) launch cmd and navigate to perfered directory 

        2) create new directory named "oop-project" and cd into it
            . "md oop-project && cd oop-project"
        3) clone
            . "git clone https://github.com/alxford45/oop-project.git"
        4) install project dependencies
            . "npm i"
        
ADDITIONAL RESOURCES:
    1) React
        . Official Docs:  https://reactjs.org/docs/getting-started.html
        . Official Tutorial: https://reactjs.org/tutorial/tutorial.html
        . Quick Overiew: https://www.tutorialspoint.com/reactjs/
    2) Javascript
        . Mozilla Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript
        . Topics and Lessons: https://javascript.info/
        . Quick Overview: https://www.tutorialspoint.com/javascript
    3) Typescript
        . Official Docs: https://www.typescriptlang.org/docs/home.html
        . Official Tutorial: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
        . Quick Overview: https://www.tutorialspoint.com/typescript/
        
