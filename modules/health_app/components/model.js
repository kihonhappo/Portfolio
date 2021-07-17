
import Person from '../objects/person.js';
export default class model{
    constructor(){
        this.person = new Person();
       // alert('model');
    }

    getJSON(url){
        fetch(url)
        .then(response => response.json())
        .then(result => {
            //alert('Model: Sub End Points: after fetch' + JSON.stringify(result));
            /*vi.debugger.changeBuggerTitle('getApi: sub-end-point: ' + vi.selected_api.name);
            vi.debugger.loadBugger(JSON.stringify(result));*/
            vi.selected_api.subEndPoints = result;
            
            view.loadSubEndPoints(vi.selected_api, result);
        }); 
    }
    checkProfile(){

        return this.getLocalStorage('profile');
    }
    save(){

    }
    getLocalStorage(name){

        return localStorage.getItem(name);
    }
    getPerson(){
        return this.person;
    }
    
}