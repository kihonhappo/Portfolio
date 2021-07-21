


export default class controller{
    constructor(root, model, view){
        this.root = root;
        this.model = model;
        this.view = view;
        this.person = {};
        
        this.start();
    }



    start(){
        //this.model.delete('person');
        this.person = JSON.parse(this.model.checkStorage('person'));
        let msg = '<span class="msg-cont red">Please Create Profile</span>';
        //alert(this.person);
        if(this.person == undefined || this.person == null){
            
            this.person = this.model.getPerson();
        }
        else{
            msg = '<span class="msg-cont green">Person Exists!</span>';
            
        }
        let ready = this.view.start(this);
        
        if(ready == true){
            this.view.loadMessage(msg);
            if(this.person.state == 'new'){
                this.view.loadPerson(this.person);
            }
            else{
                this.model.person = this.person;
                //this.view.loadMessage(msg);
                //console.log(this.person);
                this.view.loadBurnCounters(this.person.data.filter(x => x.name == 'BMR')[0].value);
                this.view.loadIcons();
                
                //this.view.loadPerson(this.person);
            }
            
        }
       //this.root.prepend(temp);
       /* 
       if(this.profile == undefined){

       }*/
    }

    resetFrm(event, id){
        
        event.preventDefault();
        let frm = document.getElementById(id);
        this.removeInvalids(frm);
        let data = frm.querySelectorAll('input[type=text],input[type=date],input[type=number],textarea,select,input[type=hidden]');
        data.forEach(function(ctrl){
            ctrl.value = '';
            ctrl.placeholder = '';
            ctrl.value = ctrl.getAttribute('default');
            if(ctrl.type.indexOf('select') > -1){
                ctrl.value = 'title';
            }
        });
        this.view.loadMessage(`<span class="msg-cont red">Complete the ${id} Form</span>`);
    }

    removeInvalids(frm){
        let invalids = frm.querySelectorAll('.red');
        invalids.forEach(function(red){
            red.remove();
        });
    }

    deleteItem(event, id){
        event.preventDefault();
        let msg = this.model.delete(id);
        this.view.loadMessage(msg);
    }

    submitFrm(event, id){
        event.preventDefault();
        let frm = document.getElementById(id);
        let data = frm.querySelectorAll('input[type=text],input[type=date],input[type=number],textarea,select,input[type=hidden]');
        this.removeInvalids(frm);
        data.forEach(function(ctrl){
            let lbl = ctrl.parentNode.querySelector('label');
            
            if(ctrl.required == true){
                //alert('name: ' + ctrl.name + ' type: ' + ctrl.type);
                let val = ctrl.value;
                let ctrl_type = ctrl.type;
                let tag = ctrl.tagName.toLowerCase();
                let attr_type = ctrl.getAttribute('type');
                if(tag.indexOf('select') > -1){
                    ctrl_type = 'select';
                }
                //alert('Ctrl_type: ' + ctrl_type + ' Attr type: ' + attr_type + ' TagName: ' + tag);
                switch(ctrl_type){
                    case 'number':
                       // alert(ctrl.name);
                        if(val == 0){
                            lbl.innerHTML = lbl.innerHTML + `<span class="red inline"> * Empty </span>`;
                            //lbl.classList.toggle('red');
                        }
                        break;
                    case 'text':
                        if(val == '' || val == undefined || val == null){
                            lbl.innerHTML = lbl.innerHTML + `<span class="red inline"> * Empty </span>`;
                            //ctrl.classList.toggle('red');
                        }
                        break;
                    case 'date':
                        //alert(lbl.innerHTML);
                        if(val == '' || val == undefined || val == null){
                            lbl.innerHTML = lbl.innerHTML + `<span class="red inline"> * Empty </span>`;
                            
                        }
                        break;
                    case 'select':
                        //alert(val);
                        if(val == 'title' || val == undefined || val == null){
                            lbl.innerHTML = lbl.innerHTML + `<span class="red inline"> * Empty </span>`;
                        }
                        
                        break;
                }
            }
        });

        let invalid = frm.querySelectorAll('.red');
        if(invalid.length > 0){
            let msg = '<span class="msg-cont red"> * Required Fields</span>';
            this.view.loadMessage(msg);
        }
        else{
                         
            let msg = this.model.save(frm);
            this.view.loadMessage(msg);
            this.view.loadIcons();
            //alert(this.view.checkStorage('person'));
        }
        
        //alert('submitFrm: ' + data.length);
    }
    toggleNav(nav) {
        //var updateElement = document.getElementById("menu-icon");
         //toggle adds a class if it's not there or removes it if it is.
         nav.classList.toggle("open");
     }  

}