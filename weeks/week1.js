//alert('Week 1');
const week1 = {
    title: 'Week 1',
    reading: {
        subjects: `
            <div class="subject-list">
                <ul>
                    <li>What is programming?</li>
                    <li>The history of JavaScript</li>
                    <li>The tools that are needed to program in JavaScript</li>
                    <li>Installing Node.js</li>
                    <li>JavaScript in the console</li>
                    <li>Hello, world! Your first JavaScript program</li>
                    <li>JavaScript in the web browser</li>
                    <li>Graceful degradation and progressive enhancement</li>
                    <li>A more complicated JavaScript program</li>
                    <li>Project - we'll start a quiz project that will be developed throughout the book</li>
                </ul>
            </div>`,
        tasks: 
            `<div class="tasks">
                <h3>Steps to set up my Coding Environment</h3>
                <ol class"num-list">
                    <li>Download Code Editor</li>
                    <li>Download and Install Node</li>
                    <li>Download Set up Github</li>
                    <li>Download Code Editor</li>
                </ol>
            </div>`,
        examples: `
        
        `
    },
    notes: 
        `<pre>
            <h3>Reading Notes
            I already had Visual Studio Code installed on my pc and I have been using it since it first came out. 
            I had no problem with intalling node.
            I have not used Github so this is a good but challenging process. I was able to get it set up on mu Visual Studio Code editor.
            I am having issues with updating my gitpages for my live portfolio site.
    
        </pre>
        
        `
    
}
function loadPage2(){
    alert('Week 2 Load Page: ' + week1.title);
    document.getElementById('top-header').text = week1.title;
    document.getElementById('main').innerHtml = week1.subjects + week1.tasks + week1.examples;
    document.getElementById('right').innerHtml = week1.notes;
}
loadPage2();