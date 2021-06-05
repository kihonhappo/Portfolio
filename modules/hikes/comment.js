


//alert('todo item');
export default class comment {
    
    constructor() {
        
        
    }
    createItem(item){
        
        this.css = '';
        
        this.comment = `
            <li data-id="${item.id}" class="todo-item">
                <label></label>
                <span id="edit_${item.id}" class="todo-text${this.css}">${item.comment}
                </span>
                <span id="delete_${item.id}" class="delete"></span>
            </li>
         `
        return this.comment;
    }
    delete(){
        alert('delete');
    }


}
      