
export default class bugger {
    constructor() {
      //alert('bugger');
      // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
      
      
      this.bugger_ele = `
        <style>
          .debug-cont{width: 100%; height: 200px; margin-bottom: 20px; padding-top: 20px; margin: 0 auto; border-top: 2px solid black; clear: both;}
          .debug-cont label{color: black;}
          .debug-txt-area{width: 100%; height: 100%; padding: 10px; margin-top: 20px;}
        </style>
        <hr />
        <div class="debug-cont">
          <label for="bugger">Debugger</label>
          <textarea id="bugger" class="debug-txt-area"></textarea>
        </div>
      `;

     
      
      
     // document.body.appendChild(this.bugger_ele);

    }
    showDebug(bool){
      if(bool == true){
        if(!document.getElementById("bugger-cont")){
          var buggerDiv = document.createElement("div");
          buggerDiv.id = 'bugger-cont';
          buggerDiv.innerHTML = this.bugger_ele;
          document.body.appendChild(buggerDiv); 
        }
      }
      else{
        if(document.getElementById("bugger-cont")){
          let bugDiv = document.getElementById("bugger-cont");
          bugDiv.remove(); 
        }
      }
    }

    changeBuggerTitle(txt){
      document.querySelector('[for="bugger"]').innerHTML = 'Debug: ' + txt;
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