# symmetrikcal
Find your balance. Keep your calories, symmetrikcal.<br/>
<strong>Status:</strong> Under development

# Introduction
<strong>Symmetrikcal</strong> is a calories calculator desktop webapp that allows users to log meals and keep track of their daily calories.
It is built with the MERN Stack and fetches data from the <a href="https://developer.edamam.com/food-database-api-docs">Edamam API</a>,
storing user's data in MongoDB Atlas database as well as manages state using Redux. 

# Webapp Features
  <h4>Welcome Page</h4>
  <img src="https://i.ibb.co/fqRgwTw/Welcome-page-ss.png" alt="homepage" border="0">
  User is initially greeted on the enter page, with a choice to either login or create a new account. 
 
  <h4>Login Page</h4>
  <img src="https://i.ibb.co/PDB47zD/Login-page-ss.png" alt="Login Page highlight" border="0">
 
  <h4>Create New Account Page</h4>
  <img src="https://i.ibb.co/znWNf1v/Sign-up-page-ss.png" alt="Create New Account page" border="0">
  Creating an account is separated into 3 parts. The basic account login details, setting the macronutrients and setting target and current weight.
  Upon clicking on register, account is created(POST) in database and user is navigated to step 2.
  
  <img src="https://i.ibb.co/SfCD72Z/Sign-up-setmacros-ss.png" alt="Set macros page" border="0">
  Here, user inputs his/her target daily calories and macros. Upon clicking on next, account details is updated(PUT) in the database and user is directed to 
  the last step.
  
  <img src="https://i.ibb.co/RvpJFCD/Sign-up-setweight-ss.png" alt="Set weight page" border="0">
  Here, user inputs his/her target and current weight. Upon clicking on get started, account details is updated(PUT) in the database and user is directed to 
  the main page, the dashboard.

  <h4>Dashboard Page</h4>
  <img src="https://i.ibb.co/KVLWbjx/Dashboard-ss.png" alt="dashboard main page" border="0">
  Here, user is greeted according to the time of day in the top banner. This page serves to give user an overview of the daily meal logs.
  It features: <br/>
  1. a dougnut chart from Chartjs that displays the total kcal and kcal left for the day in the right section.<br/>
  2. a summary of the total calories and macros for breakfast, lunch, dinner and snack.<br/>
  3. a weight tracker to keep track of your weight. Data is displayed using the Line chart in Chartjs.
  
  <h4>Adding New Log Page</h4>
  <img src="https://i.ibb.co/qy1DFCN/Add-Log-ss.png" alt="Add new log" border="0">
  One of the main features of the webapp is searching for data in the <a href="https://developer.edamam.com/food-database-api-docs">Edamam API</a>, 
  to select and manipulate before logging it into the backend.<br/>
  
  It features a search bar to input your searches and a form component on the right where you can manipulate data accordingly.
  
  <h4>Diary Page</h4>
  <img src="https://i.ibb.co/NNQ1s5V/Diary-ss.png" alt="diary page" border="0">
  The diary page provides a breakdown of the meals, separated in different tabs. It gives u a list of all the item logs and a summary of the macros for that meal
  in the right section.
  
  
  <h4>Log History Page</h4>
  <img src="https://i.ibb.co/f9vMY8P/Log-History-ss.png" alt="log history page" border="0">
  The Log History Page has two main features. A daily total calories tracker and user's log history. Graph/chart is upated once there's a new log for that day.
  
  <h4>SETTINGS PAGE (#wip)</h4>
  The Settings page allows users to edit/update their account details such as username or password, macros and calories as weill as their weight. 
  
# Issues to be tackled/finetuned*

1. refreshing the input fields after logging food to database. especially the mealtype.<br/>
2. Upon creating a new account the next page requires to be refreshed before it can load the name of the user.<br/>
3. Log History page won't load unless there's 6days of data to plot for the chart.</br>
<em>*Section to be updated.<em>
# Dependencies Used

<table>
  <thead>
    <tr>
      <th><strong>Backend</strong></th>
      <th><strong>Frontend</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>express</td>
      <td>axios</td>
    </tr>
    <tr>
      <td>mongoose</td>
      <td>react-router-dom</td>
    </tr>
    <tr>
      <td>dotenv</td>
      <td>redux</td>
    </tr>
    <tr>
      <td>nodemon</td>
      <td>redux-thunk</td>
    </tr>
    <tr>
      <td>bcryptjs</td>
      <td>redux-devtools-extension</td>
    </tr>
    <tr>
      <td>jsonwebtoken</td>
      <td>moment/td>
    </tr>
    <tr>
      <td>concurrently</td>
      <td>chart.js</td>
    </tr>
     <tr>
      <td>express-async-handler</td>
      <td>react-tabs</td>
    </tr>
   
   
  </tbody>
</table>





