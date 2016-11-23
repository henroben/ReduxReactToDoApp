var expect = require('expect');
var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
    it('should exist', () => {
        expect(ToDoAPI).toExist();
    });

    describe('filterToDos', () => {
        var todos = [
            {
                id: 1,
                text: 'some text',
                completed: true
            },
            {
                id: 2,
                text: 'other text',
                completed: false
            },
            {
                id: 3,
                text: 'some text',
                completed: true
            }
        ];

        it('should return all items if showCompleted is true', () => {
            var filteredTodos = ToDoAPI.filterToDos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('should only return uncompleted items if showCompleted is false', () => {
            var filteredTodos = ToDoAPI.filterToDos(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filteredTodos = ToDoAPI.filterToDos(todos, true, '');

            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should return all items when search text is empty', () => {
            var filteredTodos = ToDoAPI.filterToDos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('should return items that contain matching search text', () => {
            var filteredTodos = ToDoAPI.filterToDos(todos, false, 'other');

            expect(filteredTodos.length).toBe(1);
        });

        it('should return items that contain matching search text if upper case', () => {
            var filteredTodos = ToDoAPI.filterToDos(todos, false, 'Other');

            expect(filteredTodos.length).toBe(1);
        });

    });
});