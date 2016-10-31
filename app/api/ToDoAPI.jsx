var $ = require('jQuery');

module.exports = {
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