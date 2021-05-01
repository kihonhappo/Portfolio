
var links = [
    {
        week: "w1",
        label: "Week 1 Notes",
        active: true,
        url: "weeks/week1.js"
    },
    {
        week: "w2",
        label: "Week 2 Notes",
        active: true,
        url: "weeks/week2.js",
        
    },
    {
        week: "w3",
        label: "Week 3 Notes",
        active: false,
        url: "weeks/week3.js"
    },
    {
        week: "w4",
        label: "Week 4 Notes",
        active: false,
        url: "weeks/week4.js",
        
    },
    {
        week: "w5",
        label: "Week 5 Notes",
        url: "weeks/week5.js"
    },
    {
        week: "w6",
        label: "Week 6 Notes",
        active: false,
        url: "weeks/week6.js",
        
    },
    {
        week: "w7",
        label: "Week 7 Notes",
        active: false,
        url: "weeks/week7.js"
    },
    {
        week: "w8",
        label: "Week 8 Notes",
        active: false,
        url: "weeks/week8.js",
        
    },
    {
        week: "w9",
        label: "Week 9 Notes",
        active: false,
        url: "weeks/week9.js"
    },
    {
        week: "w10",
        label: "Week 10 Notes",
        active: false,
        url: "weeks/week10.js",
        
    },
    {
        week: "w11",
        label: "Week 11 Notes",
        active: false,
        url: "weeks/week11.js"
    },
    {
        week: "w12",
        label: "Week 12 Notes",
        active: false,
        url: "weeks/week12.js",
        
    },
    {
        week: "w13",
        label: "Week 13 Notes",
        active: false,
        url: "weeks/week13.js"
    },
    {
        week: "w14",
        label: "Week 14 Notes",
        active: false,
        url: "weeks/week14.js",
        
    }
  ]

 //  window.onload = function(e){
    var weeks = [
        {   
            week: 'w1',
            title: 'Week 1',
            reading: {
                subjects: `
                    <div class="subject-list">
                        <h3 class="subjects-header h-center">Chapter 1 Subjects</h3>
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
                
                examples: `
                
                `
            },
            notes: 
                `<div class="notes-cont">
                    <div class="notes-sub-cont">
                        <h3 class="notes-header">Reading Notes</h3>
                        <p> 
                            I already had Visual Studio Code installed on my pc and I have been using it since it first came out. 
                            I had no problem with intalling node.
                            I have not used Github so this is a good but challenging process. 
                            I was able to get it set up on mu Visual Studio Code editor.
                            I am having issues with updating my gitpages for my live portfolio site.
                        </p>
                    </div>
                </div>
                `,
            tasks: 
                `<div class="tasks">
                    <h3 class="tasks-header h-center">
                       Next Steps 
                    </h3>
                    <ol class"num-list">
                        <li>Download Code Editor</li>
                        <li>Download and Install Node</li>
                        <li>Download Set up Github</li>
                        <li>Download Code Editor</li>
                    </ol>
                </div>`
        },
        {  
            week: 'w2', 
            title: 'Week 2',
            reading: {
                subjects: `
                <div class="subjects-cont">
                    <h3 class="subjects-header h-center">Chapter 2 Subjects</h3>
                    <ul>
                        <li>The importance of well-commented code</li>
                        <li>JavaScript grammar ― expressions, statements, semicolons and whitespace</li>
                        <li>Primitive data types</li>
                        <li>Strings ― string literals, string properties and methods</li>
                        <li>Declaring and assigning constants and variables</li>
                        <li>Numbers ― decimal, hexadecimal, octal, binary and exponent form, Infinity, and NaN</li>
                        <li>Arithmetic operations such as +, -, *, /, and %</li>
                        <li>Undefined and null</li>
                        <li>Booleans ― truthy and falsy values</li>
                        <li>Logical operators ― AND, OR, and NOT</li>
                        <li>Our project ― we’ll set some question-and-answer variables and use alert boxes to display them</li>
                    </ul>
                </div>`,
                examples: `
                    <div class="examples-cont">
                        <h3 class="examples-header h-center">Comments</h3>
                            <ul class="main-ul">
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
            notes: `
                <div class="notes-cont">
                    <div class="notes-sub-cont">
                        <h3 class="notes-header">Reading Notes</h3>
                        <p> 
                            I already had Visual Studio Code installed on my pc and I have been using it since it first came out. 
                            I had no problem with intalling node.
                            I have not used Github so this is a good but challenging process. 
                            I was able to get it set up on mu Visual Studio Code editor.
                            I am having issues with updating my gitpages for my live portfolio site.
                        </p>
                    </div>
                    <div class="notes-sub-cont">
                        <h3 class="notes-header h-center">Team Assignment Notes</h3>
                        <p>
                            We are Group 4 and we met on Wednesday 4/29/2021 from 8:00pm to 9:30pm CST. 
                            Our group members were: Aaron Ameny (me), Erin Engler, Joseph Watt and Catteara Neyman.
                        </p>
                        <p>
                            Erin helped us all with using Git as well as with the assignment.
                            I was able to help with some of the debugging and hopefully I didn't teach any bad habbits.
                            I was very impressed with the last example that the teacher had created where he passed functions as arguments into the calculator function.
                        </p>
                    </div>
                </div>`
                ,
            tasks: 
                `<div class="tasks-cont">
                    <h3 class="tasks-header h-center">Next Tasks</h3>
                    <ol class"num-list">
                        <li>Download Code Editor</li>
                        <li>Download and Install Node</li>
                        <li>Download Set up Github</li>
                        <li>Download Code Editor</li>
                    </ol>
                </div>`
        
            }
            ,
        {
            week: 'w3',
            title: 'Week 3',
            reading: {
                subjects: `
                    <div class="subject-list">
                        <h3 class="subjects-header h-center">Chapter 1 Subjects</h3>
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
                
                examples: `
                
                `
            },
            notes: 
                `<div class="notes-cont">
                    <h3 class="notes-header">Reading Notes</h3>
                    <p> 
                        I already had Visual Studio Code installed on my pc and I have been using it since it first came out. 
                        I had no problem with intalling node.
                        I have not used Github so this is a good but challenging process. 
                        I was able to get it set up on mu Visual Studio Code editor.
                        I am having issues with updating my gitpages for my live portfolio site.
                    </p>
                </div>
                `,
            tasks: 
                `<div class="tasks">
                    <h3 class="tasks-header h-center">
                        Tasks
                    </h3>
                    <ol class"num-list">
                        <li>Download Code Editor</li>
                        <li>Download and Install Node</li>
                        <li>Download Set up Github</li>
                        <li>Download Code Editor</li>
                    </ol>
                </div>`
        },
        {
            week: 'w4',
            title: 'Week 4',
            reading: {
                subjects: `
                <div class="subjects-cont">
                    <h3 class="subjects-header h-center">Chapter 2 Subjects</h3>
                    <ul>
                        <li>The importance of well-commented code</li>
                        <li>JavaScript grammar ― expressions, statements, semicolons and whitespace</li>
                        <li>Primitive data types</li>
                        <li>Strings ― string literals, string properties and methods</li>
                        <li>Declaring and assigning constants and variables</li>
                        <li>Numbers ― decimal, hexadecimal, octal, binary and exponent form, Infinity, and NaN</li>
                        <li>Arithmetic operations such as +, -, *, /, and %</li>
                        <li>Undefined and null</li>
                        <li>Booleans ― truthy and falsy values</li>
                        <li>Logical operators ― AND, OR, and NOT</li>
                        <li>Our project ― we’ll set some question-and-answer variables and use alert boxes to display them</li>
                    </ul>
                </div>`,
                examples: `
                    <div class="examples-cont">
                        <h3 class="examples-header h-center">Comments</h3>
                            <ul class="main-ul">
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
            notes: `
                <div class="notes-cont">
                    <h3 class="notes-header h-center">Team Assignment Notes</h3>
                    <p>
                        We are Group 4 and we met on Wednesday 4/29/2021 from 8:00pm to 9:30pm CST. 
                        Our group members were: Aaron Ameny (me), Erin Engler, Joseph Watt and Catteara Neyman.
                    </p>
                    <p>
                        Erin helped us all with using Git as well as with the assignment.
                        I was able to help with some of the debugging and hopefully I didn't teach any bad habbits.
                        I was very impressed with the last example that the teacher had created where he passed functions as arguments into the calculator function.
                    </p>
                </div>`
                ,
            tasks: 
                `<div class="tasks-cont">
                    <h3 class="tasks-header h-center">Steps to set up my Coding Environment</h3>
                    <ol class"num-list">
                        <li>Download Code Editor</li>
                        <li>Download and Install Node</li>
                        <li>Download Set up Github</li>
                        <li>Download Code Editor</li>
                    </ol>
                </div>`
            
        },
        {
            week: 'w5',
            title: 'Week 5',
            reading: {
                subjects: `
                    <div class="subject-list">
                        <h3 class="subjects-header h-center">Chapter 1 Subjects</h3>
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
                
                examples: `
                
                `
            },
            notes: 
                `<div class="notes-cont">
                    <h3 class="notes-header">Reading Notes</h3>
                    <p> 
                        I already had Visual Studio Code installed on my pc and I have been using it since it first came out. 
                        I had no problem with intalling node.
                        I have not used Github so this is a good but challenging process. 
                        I was able to get it set up on mu Visual Studio Code editor.
                        I am having issues with updating my gitpages for my live portfolio site.
                    </p>
                </div>
                `,
            tasks: 
                `<div class="tasks">
                    <h3 class="tasks-header h-center">
                        Steps to set up my Coding Environment
                    </h3>
                    <ol class"num-list">
                        <li>Download Code Editor</li>
                        <li>Download and Install Node</li>
                        <li>Download Set up Github</li>
                        <li>Download Code Editor</li>
                    </ol>
                </div>`
        },
        {
            week: 'w6',
            title: 'Week 6',
            reading: {
                subjects: `
                <div class="subjects-cont">
                    <h3 class="subjects-header h-center">Chapter 2 Subjects</h3>
                    <ul>
                        <li>The importance of well-commented code</li>
                        <li>JavaScript grammar ― expressions, statements, semicolons and whitespace</li>
                        <li>Primitive data types</li>
                        <li>Strings ― string literals, string properties and methods</li>
                        <li>Declaring and assigning constants and variables</li>
                        <li>Numbers ― decimal, hexadecimal, octal, binary and exponent form, Infinity, and NaN</li>
                        <li>Arithmetic operations such as +, -, *, /, and %</li>
                        <li>Undefined and null</li>
                        <li>Booleans ― truthy and falsy values</li>
                        <li>Logical operators ― AND, OR, and NOT</li>
                        <li>Our project ― we’ll set some question-and-answer variables and use alert boxes to display them</li>
                    </ul>
                </div>`,
                examples: `
                    <div class="examples-cont">
                        <h3 class="examples-header h-center">Comments</h3>
                            <ul class="main-ul">
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
            notes: `
                <div class="notes-cont">
                    <h3 class="notes-header h-center">Team Assignment Notes</h3>
                    <p>
                        We are Group 4 and we met on Wednesday 4/29/2021 from 8:00pm to 9:30pm CST. 
                        Our group members were: Aaron Ameny (me), Erin Engler, Joseph Watt and Catteara Neyman.
                    </p>
                    <p>
                        Erin helped us all with using Git as well as with the assignment.
                        I was able to help with some of the debugging and hopefully I didn't teach any bad habbits.
                        I was very impressed with the last example that the teacher had created where he passed functions as arguments into the calculator function.
                    </p>
                </div>`
                ,
            tasks: 
                `<div class="tasks-cont">
                    <h3 class="tasks-header h-center">Steps to set up my Coding Environment</h3>
                    <ol class"num-list">
                        <li>Download Code Editor</li>
                        <li>Download and Install Node</li>
                        <li>Download Set up Github</li>
                        <li>Download Code Editor</li>
                    </ol>
                </div>`
        },
        {
            week: 'w7',
            title: 'Week 7',
            reading: {
                subjects: `
                    <div class="subject-list">
                        <h3 class="subjects-header h-center">Chapter 1 Subjects</h3>
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
                
                examples: `
                
                `
            },
            notes: 
                `<div class="notes-cont">
                    <h3 class="notes-header">Reading Notes</h3>
                    <p> 
                        I already had Visual Studio Code installed on my pc and I have been using it since it first came out. 
                        I had no problem with intalling node.
                        I have not used Github so this is a good but challenging process. 
                        I was able to get it set up on mu Visual Studio Code editor.
                        I am having issues with updating my gitpages for my live portfolio site.
                    </p>
                </div>
                `,
            tasks: 
                `<div class="tasks">
                    <h3 class="tasks-header h-center">
                        Steps to set up my Coding Environment
                    </h3>
                    <ol class"num-list">
                        <li>Download Code Editor</li>
                        <li>Download and Install Node</li>
                        <li>Download Set up Github</li>
                        <li>Download Code Editor</li>
                    </ol>
                </div>`
        },
        {   week: 'w8',
            title: 'Week 8',
            reading: {
                subjects: `
                <div class="subjects-cont">
                    <h3 class="subjects-header h-center">Chapter 2 Subjects</h3>
                    <ul>
                        <li>The importance of well-commented code</li>
                        <li>JavaScript grammar ― expressions, statements, semicolons and whitespace</li>
                        <li>Primitive data types</li>
                        <li>Strings ― string literals, string properties and methods</li>
                        <li>Declaring and assigning constants and variables</li>
                        <li>Numbers ― decimal, hexadecimal, octal, binary and exponent form, Infinity, and NaN</li>
                        <li>Arithmetic operations such as +, -, *, /, and %</li>
                        <li>Undefined and null</li>
                        <li>Booleans ― truthy and falsy values</li>
                        <li>Logical operators ― AND, OR, and NOT</li>
                        <li>Our project ― we’ll set some question-and-answer variables and use alert boxes to display them</li>
                    </ul>
                </div>`,
                examples: `
                    <div class="examples-cont">
                        <h3 class="examples-header h-center">Comments</h3>
                            <ul class="main-ul">
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
            notes: `
                <div class="notes-cont">
                    <h3 class="notes-header h-center">Team Assignment Notes</h3>
                    <p>
                        We are Group 4 and we met on Wednesday 4/29/2021 from 8:00pm to 9:30pm CST. 
                        Our group members were: Aaron Ameny (me), Erin Engler, Joseph Watt and Catteara Neyman.
                    </p>
                    <p>
                        Erin helped us all with using Git as well as with the assignment.
                        I was able to help with some of the debugging and hopefully I didn't teach any bad habbits.
                        I was very impressed with the last example that the teacher had created where he passed functions as arguments into the calculator function.
                    </p>
                </div>`
                ,
            tasks: 
                `<div class="tasks-cont">
                    <h3 class="tasks-header h-center">Steps to set up my Coding Environment</h3>
                    <ol class"num-list">
                        <li>Download Code Editor</li>
                        <li>Download and Install Node</li>
                        <li>Download Set up Github</li>
                        <li>Download Code Editor</li>
                    </ol>
                </div>`
            },
            {
                week: 'w9',
                title: 'Week 9',
                reading: {
                    subjects: `
                        <div class="subject-list">
                            <h3 class="subjects-header h-center">Chapter 1 Subjects</h3>
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
                    
                    examples: `
                    
                    `
                },
                notes: 
                    `<div class="notes-cont">
                        <h3 class="notes-header">Reading Notes</h3>
                        <p> 
                            I already had Visual Studio Code installed on my pc and I have been using it since it first came out. 
                            I had no problem with intalling node.
                            I have not used Github so this is a good but challenging process. 
                            I was able to get it set up on mu Visual Studio Code editor.
                            I am having issues with updating my gitpages for my live portfolio site.
                        </p>
                    </div>
                    `,
                tasks: 
                    `<div class="tasks">
                        <h3 class="tasks-header h-center">
                            Steps to set up my Coding Environment
                        </h3>
                        <ol class"num-list">
                            <li>Download Code Editor</li>
                            <li>Download and Install Node</li>
                            <li>Download Set up Github</li>
                            <li>Download Code Editor</li>
                        </ol>
                    </div>`
            },
            {
                week: 'w10',
                title: 'Week 10',
                reading: {
                    subjects: `
                        <div class="subject-list">
                            <h3 class="subjects-header h-center">Chapter 1 Subjects</h3>
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
                    
                    examples: `
                    
                    `
                },
                notes: 
                    `<div class="notes-cont">
                        <h3 class="notes-header">Reading Notes</h3>
                        <p> 
                            I already had Visual Studio Code installed on my pc and I have been using it since it first came out. 
                            I had no problem with intalling node.
                            I have not used Github so this is a good but challenging process. 
                            I was able to get it set up on mu Visual Studio Code editor.
                            I am having issues with updating my gitpages for my live portfolio site.
                        </p>
                    </div>
                    `,
                tasks: 
                    `<div class="tasks">
                        <h3 class="tasks-header h-center">
                            Steps to set up my Coding Environment
                        </h3>
                        <ol class"num-list">
                            <li>Download Code Editor</li>
                            <li>Download and Install Node</li>
                            <li>Download Set up Github</li>
                            <li>Download Code Editor</li>
                        </ol>
                    </div>`
            },
            {
                week: 'w11',
                title: 'Week 11',
                reading: {
                    subjects: `
                    <div class="subjects-cont">
                        <h3 class="subjects-header h-center">Chapter 2 Subjects</h3>
                        <ul>
                            <li>The importance of well-commented code</li>
                            <li>JavaScript grammar ― expressions, statements, semicolons and whitespace</li>
                            <li>Primitive data types</li>
                            <li>Strings ― string literals, string properties and methods</li>
                            <li>Declaring and assigning constants and variables</li>
                            <li>Numbers ― decimal, hexadecimal, octal, binary and exponent form, Infinity, and NaN</li>
                            <li>Arithmetic operations such as +, -, *, /, and %</li>
                            <li>Undefined and null</li>
                            <li>Booleans ― truthy and falsy values</li>
                            <li>Logical operators ― AND, OR, and NOT</li>
                            <li>Our project ― we’ll set some question-and-answer variables and use alert boxes to display them</li>
                        </ul>
                    </div>`,
                    examples: `
                        <div class="examples-cont">
                            <h3 class="examples-header h-center">Comments</h3>
                                <ul class="main-ul">
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
                notes: `
                    <div class="notes-cont">
                        <h3 class="notes-header h-center">Team Assignment Notes</h3>
                        <p>
                            We are Group 4 and we met on Wednesday 4/29/2021 from 8:00pm to 9:30pm CST. 
                            Our group members were: Aaron Ameny (me), Erin Engler, Joseph Watt and Catteara Neyman.
                        </p>
                        <p>
                            Erin helped us all with using Git as well as with the assignment.
                            I was able to help with some of the debugging and hopefully I didn't teach any bad habbits.
                            I was very impressed with the last example that the teacher had created where he passed functions as arguments into the calculator function.
                        </p>
                    </div>`
                    ,
                tasks: 
                    `<div class="tasks-cont">
                        <h3 class="tasks-header h-center">Steps to set up my Coding Environment</h3>
                        <ol class"num-list">
                            <li>Download Code Editor</li>
                            <li>Download and Install Node</li>
                            <li>Download Set up Github</li>
                            <li>Download Code Editor</li>
                        </ol>
                    </div>`
            },
            {   
                week: 'w12',
                title: 'Week 12',
                reading: {
                    subjects: `
                    <div class="subjects-cont">
                        <h3 class="subjects-header h-center">Chapter 2 Subjects</h3>
                        <ul>
                            <li>The importance of well-commented code</li>
                            <li>JavaScript grammar ― expressions, statements, semicolons and whitespace</li>
                            <li>Primitive data types</li>
                            <li>Strings ― string literals, string properties and methods</li>
                            <li>Declaring and assigning constants and variables</li>
                            <li>Numbers ― decimal, hexadecimal, octal, binary and exponent form, Infinity, and NaN</li>
                            <li>Arithmetic operations such as +, -, *, /, and %</li>
                            <li>Undefined and null</li>
                            <li>Booleans ― truthy and falsy values</li>
                            <li>Logical operators ― AND, OR, and NOT</li>
                            <li>Our project ― we’ll set some question-and-answer variables and use alert boxes to display them</li>
                        </ul>
                    </div>`,
                    examples: `
                        <div class="examples-cont">
                            <h3 class="examples-header h-center">Comments</h3>
                                <ul class="main-ul">
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
                            </div>`
                    },
                notes: `
                    <div class="notes-cont">
                        <h3 class="notes-header h-center">Team Assignment Notes</h3>
                        <p>
                            We are Group 4 and we met on Wednesday 4/29/2021 from 8:00pm to 9:30pm CST. 
                            Our group members were: Aaron Ameny (me), Erin Engler, Joseph Watt and Catteara Neyman.
                        </p>
                        <p>
                            Erin helped us all with using Git as well as with the assignment.
                            I was able to help with some of the debugging and hopefully I didn't teach any bad habbits.
                            I was very impressed with the last example that the teacher had created where he passed functions as arguments into the calculator function.
                        </p>
                    </div>`
                    ,
                tasks: 
                    `<div class="tasks-cont">
                        <h3 class="tasks-header h-center">Steps to set up my Coding Environment</h3>
                        <ol class"num-list">
                            <li>Download Code Editor</li>
                            <li>Download and Install Node</li>
                            <li>Download Set up Github</li>
                            <li>Download Code Editor</li>
                        </ol>
                    </div>`
                },
                {   
                    week: 'w13',
                    title: 'Week 13',
                    reading: {
                        subjects: `
                        <div class="subjects-cont">
                            <h3 class="subjects-header h-center">Chapter 2 Subjects</h3>
                            <ul>
                                <li>The importance of well-commented code</li>
                                <li>JavaScript grammar ― expressions, statements, semicolons and whitespace</li>
                                <li>Primitive data types</li>
                                <li>Strings ― string literals, string properties and methods</li>
                                <li>Declaring and assigning constants and variables</li>
                                <li>Numbers ― decimal, hexadecimal, octal, binary and exponent form, Infinity, and NaN</li>
                                <li>Arithmetic operations such as +, -, *, /, and %</li>
                                <li>Undefined and null</li>
                                <li>Booleans ― truthy and falsy values</li>
                                <li>Logical operators ― AND, OR, and NOT</li>
                                <li>Our project ― we’ll set some question-and-answer variables and use alert boxes to display them</li>
                            </ul>
                        </div>`,
                        examples: `
                            <div class="examples-cont">
                                <h3 class="examples-header h-center">Comments</h3>
                                    <ul class="main-ul">
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
                    notes: `
                        <div class="notes-cont">
                            <h3 class="notes-header h-center">Team Assignment Notes</h3>
                            <p>
                                We are Group 4 and we met on Wednesday 4/29/2021 from 8:00pm to 9:30pm CST. 
                                Our group members were: Aaron Ameny (me), Erin Engler, Joseph Watt and Catteara Neyman.
                            </p>
                            <p>
                                Erin helped us all with using Git as well as with the assignment.
                                I was able to help with some of the debugging and hopefully I didn't teach any bad habbits.
                                I was very impressed with the last example that the teacher had created where he passed functions as arguments into the calculator function.
                            </p>
                        </div>`
                        ,
                    tasks: 
                        `<div class="tasks-cont">
                            <h3 class="tasks-header h-center">Steps to set up my Coding Environment</h3>
                            <ol class"num-list">
                                <li>Download Code Editor</li>
                                <li>Download and Install Node</li>
                                <li>Download Set up Github</li>
                                <li>Download Code Editor</li>
                            </ol>
                        </div>`
                    
                },
                {
                    week: 'w14',
                    title: 'Week 14',
                    reading: {
                        subjects: `
                        <div class="subjects-cont">
                            <h3 class="subjects-header h-center">Chapter 2 Subjects</h3>
                            <ul>
                                <li>The importance of well-commented code</li>
                                <li>JavaScript grammar ― expressions, statements, semicolons and whitespace</li>
                                <li>Primitive data types</li>
                                <li>Strings ― string literals, string properties and methods</li>
                                <li>Declaring and assigning constants and variables</li>
                                <li>Numbers ― decimal, hexadecimal, octal, binary and exponent form, Infinity, and NaN</li>
                                <li>Arithmetic operations such as +, -, *, /, and %</li>
                                <li>Undefined and null</li>
                                <li>Booleans ― truthy and falsy values</li>
                                <li>Logical operators ― AND, OR, and NOT</li>
                                <li>Our project ― we’ll set some question-and-answer variables and use alert boxes to display them</li>
                            </ul>
                        </div>`,
                        examples: `
                            <div class="examples-cont">
                                <h3 class="examples-header h-center">Comments</h3>
                                    <ul class="main-ul">
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
                    notes: `
                        <div class="notes-cont">
                            <h3 class="notes-header h-center">Team Assignment Notes</h3>
                            <p>
                                We are Group 4 and we met on Wednesday 4/29/2021 from 8:00pm to 9:30pm CST. 
                                Our group members were: Aaron Ameny (me), Erin Engler, Joseph Watt and Catteara Neyman.
                            </p>
                            <p>
                                Erin helped us all with using Git as well as with the assignment.
                                I was able to help with some of the debugging and hopefully I didn't teach any bad habbits.
                                I was very impressed with the last example that the teacher had created where he passed functions as arguments into the calculator function.
                            </p>
                        </div>`
                        ,
                    tasks: 
                        `<div class="tasks-cont">
                            <h3 class="tasks-header h-center">Steps to set up my Coding Environment</h3>
                            <ol class"num-list">
                                <li>Download Code Editor</li>
                                <li>Download and Install Node</li>
                                <li>Download Set up Github</li>
                                <li>Download Code Editor</li>
                            </ol>
                        </div>`
                }
        
        ] 
      
     
      
   window.onload = function(e){
        
    var nav = document.getElementById('nav');
    links.forEach(function(link){
        var label = document.createElement("LABEL");
        var a = document.createElement("A");
        //var li = document.createElement("LI");
        a.text = link.label;
        a.href = link.url;
        if(link.active == true){
            
        
            //li.appendChild(label);
            //li.appendChild(a);
            nav.appendChild(a);
            //var id = document.getElementById("31");
            var week = weeks.filter(x => x.week == link.week)[0];
            a.addEventListener("click", function(e){
                e.preventDefault();
                localStorage.setItem("lastPage", link.week);
                loadPage(week);
            });
            var lastPageNav = localStorage.getItem("lastPage");
            if(lastPageNav == link.week){
                loadPage(week);
            }
        }
         //or something of the likes
    });


}
