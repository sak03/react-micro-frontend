# React Micro Frontend
This is a micro front end architecture. 
Where two micro react app called Chat App and Email app wrap inside the Host App.

All three `app1`, `app2` & `app3` are independently deployed apps:

- Host App: `app1`: http://localhost:3001
- Chat App: `app2`: http://localhost:3002
- Email App: `app2`: http://localhost:3002


### Tech Stack
1. [ReactJS](https://react.dev/ "ReactJS")  
2. [ReactDOM](https://legacy.reactjs.org/docs/react-dom.html "ReactDOM")  
3. [Module Federation](https://webpack.js.org/concepts/module-federation/ "Module Federation") 
4. [@babel/core](https://www.npmjs.com/package/@babel/core "@babel/core")  
5. [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react "@babel/preset-react")  
6. [babel-loader](https://www.npmjs.com/package/babel-loader "babel-loader")  
7. [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/ "HtmlWebpackPlugin")  
8. [Webpack](https://webpack.js.org/ "Webpack")  
9. [Command Line Interface](https://webpack.js.org/api/cli/ "Command Line Interface")  
10. [DevServer](https://webpack.js.org/configuration/dev-server/ "DevServer")  


### Steps to Run the Code
1. Clone the repository:
   ```bash
   git clone https://github.com/sak03/react-micro-frontend.git 

2. Go to chat-app folder and Install all dependencies
   ```bash
   cd chat-app/
   npm install  

3. Run the code at "localhost:3002"
   ```bash
   npm start

4. Then go to email-app folder and Install all dependencies
   ```bash
   cd email-app/
   npm install  

5. Run the code at "localhost:3003"
   ```bash
   npm start

6. Then go to host-app folder and Install all dependencies
   ```bash
   cd host-app/
   npm install  

3. Run the code at "localhost:3001"
   ```bash
   npm start