var React = require("react");
var {Link, IndexLink} = require("react-router");  //You can create links with React.Link to stuff
//The nav stays where it is because it's always loaded into Main,
//But the links let you change the "this.props.children" component between weather and about


//The nav is going to be passed to main, which is going to be passed to the "/" route
/*var Nav = React.createClass({
    render: function(){
        return(
            <div>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather </IndexLink>
               <Link to="/about">About</Link>
               <Link to="/examples">Examples</Link>
            </div>
        );
    }
});*/

var Nav = (props) => (
            <div>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather </IndexLink>
               <Link to="/about">About</Link>
               <Link to="/examples">Examples</Link>
            </div>

)
module.exports = Nav;