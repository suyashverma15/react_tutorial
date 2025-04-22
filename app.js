const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Hello World from react!!");

// nested element is created     

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)