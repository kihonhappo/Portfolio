class Model{
    constructor(){
        this.list = [];
        this.detail = {};
        this.pagination = [];
        this.baseURL = "https://pokeapi.co/api/v2/";
        this.apiExt = '.json';
        this.endPoints = [
            {name: 'people', api: 'people'}
        ];
        //alert('in model: ');
    }

    getAPI(view){
        let url = this.baseURL;
        fetch(url)
        .then(response => response.json())
        .then(result => {
            //alert('in model: ' + JSON.stringify(result));
            view.displayResult(result);
        }); 
    }
}

class View{
    constructor(){
    // The root element
    this.app = document.getElementById('app');

    

    // The title of the app
    this.title = this.createElement('h1')
    this.title.textContent = 'API End Points';

    // The visual representation of the todo list
    this.apiList = this.createElement('select', 'api-list');

    // Append the title, form, and todo list to the app
    this.app.append(this.title, this.apiList);
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
       this.onApiChanged();
    }

    onApiChanged(){
        this.model.getAPI(this.view);
    }
}

const app = new Controller(new Model(), new View());

app.onApiChanged();








 