# cypresstest
#1**Cypress Installation Steps**
a) Download Node.js & NPM
b) Set NODE_HOME Environment variable
c) Create cypress working folder
d) Generate package.json
e) Install cypress
f) Download visual studio code editor
g) Import cypress working folder in visual studio code editor
h) Steps to install cypress in another working folder
i) Steps to uninstall cypress

a) Download Node.js & NPM
Google search ‘download nodejs’ --> https://nodejs.org/en/download

Cypress on Windows

Click the above link
Cypress on Windows

Download windows installer
Cypress on Windows

To install node.js, double click msi file
Cypress on Windows

Keep clicking Next and accept license

You can see below that ‘npm package manager’ also gets installed.
Note: npm is ‘node package manager’
Cypress on Windows

Keep clicking Next and finish the installation

You can go to the below folder (this is the place where nodejs gets installed)
Cypress on Windows

This completes Node.js installation.

b) Set NODE_HOME Environment variable

We will now add node.js to the environment variables path so that we can run nodejs from anywhere in our system.

Just copy the location where we have installed node.js
Cypress on Windows

Right click ‘This PC’ >Properties > ‘Advanced system settings’ > ‘Environment variables’ > Click ‘New’ under ‘System variables’

Enter NODE_HOME in ‘Variable name’ field and enter C:\Program Files\nodejs in ‘Variable value’ field
Cypress on Windows

Click OK. You should see NODE_HOME under System variables
Cypress on Windows

Click OK to close above windows.

c) Create cypress working folder

We will now create a working folder where we will be creating all our cypress tests. We can create this blank folder anywhere in the system
Cypress on Windows

d) Generate package.json

The reason we create package.json file is because Npm reads this file & installs required software (example cypress software). So basically, we have to specify the cypress dependency inside package.json and than we have to run the NPM command. So the npm command will read the package.json and will download the required s/w.

Note: package.json is similar to pom.xml file in maven java project. We mention the required dependencies in pom.xml

Let us now see how to generate this package.json using the command line. To do that, go to cypress working folder location that we created above
Cypress on Windows

Type cmd and hit enter to open command prompt
Cypress on Windows

Run the command ‘npm init’
Note: npm was already installed along with node.js installation
Cypress on Windows

See above, it is asking for the package name, you can give any package name, example cypressautomation
Cypress on Windows

Keep hitting ‘Enter’ for rest of the fields.

Notice that it is asking us that it is about to generate package.json and if we are Ok or not
Cypress on Windows

Type yes
Cypress on Windows

Hit Enter to exit the process
Cypress on Windows

Execute ‘dir’ command, you will see that package.json file is created
Cypress on Windows

Go to the cypress working folder, you will find package.json
Cypress on Windows

If you open this json with any editor, you can see the default information. Presently we do not have any cypress software dependency entry inside this json, since we haven’t yet installed cypress
Cypress on Windows

e) Install cypress

Let us now see how to install cypress. Just google for ‘cypress installation’ or click the below link to find instructions on how to install cypress
https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install

Cypress on Windows

Let us to cd to project location or project path
Cypress on Windows

Next, execute the command: npm install cypress –save-dev
Cypress on Windows

Let us understand this command.

npm install cypress will i) automatically downloads cypress and ii) make an entry in the package.json file

–save-dev will save cypress entry inside package.json.
So suppose you move this project ‘CypressAutomation’ to some other location, the package.json will still contain an entry for cypress. So you just have to execute the command npm install cypress. You don’t have to again execute the entire command npm install cypress –save-dev

So the entire command npm install cypress –save-dev needs to be executed only for first time.

It might take around 30 minutes for the complete installation of cypress. So we have installed cypress successfully!
Cypress on Windows

Now go to the cypress working location C:\Users\DELL\CypressAutomation and open package.json
You will now see an entry for cypress software that we have installed
Cypress on Windows

f) Download visual studio code editor

To write our cypress automation javascript scripts, we need Visual Studio code editor (just like we use Eclipse IDE to write java code).

So let us see how to install Visual Studio code editor. Go to the site https://code.visualstudio.com/download 

Click ‘Windows’ and download application (exe) file ‘VSCodeUserSetup-x64-1.44.2’

Double click this exe & complete the installation to open the Visual studio code editor
Cypress on Windows

Visual studio code editor will get installed under location (location might be different in your machine): C:\Users\DELL\AppData\Local\Programs\Microsoft VS Code
Cypress on Windows

g) Import cypress folder in visual studio code editor

Now we need to import the cypress working folder
Cypress on Windows

Go to the location where cypress working folder was created, see below
Cypress on Windows

Click ‘Select Folder’. The below window would come up
Cypress on Windows

Our project setup is now completed in visual studio code editor. Close the welcome screen.

By default, you can see package.json etc
Cypress on Windows

Now expand node_modules folder. These are the dependencies that got downloaded automatically when we installed cypress. You can also see the cypress component @cypress
Cypress on Windows

Now we are ready to write our cypress automation scripts. So we have completed all the steps & have successfully installed cypress on windows machine!!

h) Steps to install cypress in another working folder
If you want to setup/install cypress in another working folder, simply repeat the steps c – e:

–>create new cypress working folder
Cypress on Windows

–>go to command line & cd to the folder
Cypress on Windows

–>npn init (to create package.json)
Cypress on Windows

–>npm install cypress –save-dev
Cypress on Windows

