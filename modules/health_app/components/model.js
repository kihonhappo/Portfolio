
import Person from '../objects/person.js';
export default class model{
    constructor(){
        this.person = new Person();
        this.icons = [];
        this.fdc_api = {
            api_key: 'api_key=IyUO5cDK5RwaCKw2kbGw0UJmHbyFlFn1ejnKJFJd',
            base_url: 'https://api.nal.usda.gov/fdc',
            version: '/v1/',
            food: '',
            endpoints: {
                get: ['food/','foods','foods/list','foods/search','json-spec','ymal-spec'],
                post: ['foods','foods/list','foods/search']
            },
            example: 'https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=IyUO5cDK5RwaCKw2kbGw0UJmHbyFlFn1ejnKJFJd'
        }

        let api = this.fdc_api;
        this.getFoodCats = api.base_url + api.version + api.endpoints.get[2] + '?' + api.api_key; 
       // alert('model');
       this.fetchFood(this.getFoodCats);
    }

    async fetchFood(url){
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
    }

    getJSON(url){
        fetch(url)
        .then(response => response.json())
        .then(result => {
            //alert('Model: Sub End Points: after fetch' + JSON.stringify(result));
            /*vi.debugger.changeBuggerTitle('getApi: sub-end-point: ' + vi.selected_api.name);
            vi.debugger.loadBugger(JSON.stringify(result));*/
            //vi.selected_api.subEndPoints = result;
            
            //view.loadSubEndPoints(vi.selected_api, result);
        }); 
    }
    checkStorage(id){
        return this.getLocalStorage(id);
    }
    save(frm){
        let id = frm.id;
        switch(id){
            case 'person':
                this.person.state = 'active';
                this.person.data.forEach(function(item){
                    item.value = frm.querySelector('[name=' + item.name + ']').value;
                }); 
                break;
        }
        localStorage.setItem(id, JSON.stringify(this.person));
        return `<span class="green">${id} saved</span>`;
    }

    delete(id){
        localStorage.removeItem(id);
        return `<span class="green">Item deleted successfully</span>`;
    }

    getLocalStorage(name){

        return localStorage.getItem(name);
    }
    getPerson(){
        return this.person;
    }
    
}