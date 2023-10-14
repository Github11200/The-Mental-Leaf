# The Mental Leaf
This is our submission for the Recess Hacks 3.0 hackathon.

## Overview
The Mental Leaf is a simple web application that aims to help people going through mental health in a different approach. This app focuses on helping people by giving them jokes, an unbiased chatbot to talk to that does not judge them at all, a journal where they can write our their feelings, and some external resources.

## Usage
Prerequesites for running this project:
  - You must have Node JS installed.
  - You must have NPM installed (which is bundled with Node JS).
  - You must have a web browser.

Instructions for running the project:
  1) Download and extract the files onto your desktop.
  2) Open powershell (if you're on windows) or your terminal (if you're on mac).
  3) Use the cd command to change the directory and navigate to desktop/(any other folders you may have/The-Mental-Leaf/client, this is shown in the image of the window's powershell below:
![image](https://github.com/Github11200/The-Mental-Leaf/assets/78944617/722d72e2-bfb3-410c-aa81-78d32aea9740)
  4) Then run the command 'npm start' and this should open your browser to http://localhost:3000.
  5) Open the server folder inside of the 'The-Mental-Leaf' folder, and inside server.js replace the text "YOUR_API_KEY" on line 10 with an API key from OpenAI's API, the link is https://platform.openai.com/.
  6) Once you add in your API key it should look something like the code below (note: the key in the link will NOT work for you because it will be deleted):
![image](https://github.com/Github11200/The-Mental-Leaf/assets/78944617/7aaa22d6-8d16-47b2-92ac-b1cdde3392e8)
  8) Now, open another powershell or terminal (keep the last one open and running, DON'T close it).
  9) Inside here navigate to desktop/(any other folders you may have/The-Mental-Leaf/server using the cd command, and the path should look like the image below:
![image](https://github.com/Github11200/The-Mental-Leaf/assets/78944617/29df1ffe-8730-4fc9-8518-3cf9100634a0)
  10) Now run the command 'nodemon .\server.js' and this 'Server is listening on port 3001'.
  11) Now, you should be able to use the chatbot on the website, and when you send it a request there should be a reply in a few seconds.
