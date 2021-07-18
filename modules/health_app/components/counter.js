//alert('Counter');

const template = document.createElement('template');

template.innerHTML = `

<style>
    .tile{
        display: inline-block;
        
        position: absolute;
        margin-top: -60px;
    }
    .tile h3{
        margin-bottom: 0px;
    }
    .cnt{
        text-align: center; 
        
        width: 100%;
        display: inline-block;

    .btn{width: 100%; padding: 3px;}
        
    }
</style>
<div class="tile">
    <h3>Counter</h3>
    <span class="cnt"></span>
    <button type="button" id="btn" class="btn btn-inc">-</button>
</div>


`;
export default class MyCounter extends HTMLElement{
    constructor(){
        super();
        this.properties = {
            btn: 'btn',
            title: 'Counter',
            rate: 'rate',
            sign: 'sign',
            inc: 'inc'
        };
        this.root = this.attachShadow({ mode: "open"});
        this.root.appendChild(template.content.cloneNode(true));
        this.count = 0;
        console.log( 'constructed' );
        this.cntr = this.root.querySelector('.cnt');
        this.incCount();
        let btn = this.root.querySelector('#btn');
        if(btn){
            btn.addEventListener('click', () => {
                //this.count += 1;
                this.incCount();
            })
        }
        this.getAttributes();
    }

    get count(){
        return this.getAttributes('btn');
    }

    set count(val){
        this.setAttribute('btn', val);
    }

    

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
        return ['btn','title','rat','direction','inc'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        // called when one of attributes listed above is modified
        //alert(name + ' Changed from ' + oldValue + ' to ' + newValue);
        console.log('Attribute Changed');
    }
    
    adoptedCallback() {
        // called when the element is moved to a new document
        // (happens in document.adoptNode, very rarely used)
        console.log('Adopted');
    }

    incCount(){
        //alert('Inc Count');
        this.cntr.innerHTML = this.count++;
    }

    render(){
        
            
    }
}

customElements.define('my-counter', MyCounter);