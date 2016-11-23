import React from 'react';
import {connect} from 'react-redux';
import {ListGroup} from 'react-bootstrap';
import ToDo from 'ToDo';
import ToDoAPI from 'ToDoAPI';

export class ToDoList extends React.Component {
    render() {
        var {todos, showCompleted, searchText} = this.props;
        var renderToDos = () => {
            var filteredTodos = ToDoAPI.filterToDos(todos, showCompleted, searchText);
            if(filteredTodos.length === 0) {
                return (
                    <p className="container__message">Nothing to Do</p>
                );
            }
            return filteredTodos.map((todo) => {
                return (
                    <ToDo key={todo.id} {...todo}/>
                );
            });
        };
        return (
            <div>
                <ListGroup>
                    {renderToDos()}
                </ListGroup>
            </div>
        );
    }
};

export default connect(
    (state) => {
        return state;
    }
)(ToDoList);