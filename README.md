<h1>Per Scholas Capston Project</h1>
<h2>Project Name: Work It Out</h2>
<h3>Project Description</h3>
<p>Work It Out is an app where the user can create, read, update and delete there own personal workout plan and, while working out, allow them to listen to their favorite work music</p>

<h2>How I created this app</h2>
<p>I created this app by seperating it into three different parts:</p>
<ol>
    <li>Backend</li>
    <li>Frontend</li>
    <li>Authorization</li>
</ol>

<h3>Backend Process</h3>
<ol>
    <li>Setup Express</li>
    <li>Set up API routes
    <ul>
        <li>GET all workouts: router.get('/')</li>
        <li>GET a single workout; router.get('/':id)</li>
        <li>Create a new workout: router.post('/':id)</li>
        <li>Update a workout: router.patch('/':id)</li>
        <li>Delete a workout: router.delete('/':id)</li>
    </ul>
    </li>

    <li>Set up MongoDB</li>
    <li>Set up Schema</li>
    <li>create workoutRouter.js</li>
    <li>Setup routes</li>
    <li>Setup controllers</li>
</ol>

<h3>Frontend Process</h3>
<ul>
    <li>Create react app in frontend folder</li>
    <li>Use Axios to get data from models</li>
    <li>Created a form</li>
    <li>Add functionality for CRUD operations and state management</li>
    <li>Styled the home page</li>
</ul>

<h2>Home Screen layout</h2>

![homescreen](https://user-images.githubusercontent.com/6307334/200939804-3614805b-0ac2-474d-a94b-f8949a3f47b6.png)

<h3>Implement Authentication</h3>
<ol>
    <li>Create userRoute.js in routes folder</li>
    <li>Create userController.js in controller folder</li>
    <li>Set up loginUser & signupUser routes in userRoutes.js</li>
    <li>Create loginUser & singupUser functions in userController.js</li>
    <li>Hook up controller functions to the routes</li>
    <li>Register the routes inside server.js</li>
    <li>Create userModel</li>
    <li>Require userModel in userController.js</li>
    <li>Functionalize user sign up & hash passwords using Static methods</li>
    <li>Validate Email and password</li>
    <li>Implement JWT</li>
    <li>Create login and sign up forms</li>
    <li>Create sign up hook to connect sign up form to the db</li>
</ol>

