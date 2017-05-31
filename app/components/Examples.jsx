var React = require("react");
var {Link} = require("react-router");

// var Examples = React.createClass({
//     render: function(){
//         return(
//             <h3>Examples Component will go here...</h3>

//         );

//     }
// });

var Examples = (props) =>(
<div>
    <h1 className="text-center">Examples</h1>
    <ol>
        <li><Link to = "/?location=Raleigh">Raleigh, NC</Link></li>
        <li><Link to = "/?location=Bangor">Bangor, MA</Link></li>
    </ol>
</div>
);

module.exports = Examples;