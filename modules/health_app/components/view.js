import Counter from './counter.js';
import { BMR, BMI } from '../js/formulas.js';

const bmr = new BMR();
const bmi = new BMI();

export default class view{
    constructor(root){
        this.parent = {};
        this.root = root;
        this.head = '';
        this.main = '';
        this.footer = '';
        this.msg = '';
        this.burn_counter = '';
    }
    start(parent){
        this.parent = parent;
        let temp = `
                <header id="head" class="head">
                    <h2>Health App</h2>
                    <div class="burn-down">
                        <my-counter type="custom" id="burn-down" btn="false" start="0" title="Burn Down" rate="sec" sign="neg" min="0" max="0" inc="0"></my-counter>
                    </div>
                    <div class="burn-up">
                        <my-counter type="custom" id="burn-up" btn="false" start="0" title="Burn Up" rate="sec" sign="pos" min="0" max="0" inc="0"></my-counter>
                    </div>
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
        this.burn_down = document.getElementById('burn-down');
        this.burn_up = document.getElementById('burn-up');
        return true;
    }
    loadMessage(str){
        this.msg.innerHTML = str;
    }
    loadPerson(item){
        this.main.innerHTML = this.formBuilder(item, 'person');
        let btn = document.querySelector('.btn-submit');
        let btn_delete = document.querySelector('.btn-delete');
        let reset = document.querySelector('.btn-reset');
        let dob = document.querySelector('[name=DOB]');
        let age = document.querySelector('[name=Age]');
        let ht = document.querySelector('[name=Height]');
        let wt = document.querySelector('[name=Weight]');
        let gender = document.querySelector('[name=Gender]');
        let bmr_box = document.querySelector('[name=BMR]');
        let bmi_box = document.querySelector('[name=BMI]');

        ht.addEventListener('blur', function(event){
            let value = 0;
            let d = new Date();
            let now_d = 'Hours: ' + d.getHours() + ' Minutes: ' + d.getMinutes() + ' Seconds: ' + d.getSeconds();
            bmr_box.value = bmr.calc_bmr(gender.value, wt.value, ht.value, age.value);
            bmi_box.value = bmi.calc_bmi(wt.value, ht.value);
        });
        wt.addEventListener('blur', function(event){
            let value = 0;
            let d = new Date();
            let now_d = 'Hours: ' + d.getHours() + ' Minutes: ' + d.getMinutes() + ' Seconds: ' + d.getSeconds();
            bmr_box.value = bmr.calc_bmr(gender.value, wt.value, ht.value, age.value);
            bmi_box.value = bmi.calc_bmi(wt.value, ht.value);
        });
        gender.addEventListener('change', function(event){
            let value = 0;
            let d = new Date();
            let now_d = 'Hours: ' + d.getHours() + ' Minutes: ' + d.getMinutes() + ' Seconds: ' + d.getSeconds();
            let val = bmr.calc_bmr(gender.value, wt.value, ht.value, age.value);
            bmr_box.value = val.toFixed(2);
            bmi_box.value = bmi.calc_bmi(wt.value, ht.value).toFixed(2);
        });

        dob.addEventListener('blur', function(event){
            if(dob.value){
                let year = new Date(dob.value).getFullYear();
                age.value = new Date().getFullYear() - year;
            }
        });
        let me = this;
        btn.addEventListener('click', function(event){
            me.parent.submitFrm(event, 'person');
        });
        btn_delete.addEventListener('click', function(event){
            me.parent.deleteItem(event, 'person');
        });
        reset.addEventListener('click', function(event){
            me.parent.resetFrm(event, 'person');
        });
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
    formBuilder(obj, id){

        let frm = `<form id="${id}" class="input-frm">`;
        let vi = this;
        let parent = this.parent;
        let disabled = '';
        let required = '';
        //alert('form builder');
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
            else{
                required = '';
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
                                //alert('now');
                                value = new Date().toLocaleString('en-US');
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
                                        //alert(value);
                                        let day_seconds = 24 * 60 * 60;
                                        let dot = new Date(vi.getObjAttr(obj.data, 'name', 'DOB', 'value')).getFullYear();
                                        let gender = vi.getObjAttr(obj.data, 'name', 'Gender', 'value');
                                        let age = new Date().getFullYear() - dot;
                                        let wt = vi.getObjAttr(obj.data, 'name', 'Weight', 'value');
                                        let ht = vi.getObjAttr(obj.data, 'name', 'Height', 'value');
                                        let level = 'Sendentary';
                                        if(gender == 'title' || isNaN(age) || isNaN(wt) || isNaN(ht)|| level == undefined){
                                            //alert('Value is 0');
                                            value = 0;
                                        }
                                        else{
                                            let d = new Date();
                                            //let now_d = 'Hours: ' + d.getHours() + ' Minutes: ' + d.getMinutes() + ' Seconds: ' + d.getSeconds();
                                            //alert('BMR');
                                            value = bmr.calc_bmr(gender, wt, ht, age, level);
                                             // for now
                                            let inc = ((value / 24) / 60) / 60;
                                            let now = (((d.getHours() * 60) * 60) + (d.getMinutes() * 60) + d.getSeconds());
                                            let sec_left = day_seconds - now;
                                            let down_start = (((sec_left)) * inc).toFixed(2);
                                            let up_start = (value - down_start).toFixed(2);
                                            /*vi.loadMessage(`
                                                <ul class="time">
                                                    <li>
                                                        <label class="li-title">Seconds left in Day:</label>
                                                        <label class="li-val">${sec_left}</label>
                                                        <div class="clearfix"></div>
                                                    </li>
                                                    <li>
                                                        <label class="li-title">Current time now:</label>
                                                        <label class="li-val">${now_d}</label>
                                                        <div class="clearfix"></div>
                                                    </li> 
                                                    <li>
                                                        <label class="li-title">Total Seconds in a Day:</label>
                                                        <label class="li-val">${day_seconds}</label>
                                                        <div class="clearfix"></div>
                                                    </li>
                                                    <li>
                                                        <label class="li-title">Calories left:</label> 
                                                        <label class="li-val"> ${cal_start}</label>
                                                        <div class="clearfix"></div>
                                                    </li>
                                                </ul>`);*/
                                            inc = inc.toFixed(2);
                                            vi.burn_down.setAttribute('inc', inc);
                                            vi.burn_down.setAttribute('max', value.toFixed(2));
                                            vi.burn_down.setAttribute('start', down_start);
                                            vi.burn_up.setAttribute('inc', inc);
                                            vi.burn_up.setAttribute('max', value.toFixed(2));
                                            vi.burn_up.setAttribute('start', up_start);
                                        }
                                        
                                        break;
                                    case 'bmi':
                                        
                                        let bmi_wt = vi.getObjAttr(obj.data, 'name', 'Weight', 'value');
                                        let bmi_ht = vi.getObjAttr(obj.data, 'name', 'Height', 'value');
                                        if(isNaN(bmi_wt) || isNaN(bmi_ht) || !bmi_wt || !bmi_ht){
                                            value = 0;
                                        }
                                        else{
                                            value = bmi.calc_bmi(bmi_wt, bmi_ht);
                                        }
                                        //value = bmi.calc_bmi();
                                        break;
                                    case 'age':
                                        let dob = new Date(vi.getObjAttr(obj.data, 'name', 'DOB', 'value')).getFullYear();
                                        if(isNaN(dob)){
                                            value = 0;
                                        }
                                        else{
                                            let now = new Date().getFullYear() - dob;
                                            value = now;
                                        }
                                        
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
                            <input ${disabled} ${required} default="${item.default}" type="${item.type}" name="${item.name}" class="form-control" value="${value}" />
                        </div>
                    `;
                    break;
                case 'datepicker':
                    frm += `
                        <div class="controls">
                            <label>${vi.processKey(item.label)}</label>
                            <input ${disabled} ${required} type="${item.type}" default="${item.default}" name="${item.name}" class="form-control" value="${value}" />
                        </div>
                    `;
                    break;
                case 'hidden':
                    frm += `
                        <input type="${item.type}" name="${item.name}" default="${item.default}" value="${value}" />
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
                            <select ${disabled} ${required} data-default="${item.default}" class="form-control" name="${item.name}">
                                 ${options}
                            </select>
                        </div>
                    `;
                    break;
                default: 
                        frm += `
                        <div class="controls">
                            <label>default ${vi.processKey(item.label)}</label>
                            <input ${disabled} ${required} data-default="${item.default}" type="${item.type}" name="${item.name}" class="form-control" value="${value}" />
                        </div>
                    `;
                    break;
            }
        });
        let btn_txt = 'Save';
        let btn_delete = '';

        if(obj.state == 'active'){
            btn_txt = 'Update';
            btn_delete = `<button type="button" class="btn btn-delete">Delete</button>`;
        }
        frm += `<div class="btn-group">
                    <button type="button" class="btn btn-submit">${btn_txt}</button>
                    ${btn_delete}
                    <button type="reset" class="btn btn-reset">Reset</button>
                </div>
        `;
        frm += '</form>';

        return frm;
    }

    loadIcons(){
        let icons = '';
        
        this.main.innerHTML = '';

        return true;
    }

}