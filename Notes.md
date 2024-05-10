 ```javascript
 <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World from JavaScript!";

        const root = document.getElementById("root");
        root.appendChild(heading);
</script>
```

```javascript
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

```HTML
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>
```
```javascript
ReactElement(Object) => HTML(Brower Understands)
```

```javascript
const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div",{id:"child"},
        [React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag")]),

        React.createElement("div",{id:"child2"},
        [React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag")])
    ]
)

// JSX

const heading = React.createElement(
    "h1",{id: "heading"},"Hello World from React!"
);

console.log(parent); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
```


* JSX - is not HTML is JS
* JSX - HTML-like or XML-like syntax

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React🧨"
);

console.log(heading);

// JSX - HTML-like or XML-like syntax

// JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel
const jsxHeading = <h1 className="head" tabIndex="1">Namaste React using JSX🧨</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading)
```

```
// React Component
// There is two way  to write component
// Class Based Component - OLD
// Functional Component - NEW
```

```javascript
// React Element
const Title=() =>(
  <h1 className="head" tabIndex="1">
    Namaste React using JSX🚀
  </h1>
);

const HeadingComponent = () =>(
  <div id="container">
      {Title()}
      <Title/>
      <Title></Title>
      <h1 className="heaiding">Namaste React Functional Component</h1>
  </div>
)

// React Functional Component

// Component Compositions
```

```
// not using keys (not acceptable) <<<< index as key <<<<<<<<<< unique id (best practice)

// whenever state variable update, react re-render components.


// Normal JS Variable
// let listOfRestaurants = [];
  
 