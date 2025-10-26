import html from './app.html?raw';
import '../store/todo.store.js';
/**
 * 
 * @param {String} elementId 
 */

export const App = ( elementId )=> {

    //Cuando se llame la función app se llama esta función anónima autoejecutable
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app)
    })()

};