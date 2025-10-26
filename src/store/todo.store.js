import { Todo } from "../models/todo.model";

const Filters = {
    All : 'all',
    Completed : 'completed',
    Pending : 'pending',
}

const state = {
    todos : [
        new Todo('Aprender JavaScript'),
        new Todo('Aprender Vue'),
        new Todo('Aprender Vite'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log('Initializing Store...');
    console.log('State:', state);
    console.log('Todos:', state.todos);
}

const addTodo = ( description ) => {
    if ( !description ) throw new Error('Description Required.');
    state.todos.push( new Todo(description) );
}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
}

const toggleTodo = ( todoId ) => {
    const todo = state.todos.find( todo => todo.id === todoId );
    if ( todo ) {
        todo.completed = !todo.completed;
    }
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => !todo.completed );
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

const getTodos = (filter = Filters.All) => {
    switch(filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.completed);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.completed);
        default:
            throw new Error(`Option ${ filter } is not valid.`);
    }
}

const loadStorage = () => {
    throw new Error('Function not implemented.');
}

const saveStorage = () => {
    throw new Error('Function not implemented.');
}

export default {
    initStore,
    addTodo,
    deleteTodo,
    toggleTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getTodos,
    loadStorage,
    saveStorage,
}