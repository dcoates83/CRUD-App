# Technical Test

Total Hours: 6

## Built With

`react` `express` `mongoose` `node.js`

## Usage
Clone the repo
```
git clone https://github.com/dcoates83/Technical-Test.git
```
Navigate to the backend
```
cd backend
``` 

Install NPM packages

```
npm install
```
Add the shared env file.

Then run this script to try out the app!
```
npm run dev
```
# Wrap up
Project went went well, I did have one major bug that took up a bunch on time. It was a silly one. When the object was being created for the backend, I had originally set it to "name" instead of "first_name". Then I created two objects afterwards. This took awhile to figured out as when it attempted a GET request it was fetching attempting to fetch "first_name", and the "name" being mixed in there was throwing errors.abs

Let me know if there is anything I can clarify further for the project! 

