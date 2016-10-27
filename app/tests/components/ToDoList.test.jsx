var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');


import {configure} from 'configureStore';
import ConnectedToDoList, {ToDoList} from 'ToDoList';
import ConnectedToDo, {ToDo} from 'ToDo';

describe('ToDoList', () => {

    it('should exist', () => {
        expect(ToDoList).toExist();
    });

    it('should render one ToDo component for each todo item', () => {
        var todos =[
            {
                id: 1,
                text: 'Do something',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            },
            {
                id: 2,
                text: 'Do something else',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }
        ];
        var store = configure({
            todos
        });
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedToDoList/>
            </Provider>
        )
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoList)[0];
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedToDo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render empty message if no items', () => {
        var todos =[];
        var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});