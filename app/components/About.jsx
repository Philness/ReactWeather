var React = require("react");
var {Link} = require("react-router");

//Since this has no children, you don't need to use standard class definitions, just use a function

// var About = React.createClass({
//     render: function(){
//         return(
//             <h3>About Component will go here...</h3>

//         );

//     }
// });

var About = (props)=>(
    <div>
    <h1 className = "text-center page-title">About</h1>
    <div className = "callout primary">
        <p>This app is dedicated to Stack Overflow and my Chingu cohort, without whom none of this would have been possible.</p>
        <p><a href = "http://www.stackoverflow.com">Stack Overflow</a></p>
        <p><a href = "https://tropicalchancer.github.io/projectus/">Chingu Cohorts</a></p>
    </div>
    <p className = "text-center">Weather data brought to you by:  <a href = 'https://www.openweathermap.org'>OpenWeatherMap</a></p>
    </div>
);



module.exports = About;