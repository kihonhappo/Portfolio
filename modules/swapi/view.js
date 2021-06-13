

export default class View{
    constructor(){
        this.parent = {};
        this.debug = true;
        this.debugger = {};
        // The root element
        this.app = document.getElementById('app');

        this.selected_api = {};

        // The title of the app
        this.title = this.createElement('h1')
        this.title.textContent = 'API Web Services';

        // The API list
        this.apiList = this.createElement('select', 'api-list');

        this.baseURL_cont = this.createElement('div', 'drop-cont');

        this.baseURL_title = this.createElement('label', 'cont-label');
        this.baseURL_title.textContent = 'APIs';


        this.baseURL_cont.append(this.baseURL_title, this.apiList);
        this.api_cont = this.createElement('div', 'api-cont');
        // Append the title, form, and todo list to the app
        this.api_cont.append(this.title, this.baseURL_cont);

        // Create Base API Endpointes titel and list 
        this.endPoint_cont = this.createElement('div', 'drop-cont');

        this.endPoint_title = this.createElement('label', 'cont-label')
        this.endPoint_title.textContent = 'End Points';
        // The End Point list
        this.endPointsList = this.createElement('select', 'end-points');
        this.endPoint_cont.append(this.endPoint_title, this.endPointsList);
        this.api_cont.append(this.endPoint_cont);
        
        // Create Base API Endpointes titel and list 
        this.subEndPoints_cont = this.createElement('div', 'drop-cont');
        this.subEndPoints_cont.classList.add('hide');

        this.subEndPoints_title = this.createElement('label', 'cont-label')
        this.subEndPoints_title.textContent = 'Sub End Points';
        // The End Point list
        this.subEndPointsList = this.createElement('select', 'end-points');
        this.subEndPoints_cont.append(this.subEndPoints_title, this.subEndPointsList);
        this.api_cont.append(this.subEndPoints_cont);
        this.app.append(this.api_cont);
        // Build and add results table 
        this.table_cont = this.createElement('div', 'table-cont');
        this.table_title = this.createElement('h3', 'table-title');
        this.table_title.textContent = 'Results Table';
        this.table = this.createElement('table', 'results-table');
        this.table_cont.append(this.table_title, this.table);
        // Build and add the Pagination container
        this.page_cont = this.createElement('div', 'page-cont');
        this.pages = this.createElement('div', 'pages');
        this.page_cont.append(this.pages);
        this.table_cont.append(this.page_cont);
      
        this.app.append(this.table_cont);


        // Build and add the Details container
        this.details_cont = this.createElement('div', 'details-cont');
        this.details_cont.classList.add('hide');
        this.details_title = this.createElement('h3', 'details-title');

        this.details_title.textContent = 'Selected Details';
        this.details_back_btn = this.createElement('buttton', 'btn');
        this.details_back_btn.classList.add('btn-back');
        this.details_back_btn.textContent = 'Back';

        this.details = this.createElement('table', 'details-table');
        this.details_cont.append(this.details_back_btn, this.details_title, this.details);
        this.app.append(this.details_cont);

       //this.table.tr.td.addEventListener('click', )

    }
  
