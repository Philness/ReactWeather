var React = require("react");

// var Message = React.createClass({
//     render: function(){
//         var {location, temp} = this.props;
//         return(
//             <h4>It's a balmy {temp} degrees in {location}!</h4>
//         );

//     }
// });

var Message = ({temp,location}) =>{
    // var {location,temp} = props;            Replace this by putting the destructuring straight in the arguments rather than just props.
    return (<h4>It's a balmy {temp} degrees in {location}!</h4>);
}

module.exports = Message;