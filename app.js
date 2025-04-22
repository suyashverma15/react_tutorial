// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello World from react!!");

<<<<<<< HEAD
// nested element is created 

const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1",{},"I am a h1 tag !!"),
         React.createElement("h2",{},"I am a h2 tag !!")   
        ])],
    [React.createElement(
        "div",
        {id: "child2"},
        [React.createElement("h1",{},"I am a h1 tag !!"),
         React.createElement("h2",{},"I am a h2 tag !!")   
        ])]    
);

// reduncing the code complexcity we use later jsx(JavaScript XML)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)
=======
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
>>>>>>> 50cf58322620f6f883b2ea3cfaa1daf7c220987f
