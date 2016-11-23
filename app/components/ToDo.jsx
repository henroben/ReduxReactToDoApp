import React from 'react';
import {connect} from 'react-redux';
import {ListGroupItem} from 'react-bootstrap';
import moment from 'moment';

import * as actions from 'actions';

export class ToDo extends React.Component{
    render() {
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
};

export default connect()(ToDo);

//module.exports = connect()(ToDo);