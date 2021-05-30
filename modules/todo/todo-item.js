


//alert('todo item');
export default class todo_item {
    
    constructor() {
        
        
    }
    createItem(item){
        this.checked = false;
        this.css = '';
        switch(item.status){
            case 'Started':

                break;
            case 'Completed':
                this.checked = 'checked';
                this.css = 'completed';
                break;
        }
        this.todo = `
            <li data-id="${item.id}" class="todo-item">
                <input id="check_${item.id}" ${this.checked} class="todo-checkbox check-item" type="checkbox">
                <label></label>
                <span id="edit_${item.id}" class="todo-text ${this.css}">${item.title}
                </span>
                <span id="delete_${item.id}" class="delete"></span>
            </li>
         `
        return this.todo;
    }
    delete(){
        alert('delete');
    }


}
      