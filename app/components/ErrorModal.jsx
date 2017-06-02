var React = require("react");
var ReactDOM = require("react-dom");
var ReactDOMServer = require("react-dom/server");

var ErrorModal = React.createClass({
   
    getDefaultProps:function(){
        return{
        title:"You Broke it!"
        };
    },
     propTypes:{ //define what types the props are
        title:React.PropTypes.string,
        message:React.PropTypes.string.isRequired
    },
    componentDidMount:function(){
        var {title,message} = this.props;
        var modalMarkup = (
            <div id = "error-modal" className="reveal tiny text-center" data-reveal ="">
              <h4>{title}</h4>
              <p className="lead">{message}</p>
              <p> <button className="button hollow expanded" data-close = "">...Fine.</button></p>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalMarkup)); //changes your markup to a form usable by jquery
        $(ReactDOM.findDOMNode(this)).html($modal); //uses jquery to change the modal message to whatever the modal markup is

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();

    },
    render:function(){
       
//render nothing to the dom, but leave this as a placeholder so we can change it with jquery
        return(
            <div>
            </div>
        )

    }

});


module.exports = ErrorModal;