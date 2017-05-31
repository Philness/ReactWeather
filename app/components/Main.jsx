var React = require("react");
var Nav = require('Nav');

//Main gets passed to the "/" route in app.jsx
//the elements need a div wrapper, and you need this.props.children in order to display the Weather component


var Main = (props) => (
    <div>
        <Nav/>
        <div className = "row">
            
            <div className= "medium-6 large-4 columns small-centered">{props.children}</div>
            
        </div>
    </div>
);

module.exports = Main;