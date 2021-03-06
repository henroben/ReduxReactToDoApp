var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import * as actions from 'actions';
import {ToDo} from 'ToDo';

describe('ToDo', () => {

    it('should exist', () => {
        expect(ToDo).toExist();
    });

    it('should dispatch TOGGLE_TODO action on click', () => {
        var todoData = {
            id: 199,
            text: 'Write todo.test.jsx test',
            completed: true
        };
        var action = actions.startToggleToDo(todoData.id, !todoData.completed);

        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<ToDo {...todoData} dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el.find('button')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });
});