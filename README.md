Node Custom Boilerplate
=======================
Custom Boilerplate for node.js inspired by [node-boilerplate](https://github.com/robrighter/node-boilerplate). 
Regardless to Node Boilerplate, we use the same dependencies, but adding some libs usefull in every projects !


**Dependencies :**
  - connect *(2.7.6)*
  - express *(3.0.6)*
  - jade *(0.31.2)*
  - mongoose *(3.5.15)*
  - socket.io *(0.9.2)*

**And some usefull libs :**
  - grunt.js
  - less css
  - lesshat.less
  - Twitter bootstrap

##Start a project

**1. Clone the repository and execute the shell**

  	git clone https://github.com/Argetloum/node-arget-boilerplate.git mynewproject
	cd mynewproject
	./initproject.sh

This will copy down all of the boilerplate files, organize them appropriately and init a fresh new git repository within which you can build your next big thing.

**2. Do npm install to install the dependencies (only if they are not implemented yet)**

	sudo npm install

**3. Run the boilerplate template app**

	node app.js
	
## Structure

	|- app
	|   |- controllers
	|   |- models
	|   |- views
	|
	|- config
	|- lib
	|- public
	|   |- css
	|   |- img
	|   |- js
	|   |- less
	|
	|- test

