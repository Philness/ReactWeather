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

var Nav = React.createClass({
    onSearch:function(e){
        e.preventDefault();
        alert("This nav isn't ready yet, sorries.")
    },

    render:function(){
       return(
        <div className ="top-bar">
            <div className = "top-bar-left">
                <ul className ="menu">
                    <li className ="menu-text">React Weather</li>
                    <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather </IndexLink></li>
                    <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link></li>
                    <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link></li>
                </ul>
            </div>
            <div className ="top-bar-right">
                <form onSubmit={this.onSearch}>
                    <ul className = "menu">
                        <li><input type = "search" placeholder = "search weather"/></li>
                        <li><input type = "submit" className = "button" value ="Do eeet!" /></li>
                    </ul>
                </form>
            </div>
    
        </div>          

        );
    }
});

module.exports = Nav;
/*
var old =   (<div>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather </IndexLink>
               <Link to="/about">About</Link>
               <Link to="/examples">Examples</Link>
            </div>);*/