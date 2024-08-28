## Available Scripts

To run project go to project directory and run below command:

### `npm i`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

I have used React.js fremwork as frontend and Redux for data management.

the JSON i used to dunamically add widget is as below

jsonData = {
CSPM: [
{
widgetTitle:'',
widgetData:'',
isActive:true
}
],
CWPP: [
{
widgetTitle:'',
widgetData:'',
isActive:true
}
],
Image: [
{
widgetTitle:'',
widgetData:'',
isActive:true
}
],
Ticket: [
{
widgetTitle:'',
widgetData:'',
isActive:true
}
],
}

I am dynamically updating the array of every category and adding the widgets,also displaying only Active widget,can hide and show widget using checkBok in sidebar
