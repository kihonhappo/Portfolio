import Counter from './counter.js';
import { BMR, BMI } from '../js/formulas.js';

const bmr = new BMR();
const bmi = new BMI();

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
                    <my-counter btn="false" title="Kal Burn Rate" rate="minute" sign="neg" inc="100"></my-counter>
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
    loadPerson(item){
        //let bio = person;
        //alert(demo.gender);
        this.main.innerHTML = this.formBuilder(item);
    }
    processKey(str){
        //alert(str);
        let test = 0;
        if(str.indexOf('_') > -1){
            str = str.split('_');
            let st = '';
            for(let i = 0; i < str.length; i++){
               str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            }
            str = str.join(' ');
        }
        else{ 
        
            str = str.charAt(0).toUpperCase() + str.slice(1);
        }
        //alert(str);
        return str;
    }
    getObjAttr(obj, field, filter, val){
        return obj.filter(x => x[field] == filter)[0][val];
    }
    formBuilder(obj){
        let frm = '<form class="input-frm">';
        let vi = this;
        let disabled = '';
        let required = '';
        
        obj.data.forEach(function(item){
            let source = item.source;
            let value = item.value;
            if(item.disabled == true){
                disabled = ' disabled="disabled" ';
            }
            else{
                disabled = '';
            }
            if(item.required == true){
                required = ' required="required" ';
            }
            if(source.includes(':')){
                source = source.split(':');
                switch(source[0]){
                    case 'auto':
                        switch(source[1]){
                            case 'timestamp':
                                value = Date.now();
                                break;
                            case 'now':
                                value = new Date().toLocaleDateString('en-US');
                                break;
                        }
                        break;
                    case 'user':
                        switch(source[1]){
                            case 'concat':
                                let concat = source[2].split('+');
                                for(let i = 0; i < concat.length; i++){
                                    switch(concat[i]){
                                        case 'timestamp':
                                            value += Date.now();
                                            break;
                                        default:
                                            let val = obj.data.filter(x => x.name == concat[i])[0];
                                            if(val == undefined){
                                                val = concat[i];
                                            }
                                            else{
                                                val = val.value;
                                            }
                                            value += val;
                                            break;
                                    }
                                }
                                break;
                            
                            case 'calc':
                                let func = source[2];
                                switch(func){
                                    case 'bmr':
                                        let dot = new Date(vi.getObjAttr(obj.data, 'name', 'DOB', 'value')).getFullYear();
                                        let gender = vi.getObjAttr(obj.data, 'name', 'Gender', 'value');
                                        let age = new Date().getFullYear() - dot;
                                        let wt = vi.getObjAttr(obj.data, 'name', 'Weight', 'value');
                                        let ht = vi.getObjAttr(obj.data, 'name', 'Height', 'value');
                                        let level = 'Sendentary';
                                        if(gender == undefined || age == undefined || wt == undefined || ht == undefined || level == undefined){
                                            
                                        }
                                        else{
                                            value = bmr.calc_bmr(gender, wt, ht, age, level);
                                        }
                                        
                                        break;
                                    case 'bmi':
                                        
                                        let bmi_wt = vi.getObjAttr(obj.data, 'name', 'Weight', 'value');
                                        let bmi_ht = vi.getObjAttr(obj.data, 'name', 'Height', 'value');
                                        if(bmi_wt == undefined || bmi_ht == undefined){
                                          
                                        }
                                        else{
                                            value = bmi.calc_bmi(bmi_wt, bmi_ht);
                                        }
                                        //value = bmi.calc_bmi();
                                        break;
                                    case 'age':
                                        let dob = new Date(vi.getObjAttr(obj.data, 'name', 'DOB', 'value')).getFullYear();
                                        let now = new Date().getFullYear() - dob;
                                        value = now;
                                        break;
                                }
                                break;
                        }
                }
            }
            switch(item.ctrl){
                case 'textbox':
                    frm += `
                        <div class="controls">
                            <label>${vi.processKey(item.label)}</label>
                            <input ${disabled} ${required} type="text" class="form-control" value="${value}" />
                        </div>
                    `;
                    break;
                case 'datepicker':
                    frm += `
                        <div class="controls">
                            <label>${vi.processKey(item.label)}</label>
                            <input ${disabled} ${required} type="text" class="form-control" value="${value}" />
                        </div>
                    `;
                    break;
                case 'hidden':
                    frm += `
                        <input type="hidden" value="${value}" />
                    `;
                    break;
                case 'select':

                    let options = `<option value="title">Choose ${item.name}</option>`;
                    obj[item.list].forEach(function(li){
                        if(value == li.value){
                            options += `
                                <option selected value="${li.value}">${li.text}</option>
                            `;
                        }
                        else{
                            options += `
                                <option value="${li.value}">${li.text}</option>
                            `;
                        }
                        
                    });
                    frm += `
                        <div class="controls">
                            <label>${vi.processKey(item.label)}</label>
                            <select ${disabled} ${required} class="form-control">
                                 ${options}
                            </select>
                        </div>
                    `;
                    break;
                default: 
                        frm += `
                        <div class="controls">
                            <label>default ${vi.processKey(item.label)}</label>
                            <input ${disabled} ${required} type="text" class="form-control" value="${value}" />
                        </div>
                    `;
                    break;
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