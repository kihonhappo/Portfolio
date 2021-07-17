

export default class view{
    constructor(root){
        this.root = root;
        this.head = '';
        this.main = '';
        this.footer = '';
        this.msg = '';
    }
    start(){
        let temp = `
                <header id="head" class="head">
                    <h2>Health App</h2>
                    <h3 id="msg" class="msg">
                        Messages: 
                    </h3>
                </header>
                <main id="main" class="main">

                </main>
                <footer id="footer" class="footer">

                </footer>
        `;
        this.root.innerHTML = temp;
        this.head = document.getElementById('head');
        this.main = document.getElementById('main');
        this.footer = document.getElementById('footer');
        this.msg = document.getElementById('msg');
        return true;
    }
    loadMessage(str){
        this.innerHTML = str;
    }
    loadPerson(person){
        let demo = person.demographics;
        alert(demo.gender);
        this.main.innerHTML = this.formBuilder(demo);
    }
    formBuilder(obj){
        let frm = '<form>';
        Object.entries(obj).forEach(function(key, value){
            if(typeof value == 'object'){
               
            }   
            else{
                frm += `
                    <div class="controls">
                        <label>${key}</label>
                        <input type="text" class="form-control" value="${obj[key]}" />
                    </div>
                `;
            }
        });
        frm += `<div class="btn-group">
                    <button type="button" class="btn btn-submit">Submit</button>
                    <button type="reset" class="btn btn-reset">Reset</button>
                </div>
        `;
        frm += '</form>';
        return frm;
    }
}