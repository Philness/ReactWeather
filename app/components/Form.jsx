var React = require("react");

var Form = React.createClass({
    //onFormSubmit is a built-in from react that does things when a form is submitted.
    //It requires an event argument.
    onFormSubmit: function(e){
        e.preventDefault();
        var location = this.refs.location.value;
        if (location.length !==0){
            this.refs.location.value = "";
            this.props.onSearch(location);  //this points to the parent at weather.jsx
        }
    },

    render: function(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input ref="location" type = "search" placeholder = "Enter City Name"></input>
                <button className = "button expanded hollow">SUBMIIIT!!</button>
            </form>
        );

    }
});



module.exports = Form;