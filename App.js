{
  /* <div>
  <div>
    <h1></h1>
  </div>
</div> */
}

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement(
        "h1",
        {
          id: "child",
        },
        "namaste react"
      ),
      React.createElement(
        "h1",
        {
          id: "child",
        },
        "namaste react"
      ),
    ]
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
