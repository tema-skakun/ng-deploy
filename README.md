## About

In this project I implemented a small application.
The backend is written in Typescript.
The frontend is written in Typescript, HTML and CSS languages and the Angular framework.
To implement the display of charts, I used the ngx-echarts library.

When editing and saving JSON, the diagram is updated automatically in real time.
To solve this problem I used Observable from the RxJS library.
I have created a getChartData() method in the backend.service.ts file.
This method uses HttpClient to make a GET request to the backend using the backendUrl.
The method returns a data stream of type ChartData[].

I also implemented data filtering methods.

You can see how the application works by following this [link](https://tema-skakun.github.io/ts-frontend/).

## Backend launch
Go to the directory with the backend
```
cd ts-backend
```
Install dependencies
```
npm install
```
Compile TypeScript to JavaScript and run the backend server
```
npx tsc && node ./dist/app.js
```
## Frontend launch
Go to the directory with the frontend
```
cd ts-frontend
```
Install dependencies
```
npm install
```
Start the frontend server
```
ng serve
```
