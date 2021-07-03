
import Bugger from '../components/bugger.js';

let debug = new Bugger();
debug.showDebug(true);
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => debug.appendBugger('click') );
clickParagraph.addEventListener('mousedown',() => debug.appendBugger('down') );
clickParagraph.addEventListener('mouseup',() => debug.appendBugger('up') );

function doSomething(event){
    debug.changeBuggerTitle('Click anywhere Event Handler Test');
    debug.loadBugger('Something Happened!');
    debug.appendBugger(event.target);
    debug.appendBugger(event.type);
    debug.appendBugger(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`);
}
addEventListener('click', doSomething);

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
    debug.changeBuggerTitle('highlight Event Handler Test');
    debug.loadBugger(event.type + ' Toggle Highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () =>  move);

function move(event){
    //event.target.classList.toggle('highlight');
    debug.changeBuggerTitle('Mouse Move Event Handler Test');
    debug.loadBugger(event.type + ' Mouse location: X: ' + event.target.screenX + ' Y: ' + event.target.screenY);
}

function showKeyEvents(event){
    debug.changeBuggerTitle(event.type + ' Event Handler');
    debug.loadBugger(event.type + ' Value: ' + event.target.value);
}

const keypress = document.getElementById('press').addEventListener('keypress', showKeyEvents);
const keyup = document.getElementById('keyup').addEventListener('keyup', showKeyEvents);
const keydown = document.getElementById('keydown').addEventListener('keydown', showKeyEvents);



//alert('Events html');