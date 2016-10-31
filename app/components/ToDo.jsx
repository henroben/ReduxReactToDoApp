var React = require('react');
var {connect} = require('react-redux');
var {ListGroupItem} = require('react-bootstrap');
var moment = require('moment');
var actions = require('actions');

export var ToDo = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };

        return (
            <div>
                <ListGroupItem className={todoClassName} onClick={() => {
                    //this.props.onToggle(id);
                    dispatch(actions.startToggleToDo(id, !completed));
                }}>
                    <div className="col-md-1"><input type="checkbox" className="large" checked={completed}/></div>
                    <div className="col-md-11">
                        {text}<br />
                        <span className="small">{renderDate()}</span>
                    </div>
                </ListGroupItem>
            </div>
        );
    }
});

export default connect()(ToDo);

//module.exports = connect()(ToDo);