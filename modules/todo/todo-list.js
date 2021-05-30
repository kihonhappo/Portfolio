import Bugger from '/components/bugger.js';
import todo_item from './todo-item.js';

//alert('todo list');
//const todo_obj = 
const item_todo = new todo_item();
const debug = new Bugger();
export default class todoList {
    constructor() {
        this.debug = debug,
        this.todo_obj = {
            config: {
                debug: false
            },
            next_id: 0,
            items: []
        },
        this.todo_obj_test = {
            config: {
                debug: false
            },
            next_id: 4,
            items: [
                {id: 0,title: "Advanced CSS: SVG Cards Assignent",parent: '',created: '5/23/2021',"status":'Not Started',start_date: '',completed_date: '',projected_hours: 0,actual_hours: 0, work_events: []},
                {id: 1,title: "Advanced CSS: Read Ch. 8",parent: '',created: '5/23/2021',"status":'Completed',start_date: '5/23/2021',completed_date: '5/26/2021',projected_hours: 1.5,actual_hours: 2, work_events: []},
                {id: 2,title: "Advanced CSS: Create Walkthrough",parent: '',created: '5/23/2021',"status":'Not Started',start_date: '',completed_date: '',projected_hours: 0,actual_hours: 0, work_events: []},
                {id: 3,title: "Complete Web Front End Midterm: Todo List App",parent: '',created: '5/16/2021',"status":'Started',start_date: '5/18/2021',completed_date: '',projected_hours: 0,actual_hours: 0, 
                    work_events: [
                        {event_date: '5/18/2021',duration: '3:30:00',work: 'Research todo list tutorials',journal: 'I think I will go with a clean look and try not to over complicate the applicaiton.'},
                        {event_date: '5/20/2021',duration: '1:30:00',work: 'I created the todo.html page, main.js, todo-list.js, todo-item.js and todo.css files and the todo module directory and started testing code and css.',journal: 'I think I will go with a clean look and try not to over complicate the applicaiton.'},
                        {event_date: '5/21/2021',duration: '3:30:00',work: 'Research todo list tutorials',journal: 'I think I will go with a clean look and try not to over complicate the applicaiton.'},

                    ]
                }
            ]
        },

        this.input = `
        <section class="todo-wrapper">
            <header>
                <h2 class="todo-title">
                    <span class="title-txt">Midterm: Todo List</span>
                    <span title="Configure Control Options" class="config"><i class="fa fa-cog"></i></span>
                </h2>
            </header>
            <div class="config-cont hide">
                <ul class="todo-list">
                    <li class="todo-item">
                        <input id="check_debug" type="checkbox" name="config" value="0" />
                        <label></label>
                        <span class="todo-text">Debug</span>
                    </li>
                </ul>
            </div>
            <div class="input-cont">
                <input type="text" id="item-input" tabindex="0" class="input-todo" placeholder="Keydown">
                <div role="button" id="addItem" class="btn btn-add">
                    +
                </div>
            </div>
            <div class="active-todo">
                <p class="status busy">You have <span id="active-cnt">${this.getCnt('Active')}</span> pending item<span>${this.plural('Active')}</span></p>
                <div class="todo-container">
                    <ul id="active-items" class="todo-list items">

                    </ul>
                </div>
            </div>
            <div class="completed-todo">
                <p class="status busy">You have  <span id="completed-cnt">${this.getCnt('Completed')}</span> completed item<span>${this.plural('Completed')}</span></p>
                <div class="todo-container">
                    <ul id="completed-items" class="todo-list items">

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
        //alert(this.todo_obj.items.length);
        this.app = document.getElementById(ele);
        this.app.innerHTML = this.input;
        let vi = this;
        this.debug.showDebug(true);
        const config_cont = document.querySelector('.config-cont');
        this.check_debug = document.getElementById('check_debug');
        this.check_debug.addEventListener('change', function(event){
            let ck_bx = event.target;
            let list = vi.getList(); 
            //alert(ck_bx.checked);
            if(ck_bx.checked == true){
                list.config.debug = true;       
            }
            else{
                list.config.debug = false; 
            }
            vi.saveList(list);
            
        });

        this.active_cnt = document.getElementById('active-cnt');
        this.completed_cnt = document.getElementById('completed-cnt');
        this.loadItems();
        this.config_btn = document.querySelector('.config');
        this.config_btn.addEventListener('click', function(event){
            event.preventDefault();
            let config = document.querySelector('.config-cont');
            config.classList.toggle('hide');
        });
        this.show_hide = document.getElementById('show-hide-tasks');
        this.show_hide.addEventListener('click', function(event){
            event.preventDefault();
            let completed = document.querySelector('.completed-todo').classList.toggle('hide');
            //let active = document.querySelector('.active-todo').classList.toggle('hide');
            let show = document.getElementById('show');
            let hide = document.getElementById('hide');
            show.classList.toggle('hide');
            hide.classList.toggle('hide');
        });
        
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
                vi.debug.changeBuggerTitle('Todo Item Attributes'); 
                vi.debug.loadBugger('TagName: ' + ele.tagName + ' ClassList: ' + ele.classList);
                if(ele.classList.contains('delete')){
                    let del = ele;
                    let id = del.id.split('_')[1];
                    vi.deleteItem(id);
                }
               // else if(ele.classList.contains('todo-text')){
                    //let edit = document.querySelector('.todo-text');
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
        let newTodo = {};
        newTodo.id = list.next_id ;
        newTodo.title = item;
        newTodo.parent = '';
        newTodo.created = new Date();
        newTodo.status = 'Not Started';
        newTodo.start_date = '';
        newTodo.completed_date = '';
        newTodo.projected_hours = 0
        newTodo.actual_hours = 0;
        newTodo.work_events = [];
        list.next_id += 1;
        if(list == undefined){
           // alert('Undefined');
            list = this.todo_obj;
            list.items.push(newTodo);
            this.saveList(list);
        }
        else{
            list.items.push(newTodo);
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
        localStorage.setItem("todo_list", JSON.stringify(list));
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
        let list = localStorage.getItem("todo_list");
        if(list){
            list = JSON.parse(list);
        }
        else{
            list = this.todo_obj;
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
    loadItems(){
        let list = this.getList();
        let active_ul = document.getElementById('active-items');
        let completed_ul = document.getElementById('completed-items');
        let active_li = '';
        let completed_li = '';
        list.items.forEach(function(item){
            if(item.status == 'Completed'){
                completed_li += item_todo.createItem(item);
            }
            else{
                active_li += item_todo.createItem(item);
            }
            
        });
        active_ul.innerHTML = active_li;
        completed_ul.innerHTML = completed_li;
        if(list.config.debug == true){
            document.querySelector('.debug-cont').classList.remove('hide');
            //this.debug.changeBuggerTitle('Tod Do List');
            //this.debug.loadBugger(JSON.stringify(list));
            this.check_debug.checked = 'checked';
        }
        else{
            document.querySelector('.debug-cont').classList.add('hide');
            this.check_debug.checked = '';
        }
        this.active_cnt.textContent = this.getCnt('active');
        this.completed_cnt.textContent = this.getCnt('Completed');
        
    }
    debugList(){

    }

}