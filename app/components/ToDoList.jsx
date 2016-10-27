var React = require('react');
var {connect} = require('react-redux');
var {ListGroup} = require('react-bootstrap');
import ToDo from 'ToDo';
var ToDoAPI = require('ToDoAPI');

export var ToDoList = React.createClass({
    render: function () {
        var {todos, showCompleted, searchText} = this.props;
        var renderToDos = () => {
            if(todos.length === 0) {
                return (
                    <p className="container__message">Nothing to Do</p>
                );
            }
            return ToDoAPI.filterToDos(todos, showCompleted, searchText).map((todo) => {
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