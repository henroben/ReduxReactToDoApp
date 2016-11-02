import React from 'react';
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');  //ES6 method
//var Route = require('react-router').Route; // ES5 method - set up for each

var actions = require('actions');
var store = require('configureStore').configure();

import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        hashHistory.push('/todos');
    } else {
        hashHistory.push('/');
    }
});

console.log(store);

store.dispatch(actions.startAddToDos());

// Load foundation
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//load app styles
require('applicationStyles');



ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);