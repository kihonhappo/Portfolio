
export default class Model{
    constructor(){
        this.parent = {};
        this.list = [];
        this.debug = true;
        this.debugger = {};
        this.detail = {};
        this.pagination = [];
        this.api_list = [
            {name: "SWAPI", url: "https://swapi.dev/api/", endPoints: []}
        ];
        this.selected_api = this.api_list[0];
        this.current_detail = {};
        this.apiExt = '.json';
        
    }

    getAPI(api_type, api, view){
        //alert('GetAPI: ' + api_type);
        if(api_type == 'start'){
            //alert('start');
            view.loadStart(this.api_list);

        }
        else if(api_type == 'sub-end-point'){
            //alert('model sub endpoints');
            //this.selected_api = this.api_list.filter(x => x.name.toLowerCase() == api.toLowerCase())[0];
            let url = api.url;
            //alert('Model: Sub End Points: before fetch ' + url);
            let vi = this;
            fetch(url)
            .then(response => response.json())
            .then(result => {
                //alert('Model: Sub End Points: after fetch' + JSON.stringify(result));
                vi.debugger.changeBuggerTitle('getApi: sub-end-point: ' + vi.selected_api.name);
                vi.debugger.loadBugger(JSON.stringify(result));
                vi.selected_api.subEndPoints = result;
                
                view.loadSubEndPoints(vi.selected_api, result);
            }); 
        }
        else{
            this.selected_api = this.api_list.filter(x => x.name.toLowerCase() == api.toLowerCase())[0];
            let url = this.selected_api.url;
           //alert('else');
            let vi = this;
            fetch(url)
            .then(response => response.json())
            .then(result => {
                //alert('in model: ' + JSON.stringify(result));
                vi.debugger.changeBuggerTitle('getApi: ' + vi.selected_api.name);
                vi.debugger.loadBugger(JSON.stringify(result));
                vi.selected_api.endPoints = result;
                
                view.loadEndPoints(vi.selected_api, result);
            }); 
        }
    }
    getEndPoint(api, view){
        let vi = this;
        fetch(api.url)
            .then(response => response.json())
            .then(result => {
                //alert('in model: ' + JSON.stringify(result));
                api.results = result;
                vi.selected_api.selected_endpoint = api;
                vi.debugger.changeBuggerTitle('getEndPoint: ' + api.name);
                vi.debugger.loadBugger(JSON.stringify(result));
                //vi.selected_api.endPoints = result;
                
                view.loadTable(vi.selected_api);
        }); 
    }
    getDetail(api, view){
        let vi = this;
        fetch(api)
            .then(response => response.json())
            .then(result => {
                alert('in model: ');
                api.results = result;
                vi.selected_api.selected_endpoint = api;
                vi.debugger.changeBuggerTitle('getDetail: ');
                vi.debugger.loadBugger(JSON.stringify(result));
                //vi.selected_api.endPoints = result;
                
                view.loadDetail(api);
        }); 
    }
}







 