//alert('Counter');

const template = document.createElement('template');

template.innerHTML = `

<style>

</style>
<div class="tile">
    <h3>Counter</h3>
    <p class="cnt"></p>
</div>
<button id="btn">Add 1</button>

`;
export default class MyCounter extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.count = 0;
        console.log( 'constructed' );
        this.cntr = this.shadowRoot.querySelector('.cnt');
        this.incCount();
        this.shadowRoot.querySelector('#btn').addEventListener('click', () => {
            //this.count += 1;
            this.incCount();
        })
    }

    startCounter(cnt){

        this.count = cnt;
        let vi = this;
        setInterval(function(){
            vi.incCount();
        },1000);
    }

    connectedCallBack(){
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
        return [/* array of attribute names to monitor for changes */];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        // called when one of attributes listed above is modified
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