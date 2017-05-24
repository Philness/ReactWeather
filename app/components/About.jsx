var React = require("react");

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
    <h3>About</h3>
    <p>This app is dedicated to Stack Overflow and my Chingu cohort, without whom none of this would have been possible.</p>
    </div>
);



module.exports = About;