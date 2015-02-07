var FaceGrid = React.createClass({
  render: function() {
    var rows = [];
    var row_number = Math.ceil(this.props.data.length / this.state.row_items);
    for (var i = 0; i < row_number; i++) {
      if (i === (row_number - 1)) {
        var data_indices = [this.state.row_items*i, this.props.data.length-1];
      } else {
        var data_indices = [this.state.row_items*i, this.state.row_items*(i+1)];
      }
      var row_data = this.props.data.slice(data_indices[0], data_indices[1]);
      rows.push(<FaceRow key={i.toString()} data={row_data}/>);
      var face_desc = i.toString() + "description";
      rows.push(<FaceDescriptionRow key={face_desc}/>);
    }
    return (
      <div className="faceGrid">
        {rows}
      </div>
    );
  },
  updateRowDimensions: function() {
    this.setState({row_items: Math.ceil($(window).width() / 180)});
  },
  getInitialState: function() {
    return({row_items: Math.ceil($(window).width() / 180)});
  },
  componentWillMount: function() {
    this.updateRowDimensions();
  },
  componentDidMount: function() {
    var grid = this
    $(window).resize(function() {
      grid.updateRowDimensions();
    });
  }
});

var FaceRow = React.createClass({
  render: function() {
    var faces = [];
    for (face in this.props.data) {
      faces.push(<Face data={face} />)
    }
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
      <h1>{this.props.data["name"]}</h1>
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
  <FaceGrid data={faces}/>,
  document.body
);
