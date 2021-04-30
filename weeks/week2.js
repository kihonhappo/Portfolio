//alert('Week 2');
const week2 = {
    title: 'Week 2',
    reading: {
        subjects: `<pre>The importance of well-commented code

        JavaScript grammar ― expressions, statements, semicolons and whitespace
        
        Primitive data types
        
        Strings ― string literals, string properties and methods
        
        Declaring and assigning constants and variables
        
        Numbers ― decimal, hexadecimal, octal, binary and exponent form, Infinity, and NaN
        
        Arithmetic operations such as +, -, *, /, and %
        
        Undefined and null
        
        Booleans ― truthy and falsy values
        
        Logical operators ― AND, OR, and NOT
        
        Our project ― we’ll set some question-and-answer variables and use alert boxes to display them</pre>`
        ,
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
        examples: `<div class="">
                    <ul class="">
                        <li>Single line comments starting with&nbsp;
                            <code>//</code> and finishing at the end of the line:
                            <pre class="">
                                <code>
                                    <div class="">
                                        <span class="token plain">// this is a short comment</span>
                                    </div>
                                </code>
                            </pre>
                        </li>
                        <li font-size="" class="">Multi-line comments starting with&nbsp;
                            <code class="">/*</code> and finishing with&nbsp;
                            <code class="">*/</code> :<p class="sc-AykKE jTRyXh" font-size="2,2,3,3"></p>
                            <pre class="">
                                <code>
                                    <div class="token-line" style="color: rgb(0, 0, 0);">
                                        <span class="token plain">/* This is a longer comment</span>
                                    </div>
                                    <div class="token-line" style="color: rgb(0, 0, 0);">
                                        <span class="token plain">anything here will be ignored</span>
                                    </div>
                                    <div class="token-line" style="color: rgb(0, 0, 0);">
                                        <span class="token plain">This is a useful place to put notes</span>
                                    </div>
                                    <div class="token-line" style="color: rgb(0, 0, 0);">
                                        <span class="token plain">*/</span>
                                    </div>
                                </code>
                            </pre>
                        </li>
                    </ul>
                </div>
               
                `
        
        },
    notes: `<pre>
                <h3>Team Assignment Notes</h3>
                We are Group 4 and we met on Wednesday 4/29/2021 from 8:00pm to 9:30pm CST. 
                Our group members were: Aaron Ameny (me), Erin Engler, Joseph Watt and Catteara Neyman.
                Erin helped us all with using Git as well as with the assignment.
                I was able to help with some of the debugging and hopefully I didn't teach any bad habbits.
                I was very impressed with the last example that the teacher had created where he passed functions as arguments into the calculator function.
            </pre>`
    
}
function loadPage1(){
    alert('Week 2 Load Page: ' + week2.title);
    document.getElementById('top-header').text = week2.title;
    document.getElementById('main').innerHtml = week2.subjects + week2.tasks  + week2.examples;
    document.getElementById('right').innerHtml = week2.notes;
}
loadPage1();