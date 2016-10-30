import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCq4GX0R1MqUi9d7VY46zDjVn7UUxN8tlw",
        authDomain: "mercer-todo-app.firebaseapp.com",
        databaseURL: "https://mercer-todo-app.firebaseio.com",
        storageBucket: "mercer-todo-app.appspot.com",
        messagingSenderId: "961095309109"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;