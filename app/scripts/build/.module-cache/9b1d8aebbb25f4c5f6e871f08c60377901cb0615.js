var FaceGrid = React.createClass({displayName: "FaceGrid",
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
      rows.push(React.createElement(FaceRow, {key: i.toString(), data: row_data}));
      var face_desc = i.toString() + "description";
      rows.push(React.createElement(FaceDescriptionRow, {key: face_desc}));
    }
    return (
      React.createElement("div", {className: "faceGrid"}, 
        rows
      )
    );
  },
  updateRowDimensions: function() {
    this.setState({row_items: Math.ceil($(window).width() / 180)});
  },
  getInitialState: function() {
    return({row_items: Math.floor($(window).width() / 180)});
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

var FaceRow = React.createClass({displayName: "FaceRow",
  render: function() {
    var faces = [];
    for (face in this.props.data) {
      faces.push(React.createElement(Face, {data: face}))
    }
    return (
      React.createElement("div", {className: "faceRow"}
      )
    );
  }
});

var FaceDescriptionRow = React.createClass({displayName: "FaceDescriptionRow",
  render: function() {
    return (
      React.createElement("div", {className: "faceDescriptionRow"}
      )
    );
  }
});

var Face = React.createClass({displayName: "Face",
  render: function() {
    return (
      React.createElement("h1", null, this.props.data["name"])
    );
  }
});

var FaceDescription = React.createClass({displayName: "FaceDescription",
  render: function() {
    return (
      React.createElement("div", {className: "faceDescription"}
      )
    );
  }
});

var faces = [
  {name: 'David', likes: 'computers, exercise'},
  {name: 'Mike', likes: 'coffee, IT'},
  {name: 'Will', likes: 'lunch, plaid'}
]

React.render(
  React.createElement(FaceGrid, {data: faces}),
  document.body
);
