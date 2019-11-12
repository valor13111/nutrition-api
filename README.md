## Using the project

This React application uses a Nutrition API: https://developer.edamam.com/edamam-docs-nutrition-api

To run, you need to replace the application id and application key in the App.js file on the [GET] request. You will receive these when you sign up on the website.

The program (for now) just fetches a request for a single hardcoded item, and produces the output on the screen. Since it is the free tier, you are limited to the number of API calls per hour.

## Libraries

- axios (https://github.com/axios/axios)
- bootstrap

### Future Updates

- The API uses Natural Language, so I will have a call that shows the total nutrition for a whole recipe
- Display Prettier Formatting of the components
- Inputs to retrieve nutrition for any item
