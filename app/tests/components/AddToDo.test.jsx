var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import * as actions from 'actions';

var {AddToDo} = require('AddToDo');

describe('AddToDo', () => {

    it('should exist', () => {
        expect(AddToDo).toExist();
    });

    it('should dispatch AddToDo when valid todo text', () => {
        var todoText = 'Test input';
        var action = actions.startAddToDo(todoText);
        var spy = expect.createSpy();
        var addToDoForm = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addToDoForm));

        addToDoForm.refs.addtext.value = todoText;

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        var todoText = '';
        var spy = expect.createSpy();
        var addToDoForm = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addToDoForm));

        addToDoForm.refs.addtext.value = todoText;

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});