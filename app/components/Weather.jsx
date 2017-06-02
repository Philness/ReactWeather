var React = require("react");
var Form = require("Form");  //to pull data from <Form>, through ".handleSearch"
var Message = require("Message");  //to pass the data into <Message>
var openWeatherMap = require("openWeatherMap");  //".handleSearch" uses this to yank data from the weather api
var ErrorModal = require("ErrorModal");


//The weather component will load by default when you fire up the "/" route
//This is going to contain the state for the children <Form> and <Message>.

//The Form will pass data here when it's submitted,
//This component <Weather> will make the api call,
    //It will use <openWeatherMap>'s ".getTemp" method to do that.
//then pass the result down to <Message>, which will display the temperature on the page.
var Weather = React.createClass({

    handleSearch: function(location){
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
    });
        var that = this;  //"that" is going to refer to "this" in the Weather module context so we can call functions on it when we're in the quagmire.
//debugger;
        openWeatherMap.getTemp(location).then(function(temp){  //pulls the getTemp method from <openWeatherMap> module, passes in the location
            that.setState({  //if you used "this" in this context, it would refer to the openWeatherMap module
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage){  //Alert the error message if you're unable to set state for some reason.
            that.setState({
                errorMessage: errorMessage.message,
                isLoading: false});
        });
    },

    getInitialState: function() {
        return{
            isLoading: false
        }
    },
    componentDidMount:function(){
        var location = this.props.location.query.location;
        if(location && location.length>0){
            this.handleSearch(location);
            window.location.hash = "#/"
        }
    },
    componentWillReceiveProps:function(newProps){
         var location = newProps.location.query.location;
        if(location && location.length>0){
            this.handleSearch(location);
            window.location.hash = "#/"       
    }
},
    render: function(){
        var {location, temp, isLoading, errorMessage} = this.state;  //This looks at the state and creates variables based on that; those variables are passed to the module <Message>
        function renderMessage(){
            if (isLoading){
                return <h3>Now loading...</h3>;
            } else if(temp && location){
                return <Message location = {location} temp = {temp}/>;
            }
        }
        function renderError(){
            if (typeof errorMessage==='string'){return <ErrorModal message = {errorMessage} />}
        }
        return(
            <div>
            <h1 className = "text-center page-title">THE WEATHER!</h1>
            <Form onSearch={this.handleSearch}/>
            {/*<Message location = {location} temp = {temp}/>*/}
            {renderMessage()}
            {renderError()}
            </div>
        );

    }
});



module.exports = Weather;