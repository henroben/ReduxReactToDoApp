var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'test'
            };
            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'test'
            };
            var res = reducers.searchTextReducer('', action);

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todo: {
                    id: 'abc123',
                    text: 'something to do',
                    completed: false,
                    createdAt: 936524
                }
            };
            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should toggle todo', () => {
            var todoData = {
                id: 11,
                text: 'Test features',
                completed: false,
                createdAt: 0,
                completedAt: undefined
            };
            var action = {
                type: 'TOGGLE_TODO',
                id: 11
            };
            var res = reducers.todosReducer(df([todoData]), df(action));

            expect(res[0].completed).toBe(true);
            expect(res[0].completedAt).toBeA('number');
        });

        it('should add existing todos', () => {
            var todos = [{
                id: 111,
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];
            var action = {
                type: 'ADD_TODOS',
                todos
            };
            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
    });
});