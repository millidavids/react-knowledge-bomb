var FaceGrid = React.createClass({
  render: function() {
    var max_row_items = Math.floor(window.innerWidth / 160);
    var rows_count = Math.ceil(this.props.faces.length / max_row_items);
    var rows = []
    for (var i=0; i < rows_count; i++) {
      var row_key = i.toString() + 'row'
      rows.push(<FaceRow key={row_key}/>);
      var row_description_key = i.toString() + 'description'
      rows.push(<FaceDescriptionRow key={row_description_key} />);
    }
    return (
      <div className="faceGrid">
        {rows}
      </div>
    );
  }
});

var FaceRow = React.createClass({
  render: function() {
    return (
      <div className="faceRow">
      </div>
    );
  }
});

var FaceDescriptionRow = React.createClass({
  render: function() {
    return (
      <div className="faceDescriptionRow">
      </div>
    );
  }
});

var Face = React.createClass({
  render: function() {
    return (
      <img className="face">
      </img>
    );
  }
});

var FaceDescription = React.createClass({
  render: function() {
    return (
      <div className="faceDescription">
      </div>
    );
  }
});

var faces = [
  {name: 'David', likes: 'computers, exercise'},
  {name: 'Mike', likes: 'coffee, IT'},
  {name: 'Will', likes: 'lunch, plaid'}
]

React.render(
  <FaceGrid faces={faces}/>,
  document.body
);
