import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCq4GX0R1MqUi9d7VY46zDjVn7UUxN8tlw",
    authDomain: "mercer-todo-app.firebaseapp.com",
    databaseURL: "https://mercer-todo-app.firebaseio.com",
    storageBucket: "mercer-todo-app.appspot.com",
    messagingSenderId: "961095309109"
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Ben',
        age: 42
    }
});

//firebaseRef.update({
//    isRunning: false,
//    'app/name': 'Todo Application'
//});

//firebaseRef.child('app').update({
//    name: 'Todo Application'
//}).then(() => {
//    console.log('updated');
//}, (e) => {
//    console.warn('error', e);
//});

//firebaseRef.update({
//    'app/name': 'Todo App',
//    'user/name': 'Nuno'
//});

//firebaseRef.child('app').update({
//    name: 'Todo App2'
//});
//firebaseRef.child('user').update({
//    name: 'Luke'
//});

// wipes entire database
//firebaseRef.remove();
// wipe specifics
//firebaseRef.child('app/name').remove();
//firebaseRef.child('app').update({
//    version: '2.0.0',
//    name: null
//});

//firebaseRef.child('user/age').remove();
//firebaseRef.update({
//    isRunning: null
//});

// get data
//firebaseRef.child('app').once('value').then((snapshot) => {
//    console.log('got entire database', snapshot.key, snapshot.val());
//}, (e) => {
//    console.warn('unable to fetch value', e);
//});

// listen for data changes
//var logData = (snapshot) => {
//    console.log('got value', snapshot.val());
//};
//firebaseRef.on('value', logData);
//
//// remove all listeners
//firebaseRef.off();
//// remove specific listener
//firebaseRef.off(logData);
//
//firebaseRef.update({isRunning: false});

//var logData = (snapshot) => {
//    console.log('got value', snapshot.val());
//};
//firebaseRef.child('user').on('value', logData);
//firebaseRef.child('user').update({name: 'nuno'});
//firebaseRef.child('app').update({name: 'Todo App 3'});

// Arrays

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
    console.log('child added', snapshot.key, snapshot.val());
});
notesRef.on('child_changed', (snapshot) => {
    console.log('child changed', snapshot.key, snapshot.val());
});
notesRef.on('child_removed', (snapshot) => {
    console.log('child removed', snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push({
    text: 'walk the dog!'
});
console.log('Todo id', newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot)=> {
    console.log('todo added', snapshot.key, snapshot.val());
});
todosRef.on('child_changed', (snapshot)=> {
    console.log('todo changed', snapshot.key, snapshot.val());
});
todosRef.on('child_removed', (snapshot)=> {
    console.log('todo removed', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Stop and smell the roses...'
});
todosRef.push({
    text: 'Go food shopping'
});