    loadStart(list){
        let vi = this;
        this.apiList.addEventListener('change', function(event){
            let sel = event.target;
            vi.parent.onApiChanged('base-api', sel.value);
            if(sel.value == 'SWAPI'){
                vi.subEndPoints_cont.classList.toggle('hide');
            }
            else{
                vi.subEndPoints_cont.classList.toggle('hide');
            }
        });
        let start_option = {start: false};
        this.loadSelect(this.apiList, 'array_obj', list, 'name', 'name', start_option);
        this.apiList.selectedIndex = 0;
        this.parent.onApiChanged('end', this.apiList.value);
        this.endPointsList.addEventListener('change', function(event){
            let sel = event.target;
            vi.debugger.changeBuggerTitle('View : end point change' + vi.selected_api.name);
            vi.debugger.loadBugger(JSON.stringify(vi.selectedIndex));
            let end_point = {name: sel.options[sel.selectedIndex].text, url: sel.value};
            if(vi.selected_api.name == 'POKEMON'){
                //alert('view: POKEMON: Endpoints');
                vi.parent.onApiChanged('sub-end-point', end_point);
            }
            else{
                vi.parent.onApiChanged('end-point', end_point);
            }
            
        });
        this.subEndPointsList.addEventListener('change', function(event){
            let sel = event.target;
            let end_point = {name: sel.options[sel.selectedIndex].text, url: sel.value};
            vi.debugger.changeBuggerTitle('View : sub end point change' + vi.selected_api.name);
            vi.debugger.loadBugger(JSON.stringify(vi.selectedIndex));
            vi.parent.onApiChanged('end-point', end_point);
        });

        
        //this.apiList.change();
        
    }
    createNewApiList(){

    }
    loadSelect(ele, ele_type, list, key_term, val_term, start_option){
        let vi = this;
        switch(ele_type){
            case 'obj':
                if(list != undefined){
                    let txt = '';
                    let val = '';
                    let option =  vi.createElement('option', 'list-item');
                    if(start_option){
                        if(start_option.start == true){

                        }
                    }
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
    loadSubEndPoints(api, result){
        let vi = this;
        //this.selected_api = api;
        
        this.subEndPointsList.options.length = 0;
        if(result != undefined){
            let list = result.results;
            list.forEach(function(item){
                let option = vi.createElement('option', 'list-item');
                option.value = item['url'];
                option.textContent = item['name'];
                vi.subEndPointsList.options.add(option);
            });
        }
    }
    loadEndPoints(api, result){
        let vi = this;
        this.selected_api = api;
        this.endPointsList.options.length = 0;
        if(result != undefined){
            Object.keys(result).forEach(function(key, index){
                let option =  vi.createElement('option', 'list-item');
                option.value = result[key];
                option.textContent = key;
                vi.endPointsList.options.add(option);
            
            });
        }
    }
    loadTable(api){
        
        let vi = this;
        vi.debugger.changeBuggerTitle('View loadTable: ' + api.selected_endpoint.name);
        vi.debugger.loadBugger(JSON.stringify(api.selected_endpoint));
        if(api.selected_endpoint.results != undefined){
            let list = api.selected_endpoint.results.results;
            //alert(list.length);
            // Clear table headers
            let table = document.querySelector('.results-table');
            let header_cols = list[0];
            let headers = '<thead><tr>';
            Object.keys(header_cols).forEach(function(key, index){
                headers += '<th>' + key + '</th>';
            });
            headers += '<tr></thead>';
            let cells = '<tbody>'; 
            list.forEach(function(item){
                let txt = '';
                let val = '';
                cells += '<tr>';
                Object.keys(item).forEach(function(key, index){
                    let txt = item[key];
                    
                   // if(txt.indexOf('http') > -1){
                      /*  let a = vi.createElement('a', 'row-link');
                        a.textContent = txt;
                        a.href = txt;
                        a.addEventListener('click', function(event){
                            event.preventDefault();
                            let a = event.target;
                            let api = a.href;
                            
                            vi.table_cont.classList.toggle('hide');
                            vi.details_cont.classList.toggle('hide');
                            vi.parent.getDetail(api);
                        });*/
                        cells += `<td>${txt}</td>`;
                   // }
                   // else{
                        //cells += '<td>' + txt + '</td>';
                   // }
                    
                    
                });
                cells += '</tr>';
            });
            cells += '</thead>';
            table.innerHTML = headers + cells;
            
        }
    }
    loadDetail(api){
        let vi = this;
        vi.debugger.changeBuggerTitle('View loadDetail: ');
        vi.debugger.loadBugger(JSON.stringify(api));
        if(api.results != undefined){
            let list = api.results;
            //alert(list.length);
            // Clear table headers
            let table = document.querySelector('.results-table');
            let header_cols = list[0];
            let headers = '<thead><tr>';
            Object.keys(header_cols).forEach(function(key, index){
                headers += '<th>' + key + '</th>';
            });
            headers += '<tr></thead>';
            let cells = '<tbody>'; 
            list.forEach(function(item){
                let txt = '';
                let val = '';
                cells += '<tr>';
                Object.keys(item).forEach(function(key, index){
                    let txt = item[key];
                    
                    if(txt.indexOf('http') > -1){
                        txt = '<a href="' + txt + '" class="row-link">' + txt + '</a>';
                    }
                    
                    cells += '<td>' + txt + '</td>';
                });
                cells += '</tr>';
            });
            cells += '</thead>';
            table.innerHTML = headers + cells;
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
        const element = document.createElement(tag);
        if (className){
            element.classList.add(className);
        } 
        return element;  
    }

    // Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
}












 