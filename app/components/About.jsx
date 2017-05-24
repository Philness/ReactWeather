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
    <h3>About Component will go here...</h3>
);



module.exports = About;