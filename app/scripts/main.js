var HelloBox = React.createClass({
  render: function() {
    return(
      <div className="helloBox">
        Hello, world!
      </div>
    );
  }
});

React.render(
  <HelloBox />,
  document.getElementById('content')
);
