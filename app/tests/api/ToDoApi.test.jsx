var expect = require('expect');
var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
    it('should exist', () => {
        expect(ToDoAPI).toExist();
    });

    describe('setToDos', () => {
        beforeEach(() => {
            localStorage.removeItem('todos');
        });

        it('should set valid todos array', () => {
            var todos = [{
                id: 23,
                text: 'Test all files',
                completed: false
            }];

            ToDoAPI.setToDos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var badTodos = {a: 'b'};

            ToDoAPI.setToDos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getToDos', () => {
        it('should return empty array for bad localStorage data', () => {
            var actualTodos = ToDoAPI.getToDos();

            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in localStorage', () => {
            var todos = [{
                id: 23,
                text: 'Test all files',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = ToDoAPI.getToDos();

            expect(actualTodos).toEqual(todos);
        });
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

    });
});