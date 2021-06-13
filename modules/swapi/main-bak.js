class Model{
    constructor(){
        this.list = [];
        this.detail = {};
        this.pagination = [];
        this.api_list = [
            {name: "SWAPI", url: "https://swapi.dev/api/", endPoints: []},
            {name: "POKEMON", url: "https://pokeapi.co/api/v2/", endPoints: []}
        ];
        this.selected_api = this.api_list[0];
        this.apiExt = '.json';
    }

    getAPI(api, view){
        if(api == 'start'){
            view.loadStart(this.api_list);
        }
        else{
            this.selected_api = this.api_list.filter(x => x.name.toLowerCase() == api.toLowerCase())[0];
            let url = this.selected_api.url;

            fetch(url)
            .then(response => response.json())
            .then(result => {
                //alert('in model: ' + JSON.stringify(result));
                
                view.displayResult(result);
            }); 
        }
        
    }
}

class View{
    constructor(){
    // The root element
    this.app = document.getElementById('app');

    

    // The title of the app
    this.title = this.createElement('h1')
    this.title.textContent = 'API Web Services';

    // The visual representation of the todo list
    this.apiList = this.createElement('select', 'api-list');
    
    // Append the title, form, and todo list to the app
    this.app.append(this.title, this.apiList);
  }
  
  loadStart(list){
    this.loadSelect(this.apiList, 'array_obj', list, 'name', 'url');
    this.apiList.addEventHandler('change', function(event){
        let sel = event.target;
        app.onApiChanged(sel.value);
    });
  }
  createNewApiList(){

  }
  loadSelect(ele, ele_type, list, key_term, val_term){
    let vi = this;
    switch(ele_type){
        case 'obj':
            if(list != undefined){
                let txt = '';
                let val = '';
                let option =  vi.createElement('option', 'list-item');
                Object.keys(list).forEach(function(key, index){
                    if(key_term == key){
                        option.textContent = list[key];
                    }
                    if(val_term == key){
                        option.value = list[key];
                    }
                });
                ele.options.add(option);
            }
            break;
        case 'array':

            break;
        case 'array_obj':
            if(list != undefined){
                list.forEach(function(item){
                    let txt = '';
                    let val = '';
                    let option =  vi.createElement('option', 'list-item');
                    Object.keys(item).forEach(function(key, index){
                        if(key_term == key){
                            option.textContent = item[key];
                        }
                        if(val_term == key){
                            option.value = item[key];
                        }
                    });
                    ele.options.add(option);
                });
                
            }
            break;
    }
        
  }
    displayResult(result){
        let vi = this;
        if(result != undefined){
            Object.keys(result).forEach(function(key, index){
                let option =  vi.createElement('option', 'list-item');
                option.value = result[key];
                option.textContent = key;
                vi.apiList.options.add(option);
        
            });
        }
    }
    createHandler(ele, event_type, func){
        switch(event_type){
            case 'change':
                ele.addEventHandler(event_type, func);
                break;
            case 'click':

                break;
        }
    }
    // Create an element with an optional CSS class
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    // Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }
}

class Controller{
    constructor(model, view) {
        this.model = model
        this.view = view
        // Display initial todos
       this.loadAPIS();
    }

    loadAPIS(){
        this.model.getAPI('start', this.view);
    }

    onApiChanged(api){
        this.model.getAPI(api, this.view);
    }
}

const app = new Controller(new Model(), new View());










 