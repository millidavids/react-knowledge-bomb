'use strict';

var FaceGrid = React.createClass({
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
      rows.push(<FaceRow key={i.toString()} data={rowData}/>);
      var face_desc = i.toString() + 'description';
      rows.push(<FaceDescriptionRow key={face_desc}/>);
    }
    return (
      <div className='faceGrid'>
        {rows}
      </div>
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

var FaceRow = React.createClass({
  render: function() {
    var faces = [];
    for (var i = 0; i < this.props.data.length; i++) {
      var face = this.props.data[i];
      faces.push(<Face key={face['name'] + i.toString()} data={face} />);
    }
    return (
      <div className='faceRow'>
        {faces}
      </div>
    );
  }
});

var FaceDescriptionRow = React.createClass({
  render: function() {
    return (
      <div className='faceDescriptionRow'>
      </div>
    );
  }
});

var Face = React.createClass({
  render: function() {
    return (
      <div className='face'>
        <img src='responsive-table/assets/images/smiley-face-th.png'></img>
      </div>
    );
  }
});

var FaceDescription = React.createClass({
  render: function() {
    return (
      <div className='faceDescription'>
      </div>
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
  <FaceGrid data={faces}/>,
  document.body
);
