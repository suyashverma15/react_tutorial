const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Hello World from react!!");

// nested element is created  
const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
    "div",
    {id: "child"},
    React.createElement("h1",{},"I am a h1 tag !!")
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)
