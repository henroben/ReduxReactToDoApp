var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');  //ES6 method
//var Route = require('react-router').Route; // ES5 method - set up for each
var ToDoApp = require('ToDoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var ToDoAPI = require('ToDoAPI');

console.log(store);

store.subscribe(() => {
    var state = store.getState();

    console.log('New State', store);

    ToDoAPI.setToDos(state.todos);
});

var initialToDos = ToDoAPI.getToDos();
store.dispatch(actions.addToDos(initialToDos));

// Load foundation
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//load app styles
require('applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <ToDoApp/>
    </Provider>,
    document.getElementById('app')
);