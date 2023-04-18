Tweet
---
Description of the project
This project is designed to visualize and manage tweet user cards.

___
API Reference https://api_key.mockapi.io/api/v1/users

```
Get users
https://{api_key}.mockapi.io/api/v1/users?limit={limit}&page={page}
HTTP method: GET
Required parameters:
- api_key(string): Your API key
- limit(number): number of records
- page(number): the next number of records

Update user
https://api_key.mockapi.io/api/v1/users/${id}
HTTP method: PUT
Required parameters:
- id(string): User ID
Request Body:
- key(string): field name to update
- value(number): the new value for the field
```
___

**The authors**
>[IhorMal](https://github.com/IhorMal)
___

**Badges**
>License: MIT
___

**Demo**
>test](https://ihormal.github.io/test_tweets/)
___

**Assistance**
>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
___

**Feedback**
> If you have any feedback, please contact us at ihormalyuha@gmail.com
___
**Deployment**
Getting started with creating a React application
This project was launched with [Create React App](https://github.com/facebook/create-react-app) .

Scripts are available
In the project directory you can run:

**npm start** 
>Starts the program in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You can also see lint errors on the console.

**npm run build**
>Builds the application for production in the buildfolder.
It properly bundles React in production mode and optimizes the build for best performance.

The build is minimized and the filenames contain hashes.
Your app is ready to deploy!

For more information, see in the deployment section.

**npm run eject**
>Note: This is a one-way transaction. Once ejected, you can't go back!

If you are not satisfied with the build tool and configuration choices, you can eject at any time. This command will remove one assembly dependency from your project.

Instead, it will copy all configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) directly into your project so that you have full control over them. All commands except eject will work, but they will point to the copied scripts so you can configure them. At this point you are on your own.

You should never use eject. The curated feature set is suitable for small to medium deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool won't be useful if you can't set it up when you're ready.

This section has been moved to: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minimize
