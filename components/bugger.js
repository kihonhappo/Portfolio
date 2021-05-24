
export default class bugger {
    constructor() {
      
      // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
      this.bugger_ele = `
        <style>
          .debug-cont{width: 400px; height: 200px; margin-bottom: 20px;}
          .debug-txt-area{width: 100%; height: 100%;}
        </style>
        <hr />
        <div class="debug-cont">
          <label for="bugger">Debugger</label>
          <textarea id="bugger" class="debug-txt-area"></textarea>
        </div>
      `;

      //alert('bugger Constructor');
      //Create the element using the createElement method.
      

      //Set its unique ID.
      //myDiv.id = 'debug-cont';

      //Add your content to the DIV
      

      //Finally, append the element to the HTML body
      //alert(!!document.getElementById("bugger"));
      if(!document.getElementById("bugger")){
        var myDiv = document.createElement("div");
        myDiv.innerHTML = this.bugger_ele;
        document.body.appendChild(myDiv); 
      }
      
      //document.body.appendChild(this.bugger_ele);

    }

    changeBuggerTitle(txt){
      document.querySelector('[for="bugger"]').innerHTML = txt;
    }
   
    loadBugger(val) {
      const bugger = document.getElementById("bugger");
      bugger.value = val;
    }

    appendBugger(val){
      const bugger = document.getElementById("bugger");
      bugger.value += '\n ' + val;
    }
  }