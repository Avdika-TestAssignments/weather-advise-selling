
# Main information

### Name

React weather advise selling

### Description

This is a simple application to see weather forecast

### Usage

Enter city name, to see what weather will be in the next 5 days and get advise to sell some goods in this city

## Project details and Assumptions

API selecting
For this project weatherbit.io API was chosen. This resource offers only 500 queries per day per user with a free subscription. There are resources with more extensive features but they all require a paid subscription. The free features, however, are often inconvenient and require you to write additional logical constructs. I felt this was unnecessary for a training and testing project and settled on weatherbit API

App logic
Enter a city, press search, get the weather for the next 5 days. The first day on the list, the current day. There was no specific indication from which day to start showing the weather, so it was decided by default to get the data for five days and display the result.
Depending on the sales logic, 2 other options are possible. The first is to start displaying from tomorrow. The second is to check the time of request, if the request came in the evening after 5, 6 or 7 o'clock then display the weather from tomorrow, if earlier, then from today.
In the case of the second option, it would be convenient to be able to show the weather for the current day by the hour. which would make it possible to make more accurate forecasts about the advisability of sales.

Advise logic
Overall, there is a large field for experimentation and the implementation of complex logical constructs based on analytical data. The first question would be: What data do we have? The advice will be influenced by data on product availability in a particular city or its surrounding cities, statistics on sales of similar products in the region, and whether there is a reference to the target audience, and so on.
In this case, in the lack of strict conditions, I made the following assumptions.
At first I thought of looking for the coldest/rainiest day and selling the product on those days. But I remembered that money has to work and if we miss the first 2 days of rain to sell the umbrella on the third, rainiest day, we lose 2 days of income.
So I settled on an option where the product is offered for sale on the first day that is suitable for that product.
The option of finding the rainiest/coldest day is suitable for implementing a more complex logic. For example, if it's raining for 3-4 days, and the highest sales rating for jackets is on the 3rd day, it means that people were freezing for 2 days beforehand. This in turn increases the risk of illness and you could try selling cold medicines, yummy tea kits or health insurance.
Tips are displayed according to the type of weather. In this project, I had a choice of about 10 types of rainy weather. And I chose "light rain" as the first rain to sell umbrellas (many people won't want to get even slightly wet). My choice was subjective and a business analyst should be consulted for more accurate predictions.
As a result, I have a check for the first rainy day, the first cold day and a check for terrible weather (snow with rain for example) when you will need both an umbrella and a jacket. Also in case of good weather on all 5 days I have added a message that you can try to sell a new product like sunglasses. Of course it is unlikely that the sales manager or whoever will be checking the weather will be making decisions about new products, but again since there is no information available, I assume that this may give the person an idea which he/she can implement or bring to the attention of management.

## Roadmap

 - Add settings for searching to make it possible to choose city from same name city list
 - Add button or another way to change amount of forecast days
 - Add more goods that could be sold
 - Update selling advise logic. Add additional conditions (for example: to sell PlayStation if there will be 5+ rain days or camping tent if sunny)
 - Add link to nearest store or internet store where customer could buy goods from adverting
 -

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project structure
```
├── src
│   ├── Components  # App Components
│   └── Config      # files-helpers, data configuration, constants, etc.
│   ├── Styles      # Styles for components
│   ├── Tests       # Tests for components and functions
│   ├── App.js      # Main app
├── public 					# static files, assets
│   ├── Icons       # Icons for weather
└── ...
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
