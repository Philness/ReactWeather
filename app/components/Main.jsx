var React = require("react");
var Nav = require('Nav');

//Main gets passed to the "/" route in app.jsx
//the elements need a div wrapper, and you need this.props.children in order to display the Weather component


var Main = (props) => (
    <div>
        <Nav/>
        {props.children}
    </div>
);

module.exports = Main;