


export default class controller{
    constructor(root, model, view){
        this.root = root;
        this.model = model;
        this.view = view;
        this.profile = {};
        
        this.start();
    }

    start(){
        this.profile = this.model.checkProfile()
        let ready = this.view.start();
        let msg = 'No profile';
        if(ready == true){
            if(this.profile == undefined || this.profile == null){
                this.view.loadMessage(msg);
                let person = this.model.getPerson();
                this.view.loadPerson(person);
            }
            
        }
       //this.root.prepend(temp);
       /* 
       if(this.profile == undefined){

       }*/
    }

}