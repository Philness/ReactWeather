var React = require("react");

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
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();

    },
    render:function(){
        var {title,message} = this.props;
        return(
            <div id = "error-modal" className="reveal tiny text-center" data-reveal ="">
              <h4>{title}</h4>
              <p className="lead">{message}</p>
              <p> <button className="button hollow expanded" data-close = "">...Fine.</button></p>
            </div>
        );
    }

});


module.exports = ErrorModal;