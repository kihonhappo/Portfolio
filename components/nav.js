
var links = [
    {
        week: "w1",
        label: "Week 1: Setup and Review",
        active: true,
        url: "weeks/week1.js"
    },
    {
        week: "w2",
        label: "Week 2: Review and Team Activity",
        active: true,
        url: "weeks/week2.js"
        
    },
    {
        week: "w3",
        label: "Week 3: Objects and Arrays",
        active: true,
        url: "weeks/week3.js",
        sub_links: [
            {
                label: 'Team Activity',
                url: './pages/w03_team_assignment.html'
            }
        ]
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
            title: 'Week 1: Workspace and Dependancies Setup',
            reading: {
                subjects: `
                    <div class="subject-list">
                        <h3 class="subjects-header section-header h-center">Doing Stuff with Web Things</h3>
                        <ul class="list no-bullets">
                            <li class="li-title">Local Storage</li>
                            <li class="li-content">
                                <iframe src="./assets/doing_stuff_with_web_things.pdf#page=35" class="document-viewer"></iframe>
                            </li>
                        </ul>
                        <h3 class="subjects-header section-header h-center">
                            <a href="https://www.sitepoint.com/premium/courses/master-mobile-ux-2952" target="_blank" rel="noreferrer">Master Mobile UX</a>
                        </h3>
                        <h3 class="subjects-header section-header h-center">Novice to Ninja: Chapter 1</h3>
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
                    <div class="examples-cont">
                        <h3 class="section-header h-center">Quiz Ninja Example:</h3>
                        <iframe src="./pages/ninja.html" class="document-viewer"></iframe>
                    </div>
                    <div class="examples-cont">
                        <h3 class="section-header h-center">Story Editor Example:</h3>
                        <iframe src="./pages/ninja.html" class="document-viewer"></iframe>
                    </div>
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
                       Tasks
                    </h3>
                    <ol class"num-list">
                        <li><span class="task-txt completed">Download Code Editor</span> <i class="fas fa-check green"></i> </li>
                        <li><span class="task-txt completed">Download and Install Node</span> <i class="fas fa-check green"></i> </li>
                        <li><span class="task-txt completed">Download Set up Github</span> <i class="fas fa-check green"></i></li>
                        <li><span class="task-txt completed">Download Code Editor</span> <i class="fas fa-check green"></i> </li>
                    </ol>
                </div>
                <div class="report">
                    <h3 class="report-header h-center">
                       Week 1 Report
                    </h3>
                    <div>
                        <h4 class="h-center">What did I do since the last meeting?</h4>
                        <p>
                            I set up Git Hub Account
                            I set up my Visual Studio Code and set it up to work with Git Hub.
                            I was able to publish the Portfolio hosted page to https://kihonhappo.github.io/Portfolio/.
                            I downloaded Team Viewer and set it up for my group meatings.
                            I read through the reading material but really enjoyed the Mobile First Videos.
                        </p>
                        <h4 class="h-center">What am I going to do next?</h4>
                        <p> 
                            I will build out my portfolio page links and start to record my notes and code examples in the subpages.
                            I will set up my css files to make my portfolio pages look nicer.
                        </p>
                        
                        <h4 class="h-center">What are my blockers?</h4>
                        <p>  
                            One major blocker was that I did not read both of the anouncments and I missed the link and explanation for the Team Viewer site and group. 
                            I have a habit of quick scanning documentation and I am prone to missing important key elements. 
                            I will need to not do that when it comes to announcements.
                            I waited too late in the week to take a more detailed look at the assignments which tends to cause me stress.
                            I was planning on using vue.js framework as my basic code for my projects but then I read that you wanted us to do it from scratch. 
                            I have become so dependent on frameworks that I tend to get lazy when it comes to custom coding. This class will be good for me to brush up on my creative coding skills.
                        </p>
                    </div>
                </div>
                `,            
            next: 
                `<div class="tasks">
                    <h3 class="tasks-header h-center">
                        Next Steps
                    </h3>
                    <ol class"num-list">
                        <li>Learn Github: </li>
                        <li>Successfully sync Git with VSCode</li>
                        <li>Learn to update Git Pages</li>
                        <li>Set up and learn Teams</li>
                        <li>Join a group</li>
                    </ol>
                 </div>
                `
        },
        {  
            week: 'w2', 
            title: 'Week 2: Jasascript Review and Basics',
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
                        <p> In ch:2 concerning the primitive data types I noticed that there was a type that I have never heard of or used, the Symbol. 
                            I have been developing web applications since 2008 and haven't ran across it. 
                            I liked the tyepof special character if helps in cases where I am trying to automate the processing of data from multiple sources. 
                            I can use typeof to tell me if it is a string, number, boolean, undefined or null. I have used it to determine is an element is an object or an array as well. 
                        </p>
                         <p> I have also noticed that there is a lot more push to use let and const. I still use var most of the time hopefully it will not go away.
                        </p>  
                        <p>    In ch3 I noticed that I need to study about sets, and Maps. 
                        </p>
                        <p>  
                            In ch4 I noticed that I don't like using arrow functions, they are challenging for me visually except for when I use a filter on an array. 
                            <p>
                                <code>
                                    var list = [
                                    
                                    {first_name: "Aaron", last_name: "Ameny"},{first_name: "Jack", last_name: "Smith"}]
                                    
                                    list.filter(x => x.first_name == 'Aaron')[0]; 
                                </code>
                            </p>
                            <p>
                                This would bring back the first object with a first name of Aaron. 
                                For some reason this makes sense to me visually.
                            </p>
                        </p>
                        <h3 class="notes-header">Activity Notes</h3>
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
                `<div class="tasks">
                    <h3 class="tasks-header h-center">
                        Tasks:
                    </h3>
                    <ol class"num-list">
                        <li><span class="task-txt completed">Learn Github: </span> <i class="fas fa-check green"></i>  </li>
                        <li><span class="task-txt completed">Successfully sync Git with VSCode</span> <i class="fas fa-check green"></i> </li>
                        <li><span class="task-txt completed">Learn to update Git Pages</span> <i class="fas fa-check green"></i> </li>
                        <li><span class="task-txt completed">Set up and learn Teams</span> <i class="fas fa-check green"></i> </li>
                        <li><span class="task-txt completed">Join a group</span> <i class="fas fa-check green"></i> </li>
                    </ol>
                </div>
                <div class="report">
                    <h3 class="report-header h-center">
                       Week 2 Report
                    </h3>
                    <div>
                        <h4 class="h-center">What did I do since the last meeting?</h4>
                        <p>
                            I had to revamp my portfolio site to include much more content. 
                            I created a function in the portfolio site that checks if a localStorage item for link last clicked. 
                            If not storage item then the function defaults to the first week information. 
                            If there is a storage item then the function will get the content associated with the storage item. 
                            If a link is clicked then the localStorage will be set to the week selected and then the function injects the associated content into the web page. 
                            I was able to learn how to sync my VS code with Github to push site code to the repository. 
                            I was also able to update my Github pages. I added last weeks report and ninja example to my week 1 portfolio page. 
                            I had a successful Team meeting with my group. We were able to help each other with the Team Assignment.
                        </p>
                        <h4 class="h-center">What am I going to do next?</h4>
                        <p> 
                            I am going to complete the week 2 page of my portfolio and start on week 3 of my portfolio. 
                            I will spend more time on the exercises and do some extra reading.
                        </p>
                        
                        <h4 class="h-center">What are my blockers?</h4>
                        <p>  
                            Time is a blocker and timing is as well. 
                            It can be a bit discouraging to come home after work and then put in several hours of homework and then realize that my whole evening is gone. 
                            I need to read more on Sunday and Monday evening.
                        </p>
                    </div>
                </div>`,
            next: 
                `<div class="tasks">
                    <h3 class="tasks-header h-center">
                        Next Steps
                    </h3>
                    <ol class"num-list">
                        <li><span class="task-txt">Add more examples to my portfolio</span> </li>
                        <li><span class="task-txt">Request a reveiw from the Instructor</span></li>
                        <li><span class="task-txt">Make my Portfolio site more Responsive</span></li>
                    </ol>
                </div>
                `
        },
        {
            week: 'w3',
            title: 'Week 3',
            reading: {
                subjects: `
                    <div class="subject-list">
                        <h3 class="subjects-header h-center">Study Subjects</h3>
                        <ul>
                            <li>Object Methods: this.</li>
                            <li>This in Javascript</li>
                            <li>Ch5: Objects</li>
                            <li>Ch6: Document Object Model</li>
                            <li>Ch7: Events</li>
                            <li>This code sandbox Ch14-15</li>
                        </ul>
                    </div>`,
                
                examples: `
                    <div class="examples-cont">
                        <div class="example">
                            <img class="example-img" src="./images/object_methods.png">
                        </div>
                    </div>
                    <div class="examples-cont">
                        <h3 class="section-header h-center">Team Activity:</h3>
                        <iframe src="./pages/w03_team_assignment.html" class="document-viewer"></iframe>
                    </div>
                `
            },
            notes: 
                ` <div class="notes-cont">
                <div class="notes-sub-cont">
                    <h3 class="notes-header">Reading Notes</h3>
                    <p> In ch:2 concerning the primitive data types I noticed that there was a type that I have never heard of or used, the Symbol. 
                        I have been developing web applications since 2008 and haven't ran across it. 
                        I liked the tyepof special character if helps in cases where I am trying to automate the processing of data from multiple sources. 
                        I can use typeof to tell me if it is a string, number, boolean, undefined or null. I have used it to determine is an element is an object or an array as well. 
                    </p>
                     <p> I have also noticed that there is a lot more push to use let and const. I still use var most of the time hopefully it will not go away.
                    </p>  
                    <p>    In ch3 I noticed that I need to study about sets, and Maps. 
                    </p>
                    <p>  
                        In ch4 I noticed that I don't like using arrow functions, they are challenging for me visually except for when I use a filter on an array. 
                        <p>
                            <code>
                                var list = [
                                
                                {first_name: "Aaron", last_name: "Ameny"},{first_name: "Jack", last_name: "Smith"}]
                                
                                list.filter(x => x.first_name == 'Aaron')[0]; 
                            </code>
                        </p>
                        <p>
                            This would bring back the first object with a first name of Aaron. 
                            For some reason this makes sense to me visually.
                        </p>
                    </p>
                    <h3 class="notes-header">Activity Notes</h3>
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
       /* if(link.sub_links){
            var ul = document.createElement("UL");
            nav.appendChild(ul);
            link.sub_links.forEach(function(sub_link){
                var sa = document.createElement("A");
                sa.text = sub_link.label;
                sa.href = sub_link.url;
                var li = document.createElement("LI");
                ul.appendChild(li);
                li.appendChild(sa);
                
            });
        }*/
         //or something of the likes
    });


}
