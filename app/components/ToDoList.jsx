var React = require('react');
var {connect} = require('react-redux');
var {ListGroup} = require('react-bootstrap');
import ToDo from 'ToDo';
var ToDoAPI = require('ToDoAPI');

export var ToDoList = React.createClass({
    render: function () {
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
});

export default connect(
    (state) => {
        return state;
    }
)(ToDoList);