'use strict';

var FaceGrid = React.createClass({displayName: "FaceGrid",
  render: function() {
    var rows = [];
    var rowNumber = Math.ceil(this.props.data.length / this.state.rowItems);
    for (var i = 0; i < rowNumber; i++) {
      var dataIndices;
      if (i === (rowNumber - 1)) {
        dataIndices = [this.state.rowItems*i, this.props.data.length];
      } else {
        dataIndices = [this.state.rowItems*i, this.state.rowItems*(i+1)];
      }
      var rowData = this.props.data.slice(dataIndices[0], dataIndices[1]);
      rows.push(React.createElement(FaceRow, {key: i.toString(), data: rowData}));
      var face_desc = i.toString() + 'description';
      rows.push(React.createElement(FaceDescriptionRow, {key: face_desc}));
    }
    return (
      React.createElement("div", {className: "faceGrid"}, 
        rows
      )
    );
  },
  updateRowDimensions: function() {
    this.setState({rowItems: Math.ceil($(window).width() / 180)});
  },
  getInitialState: function() {
    return({rowItems: Math.ceil($(window).width() / 180)});
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
    var dataArray = this.props.data
    for (var i = 0; i < dataArray.length; i++) {
      var face = dataArray[i];
      faces.push(React.createElement(Face, {key: face['name'] + i.toString(), data: face}));
    }
    return (
      React.createElement("div", {className: "faceRow"}, 
        faces
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
      React.createElement("div", {className: "face"}, 
        React.createElement("img", {src: "app/assets/images/smiley-face-th.png"})
      )
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
  {name: 'David'}, {name: 'David'}, {name: 'David'}, {name: 'David'},
  {name: 'David'}, {name: 'David'}, {name: 'David'}, {name: 'David'},
  {name: 'David'}, {name: 'David'}, {name: 'David'}, {name: 'David'},
  {name: 'David'}, {name: 'David'}, {name: 'David'}, {name: 'David'},
  {name: 'David'}, {name: 'David'}, {name: 'David'}, {name: 'David'},
  {name: 'David'}, {name: 'David'}, {name: 'David'}, {name: 'David'}
]

React.render(
  React.createElement(FaceGrid, {data: faces}),
  document.body
);
