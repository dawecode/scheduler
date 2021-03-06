# Interview Scheduler
Interview Scheduler is a single page application (SPA) built using REACT in the context of my studies at Lighthouse Labs. A user can switch between weekdays, book, edit and cancel interviews. The list of days informs the user how many spots are left that day. The application makes API request to load and persist data using a PostgreSQL database over HTPP with the JSON format. Unit testing was done with JEST and end-to-end testing with Cypress. Each component was rendered in Storybook and tested individually. 

## Final product 

##### When you want to book click on the "add"
!["main page"](https://github.com/dawecode/scheduler/blob/master/docs/main.png)
##### Add your information and choose your interviewer
!["booking"](https://github.com/dawecode/scheduler/blob/master/docs/booking-form.png)
##### This is what a booked appointment looks like !
!["new booked interview"](https://github.com/dawecode/scheduler/blob/master/docs/interview-form.png)

## Dependencies 
- Axios 
- Classnames
- Normalize.css
- React 
- React-scripts
- React-dom

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

