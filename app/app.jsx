/* eslint-disable */

/*
getDefaultProps: What are your defaults if no props are passed?
getInitialState: What do you want the user to be able to change?
onButtonClick: When, where, and how do you want to modify the state?
  setState() You can do it this way
render: How do you want it to look?  Where and how do you want the states to display?
ReactDOM.render(what are you rendering?  Where are you rendering it?)
*/
//start with require statements, we don't have react in the html script, since we aren't noobs
var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router")  //This is called "destructuring syntax"
var Main = require('Main');
var Weather = require('Weather');
var About = require("About");
var Examples = require("Examples");


ReactDOM.render(
    // What are you rendering?  Where are you rendering it?
    //Router takes one property, {hashHistory}.  Remember that it's in braces.
    //Route takes path and component, path tells you where to go to get it, component tells you what component to load in
    //IndexRoute takes component also, and loads in children of the route.
    //You have to go over to Main.jsx and add this.props.children into the render method to display the children.
    //IndexRoute seems to be a "render this unless I tell you to render something else" command.

    //This expression says to always render Main, which contains Nav as well,
    //But if the route also says about, then render About rather than Weather.
    //So weather will be passed in as "this.children.props" in Main.jsx until you specify a different route.
    //The default route should also use IndexRoute here, and IndexLink in the Nav.jsx
    <Router history = {hashHistory}>  
      <Route path = "/" component = {Main}>
        <Route path = "about" component = {About}/>
        <Route path = "examples" component = {Examples}/>
        <IndexRoute component = {Weather}/>
      </Route>
    </Router>, //You can autoclose this thing.
    document.getElementById("app")
  );
