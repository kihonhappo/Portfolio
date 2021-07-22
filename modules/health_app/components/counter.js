//alert('Counter');

const template = document.createElement('template');

template.innerHTML = `

<style>
    .tile{
        display: inline-block;
        left: 0;
        position: relative;
        top: 0;
        padding: 5px;
        margin-top: 20px;
    }
    .tile h3{
        margin-bottom: 0px;
        display: none;
    }
    
    .fa{margin-left: 5px;}
    .cnt{
        text-align: center; 
        
        width: 100%;
        display: inline-block;
    }
    .btn{padding: 3px;}
     .hide{display: none;}   
    span{display: block; margin-left: 0px; margin-top: 10; text-align: center;}
    .left{float: left;}
</style>
<div class="tile">
    <h3 class="counter-title">
        
    </h3>
    <slot name="txt">Burn</slot>
    <span class="max">0</span>
    <span class="start hide">0</span>
    <span class="inc hide">0</span>
    <span class="cnt">0</span>
    <button type="button" id="btn" class="hide">-</button>
</div>


`;
export default class BurnCounter extends HTMLElement{
    constructor(){
        super();
        this.properties = {
            id: 'id',
            type: 'clock',
            btn: 'btn',
            start: 0,
            title: 'Counter',
            rate: 'rate',
            sign: 'sign',
            min: 'min',
            max: 'max',
            inc: 'inc'
        };
        this.root = this.attachShadow({ mode: "open"});
        this.root.appendChild(template.content.cloneNode(true));
        this.count = 0;
        this.interval = '';
        console.log( 'constructed' );
        this.start = this.root.querySelector('.start');
        this.max = this.root.querySelector('.max');
        this.inc = this.root.querySelector('.inc');
        this.cntr = this.root.querySelector('.cnt');
        this.h_title = this.root.querySelector('.counter-title');
        //this.incCount();
        this.btn = this.root.querySelector('#btn');
        if(this.btn){
            this.btn.addEventListener('click', () => {
                //this.count += 1;
                this.incCount();
            })
        }
        //this.getAttributes();
    }

  /*  get count(){
        return this.getAttributes('start');
    }

    set count(val){
        
        this.setAttribute('start', val);
    }

    */

    startCounter(cnt){

        this.count = cnt;
        let vi = this;
        setInterval(function(){
            vi.incCount();
        },1000);
    }

    getVal() {
        return this.getAttribute('value');
    }

    getAttributes(){
        let attrs = this.attributes;
        //alert(JSON.stringify(attrs));
    }

    connectedCallBack(){
        //alert('Connected');
        // browser calls this method when the element is added to the document
        // (can be called many times if an element is repeatedly added/removed)
        console.log( 'connected' );
        
    }
    disconnectedCallback() {
        console.log('Disconnected');
        // browser calls this method when the element is removed from the document
        // (can be called many times if an element is repeatedly added/removed)
      }
    
    static get observedAttributes() {
        return ['id','type','btn','start','title','rate','sign','min','max','step','inc'];
    }
    
    assignCount(val){
        this.count = val;
        let vi = this;
        clearInterval(vi.interval);
        if(!isNaN(this.count)){
           this.interval = setInterval(function () {
                vi.incCount();
            }, 1000);
        }
        
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // called when one of attributes listed above is modified
        //alert(name + ' Changed from ' + oldValue + ' to ' + newValue);
        switch(name){
            case 'type':
                this.properties.type = newValue;
                this.h_title.innerHTML = this.properties.title;
                console.log('Attribute Changed: ' + name + ' Changed from ' + oldValue + ' to ' + newValue);
                break;
            case 'title':
                this.properties.title = newValue;
                this.h_title.innerHTML = this.properties.title;
                console.log('Attribute Changed: ' + name + ' Changed from ' + oldValue + ' to ' + newValue);
                break;
            case 'start':
                this.properties.start = parseFloat(newValue);
                this.assignCount(this.properties.start);
                this.cntr.innerHTML = this.properties.start;
                this.start.innerHTML = this.properties.start;
                console.log('Attribute Changed: ' + name + ' Changed from ' + oldValue + ' to ' + newValue);
                break;
            case 'min':
                this.properties.min = parseInt(newValue);
                console.log('Attribute Changed: ' + name + ' Changed from ' + oldValue + ' to ' + newValue);
                break;
            case 'max':
                this.properties.max = parseInt(newValue);
                this.max.innerHTML = this.properties.max;
                console.log('Attribute Changed: ' + name + ' Changed from ' + oldValue + ' to ' + newValue);
                break;
            case 'inc':
                this.properties.inc = parseFloat(newValue);
                this.inc.innerHTML = this.properties.inc;
                console.log('Attribute Changed: ' + name + ' Changed from ' + oldValue + ' to ' + newValue);
                break;
            case 'sign':
                
                //this.count += this.properties.start;
                if(newValue == 'neg'){
                    newValue = '-';
                }
                else{
                    newValue = '+';
                }
                this.properties.sign = newValue;
                this.btn.innerHTML = this.properties.sign;
                console.log('Attribute Changed: ' + name + ' Changed from ' + oldValue + ' to ' + newValue);
                break;
            case 'btn':
                this.properties.btn = newValue;
                if(newValue == 'true'){
                    //this.btn.classList.toggle('hide');     
                }
                else{
                    //this.btn.classList.toggle('hide');
                }
                
                console.log('Attribute Changed: ' + name + ' Changed from ' + oldValue + ' to ' + newValue);
                break;
        }
        //console.log('Attribute Changed: ' + name + ' Changed from ' + oldValue + ' to ' + newValue);
    }
    
    adoptedCallback() {
        // called when the element is moved to a new document
        // (happens in document.adoptNode, very rarely used)
        console.log('Adopted');
    }

    incCount(){
        //alert('Inc Count: ' + this.count);
        
        if(this.properties.sign == '+'){
            this.count += this.properties.inc;
            //temp_cnt = temp_cnt;
            if(this.count < this.properties.max){
                //this.count = temp_cnt;
                this.cntr.innerHTML = this.count.toFixed(2);
            }
            else{
                this.count = this.properties.start.toFixed(2);
            }
        }
        else{
            this.count -= this.properties.inc;
            //temp_cnt = parseFloat(temp_cnt.toFixed(2));
            if(this.count > this.properties.min){
                //this.count = temp_cnt;
                this.cntr.innerHTML = this.count.toFixed(2);
            }
            else{
                this.count = this.properties.start.toFixed(2);
            }
            
        }
        
    }

    render(){
        
            
    }
}

customElements.define('burn-counter', BurnCounter);