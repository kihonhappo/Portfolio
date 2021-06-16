
export default class Controller{
    constructor(debug, model, view) {
        this.model = model;
        this.view = view;
        this.debug = false;
        this.debugger = debug;
        this.model.parent = this;
        this.model.debugger = this.debugger;
        this.view.debugger = this.debugger;
        this.view.debug = this.debug;
        this.model.debug = this.debug;
        this.view.parent = this;
        // Display initial todos
        //if(this.debug == true){
            this.debugger.showDebug(this.debug);
        //}
        
        this.loadAPIS();
    }

    loadAPIS(){
        this.model.getAPI('start', 'start', this.view);
    }

    onApiChanged(api_type, api){
        //alert('onApiChange inside of Controller: ' + api);
        
        switch(api_type){
            case 'base-api':
            case 'end':
            case 'sub-end-point':
                //alert('Controller: Sub-end-points');
                this.model.getAPI(api_type, api, this.view);
                break;
            case 'end-point':
                this.model.getEndPoint(api, this.view);
                break;
        }
        
    }
    getDetail(api){
        //alert('controller get Details');
        this.model.getDetail(api, this.view);
    }
}












 