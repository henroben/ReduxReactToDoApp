var $ = require('jQuery');

module.exports = {
    setToDos: function(todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getToDos: function() {
        var stringToDos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringToDos);
        } catch (e) {

        }

        //if($.isArray(todos)) {
        //    return todos;
        //} else {
        //    return [];
        //}

        return $.isArray(todos) ? todos : [];
    },
    filterToDos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // filter by show completed
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // filter by search text
        filteredTodos = filteredTodos.filter((todo) => {
            var lowercaseText = todo.text.toLowerCase();

            return searchText.length === 0 || lowercaseText.indexOf(searchText) != -1;

        });

        // sort with non-completed first
        filteredTodos.sort((a, b) => {
            if(!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};