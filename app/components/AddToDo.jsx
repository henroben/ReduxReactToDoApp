var React = require('react');
var {connect} = require('react-redux');
var {Button} = require('react-bootstrap');
var actions = require('actions');

export var AddToDo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var strText = this.refs.addtext.value;

        if(strText.length > 0) {
            this.refs.addtext.value = '';
            dispatch(actions.startAddToDo(strText));
        } else {
            this.refs.addtext.focus();
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit} className="testForm">
                    <input type="text" ref="addtext" placeholder="What do you need to do?" className="form-control"/>
                    <Button type="submit" bsStyle="primary" block>Add</Button>
                </form>
            </div>
        );
    }
});

export default connect()(AddToDo);