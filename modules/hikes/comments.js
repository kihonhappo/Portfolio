

const debug = '';//new Bugger();
export default class comments {
    constructor() {
        this.debug = debug,
        this.comments_obj = {
            list_name: '',
            next_id: 0,
            items: []
        },
        this.comment_obj_test = {
            config: {
                debug: false
            },
            next_id: 4,
            items: [
                {id: 0,comment: "It was super hard",created: '5/23/2021',hike:'',author: ''},
                {id: 1,comment: "It was super hard",created: '5/26/2021',hike:'',author: ''},
            ]
        },

        this.input = `
        <section class="comment-wrapper">
            <div class="input-cont">
                <input type="text" id="item-input" tabindex="0" class="input-comm" placeholder="Keydown">
                <div role="button" id="addItem" class="btn btn-add">
                    +
                </div>
            </div>
            <div class="active-comm">
                <p class="status busy">You have <span id="active-cnt">${this.getCnt()}</span> pending item<span>${this.plural()}</span></p>
                <div class="comm-container">
                    <ul id="active-items" class="comm-list items">

                    </ul>
                </div>
            </div>
            <div class="footer">
                <div class="control-buttons">
                    <div id="show-hide-tasks" class="btn btn-secondary">
                        <span id="show" class="hide">Show</span><span id="hide" class="">Hide</span> <span>Complete</span>
                    </div>
                    <div id="clearAll" class="btn btn-secondary">Clear Items</div>
                </div>
            </div>
        </section>
        
        `
        
    }
    mount(ele){
        //alert(this.comm_obj.items.length);
        this.app = document.getElementById(ele.imgSrc.split('.')[0] + '-comments');
        this.app.innerHTML = this.input;
        let vi = this;
        //this.debug.showDebug(true);
       
        this.active_cnt = document.getElementById('active-cnt');
        this.completed_cnt = document.getElementById('completed-cnt');
        this.loadItems();
        
        const addBtn = document.getElementById('addItem');
        addBtn.addEventListener('click', function(event){
            event.preventDefault();
           // alert('inside');
            
            vi.addItem(vi.newItem.value);
        });
        this.newItem = document.getElementById('item-input');
        this.newItem.addEventListener('keyup', function(event){
            if(event.target.value != ''){
                addBtn.classList.add('active');
            }
            else{
                addBtn.classList.remove('active');
            }
        });
        document.getElementById('clearAll').addEventListener('click', function(event){
            event.preventDefault();
            vi.clearList();
        });

        let cks = document.querySelectorAll('.items');
        cks.forEach(function(ck){
            ck.addEventListener('click', function(event){
                event.preventDefault();
                let parent = event.target.parentNode;
                let ele = event.target;
                //vi.debug.changeBuggerTitle('comm Item Attributes'); 
               // vi.debug.loadBugger('TagName: ' + ele.tagName + ' ClassList: ' + ele.classList);
                if(ele.classList.contains('delete')){
                    let del = ele;
                    let id = del.id.split('_')[1];
                    vi.deleteItem(id);
                }
               // else if(ele.classList.contains('comm-text')){
                    //let edit = document.querySelector('.comm-text');
                    //let id = edit.id.split('_')[1];
                   // vi.editItem(edit);
               //}
                else{
                    let ck_child = parent.querySelector('input[type="checkbox"]');
                    let id = ck_child.id.split('_')[1];
                    vi.changeItemStatus(id);
                }
              
            });
        });

       /* 
        dels.forEach(function(del){
            del.addEventListener('click', function(event){
                
            });
        });*/
    }
    deleteItem(id){
        //alert(id);
        let list = this.getList();
        list.items = list.items.filter(x => x.id != id);
        this.saveList(list);
    }
    editItem(edit){
        let id = edit.id.split('_')[1];
        edit.setAttribute("contenteditable", "true");

    }
    saveEditItem(){
        let list = this.getList();
        list.items = list.items.filter(x => x.id != id);
        this.saveList(list);
    }
    plural(status){
        let cnt = this.getCnt(status);
        let str = '';
        if(cnt > 1){
            str = 's';
        }
        
        return str;
    }
    addItem(item){
        let list = this.getList();
        this.newItem.value = '';
        let newcomm = {};
        newcomm.id = list.next_id ;
        newcomm.title = item;
        newcomm.parent = '';
        newcomm.created = new Date();
        newcomm.status = 'Not Started';
        newcomm.start_date = '';
        newcomm.completed_date = '';
        newcomm.projected_hours = 0
        newcomm.actual_hours = 0;
        newcomm.work_events = [];
        list.next_id += 1;
        if(list == undefined){
           // alert('Undefined');
            list = this.comments_obj;
            list.items.push(newcomm);
            this.saveList(list);
        }
        else{
            list.items.push(newcomm);
            this.saveList(list);
        }
        this.newItem.focus();
        this.active_cnt.textContent = this.getCnt('active');
        this.completed_cnt.textContent = this.getCnt('Completed');
    }
    showHideCompleted(){

    }
    createID(){
        let list = this.getList();
        list.next_id = list.next_id + 1;
        this.saveList(list);
        return list.next_id;
    }
    saveList(list){
        //alert('save');
        localStorage.setItem("hike_comments", JSON.stringify(list));
        this.loadItems();
    }
    getCnt(status){
        let list = this.getList();
        if(status == 'Completed'){
            list = list.items.filter(x => x.status == status);
        }
        else{
            list = list.items.filter(x => x.status != 'Completed');
        }
        return list.length;
    }
    getList(){
        let list = localStorage.getItem("hike_comments");
        if(list){
            list = JSON.parse(list);
        }
        else{
            list = this.comments_obj;
        } 
        return list;
    }
    clearList(){
        let list = this.getList();
        list.items = [];
        list.next_id = 0;
        localStorage.clear();
        this.newItem.value = '';
        this.saveList(list);
    }
    changeItemStatus(id){
        //alert(id);
        let list = this.getList();
        let item = list.items.filter(x => x.id == id)[0];
        if(item.status == 'Completed'){
            item.status = 'Active';
        }
        else{
            item.status = 'Completed';
        }
        
        //list.items[id].status = 'Completed';
        this.saveList(list);
    }
    loadItems(id, hike){
        let list = this.getList();
        let comment_ul = document.getElementById(id);
        
        let comment_li = '';
        
        list.items.forEach(function(item){
            if(item.hike == hike){
                completed_li += comm.createItem(item);
            }
        });
        comment_ul.innerHTML = active_li;
        completed_ul.innerHTML = completed_li;
        if(list.config.debug == true){
            //document.querySelector('.debug-cont').classList.remove('hide');
            //this.debug.changeBuggerTitle('Tod Do List');
            //this.debug.loadBugger(JSON.stringify(list));
            this.check_debug.checked = 'checked';
        }
        else{
            //document.querySelector('.debug-cont').classList.add('hide');
            this.check_debug.checked = '';
        }
        this.active_cnt.textContent = this.getCnt('active');
        this.completed_cnt.textContent = this.getCnt('Completed');
        
    }
    debugList(){

    }

}