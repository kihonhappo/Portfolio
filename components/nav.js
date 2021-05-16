
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
        active: true,
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
                scripts() {
                    
                },
                examples: `
                    <div class="examples-cont ht-300">
                        <h3 class="section-header h-center">Story Editor:</h3>
                        <iframe src="./pages/story_editor.html" class="document-viewer"></iframe>
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
                                   <pre>
                                    <div class="code-cont">
                                        <code class="code-box">
                                            // and finishing at the end of the line:
                                         // this is a short comment
                                          
                                        </code>
                                    </div>
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
                            <pre>
                                <div class="code-cont">
                                    <code class="code-box">
                                        var list = [
                                        {first_name: "Aaron", last_name: "Ameny"},{first_name: "Jack", last_name: "Smith"}]
                                        list.filter(x => x.first_name == 'Aaron')[0]; 
                                    </code>
                                </div>
                            </pre>
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
                        <ol class="reading-outline">
                            <li>Object Methods: this.</li>
                            <li>This is Javascript</li>
                            <li>Ch5: Objects</li>
                            <li>Ch6: Document Object Model</li>
                            <li>Ch7: Events</li>
                            <li>This code sandbox Ch14-15</li>
                        </ol>
                    </div>`,
                
                examples: `
                    <div class="examples-cont">
                        <div class="example">
                            <h3 class="section-header h-center">Objects Methods:</h3>
                            <pre>
                                <div class="code-cont">
                                    <code class="code-box">
                                        let user = {
                                            name: "John",
                                            age: 30,
                                        
                                            sayHi() {
                                            // "this" is the "current object"
                                            alert(this.name);
                                            }
                                        
                                        };
                                        
                                        user.sayHi(); // John
                                    </code>
                                </div>
                            </pre>
                        </div>
                        <div class="example">
                            <h3 class="section-header h-center">Ch5: Objects:</h3>
                            <p>
                                An object in JavaScript is a self-contained set of related values and functions. 
                                They act as a collection of named properties that map to any JavaScript value such as strings, 
                                numbers, booleans, arrays and functions. If a property’s value is a function, it is known as a method.
                            </p>
                            <p>
                                One way to think about an object is that it’s like a dictionary where you look up a property name 
                                and see a value. It's like a database of values (in fact, some databases use JavaScript objects to 
                                store information). JavaScript objects are similar to a hash or associative array in other programming 
                                languages (or even a JavaScript map ). They are, however, much more flexible, as they can be employed to 
                                encapsulate code that can be reused throughout a program. They can also inherit properties from other 
                                objects in a similar way to object-oriented languages.         
                            </p>
                            <p>
                                Objects are often used to keep any related information and functionality together in the same place. 
                                For example, if you wrote functions that found the perimeter and area of a square, you might want to 
                                group them together as methods of the same object that also included a length property.
                            </p>
                            <pre>
                                <div class="code-cont">
                                    <code class="code-box">
                                        const superman = {
                                            name: 'Superman',
                                            'real name': 'Clark Kent',
                                            height: 75,
                                            weight: 235,
                                            hero: true,
                                            villain: false,
                                            allies: ['Batman','Supergirl','Superboy'],
                                            fly() {
                                                return 'Up, up and away!';
                                            }
                                        };
                                    </code>
                                </div>
                            </pre>
                        </div>
                        <div class="example">
                            <h3 class="section-header h-center">Ch5: Computed Properties:</h3>
                            <p>
                                The ability to create objects with computed property keys was introduced in ES6. This means that 
                                JavaScript code can be placed inside square brackets and the property key will be the return value of 
                                that code. This can be seen in the example below where the + operator is used to concatenate the 
                                strings 'catch' and 'phrase':
                            </p>
                            <p>
                                The value of a property has always been allowed to be a JavaScript expression. 
                                In the example below a ternary operator is used to return a true or false value for the hero property 
                                depending on the value of the bewitched variable:      
                            </p>
                            <pre>
                                <div class="code-cont">
                                    <code class="code-box">
                                        const bewitched = true;
                                        const captainBritain = { name: 'Captain Britain', hero: bewitched ? false : true };
                                        captainBritain
                                        << { name: 'Captain Britain', hero: false }
                                    </code>
                                </div>
                            </pre>
                            <p>
                                The new Symbol date type can also be used as a computed property key:
                            </p>
                            <pre>
                                <div class="code-cont">
                                    <code class="code-box">
                                        const name = Symbol('name');
                                        const supergirl = { [name]: 'Supergirl' };
                                    </code>
                                </div>
                            </pre>
                        </div>
                        <div class="example">
                            <h3 class="section-header h-center">Ch5: Finding all the Properties of an Object:</h3>
                            <p>
                                We can loop through all of an object’s properties and methods by using a for in loop. For example, 
                                to log all the properties of the superman object to the console, we could use:
                            </p>
                            <pre>
                                <div class="code-cont">
                                    <code class="code-box">
                                        for(const key in superman) {
                                            console.log(key + ": " + superman[key]);
                                        }
                                        << "name: Superman"
                                        << "real name: Clark Kent"
                                        << "height: 75"
                                        << "weight: 235"
                                        << "hero: true"
                                        << "villain: false"
                                        << "allies: Batman,Supergirl,Superboy"
                                        << "fly: function (){
                                            console.log(\"Up, up and away!\");
                                        }"
                                    </code>
                                </div>
                            </pre>
                            <p>
                                The new Symbol date type can also be used as a computed property key:
                            </p>
                            <pre>
                                <div class="code-cont">
                                    <code class="code-box">
                                        const name = Symbol('name');
                                        const supergirl = { [name]: 'Supergirl' };
                                    </code>
                                </div>
                            </pre>
                        </div>
                    </div>
                    <div class="examples-cont">
                        <h3 class="section-header h-center">Team Activity:</h3>
                        <iframe src="./pages/w03_team_assignment.html" class="document-viewer"></iframe>
                    </div>
                `
            },
            notes: `
                <div class="notes-cont">
                    <div class="notes-sub-cont">
                        <h3 class="notes-header">Reading Notes</h3>
                        <div class="reading-subjects">
                            <label class="reading-sub-label">Objecrts Methods</label>
                            <p> In ch:2 concerning the primitive data types I noticed that there was a type that I have never heard of or used, the Symbol. 
                                I have been developing web applications since 2008 and haven't ran across it. 
                                I liked the tyepof special character if helps in cases where I am trying to automate the processing of data from multiple sources. 
                                I can use typeof to tell me if it is a string, number, boolean, undefined or null. I have used it to determine is an element is an object or an array as well. 
                            </p>
                        </div>
                        <div class="reading-subjects">
                            <label class="reading-sub-label">Ch5: Objects</label>
                            <p> 
                                I love to use objects in javascript. One thing I have not used is the computed property. 
                            </p>
                        </div>
                        <div class="reading-subjects">
                            <label class="reading-sub-label">Ch6: Document Object Model</label>
                            <p> 

                            </p>
                        </div>
                        <div class="reading-subjects">
                            <label class="reading-sub-label">Ch7: Events</label>
                            <p> 
                           
                            </p>
                        </div>
                        <div class="reading-subjects">
                            <label class="reading-sub-label">This code sandbox Ch14-15</label>
                            <p> 
                            
                            </p>
                        </div>
                    </div>
                    <div class="notes-sub-cont">
                        <h3 class="notes-header">Activity Notes</h3>
                        <p> 
                            I did more tutorials on GitHub and am now much more comfortable with commiting and uploading code changes to the GitPages
                            where my Portfolio is hosted. I have not used sub version software in the past so this is a great experience for me to 
                            broaden my resume and to better streamline my coding practices.
                        </p>
                    </div>
                    <div class="notes-sub-cont">
                        <h3 class="notes-header h-center">Team Assignment Notes</h3>
                        <p>
                            Group 4 met on Wednesday 5/5/2021 from 7:45pm to 9:00pm CST. 
                            We pretty much worked on the assignment together. I had the first 4 completed before the meeting and was able 
                            to compete exercises 4, 5 and 7. I was able to help with some of the group members but since I do have quite a bit more
                            experience with programming and specifically with javascript, I didn't want to answer all of the questions. I held back and 
                            let some of the other students teach and learn from each other. When the group seemed to get stuck for an extendend amount of time
                            I would step in and give some direction. 
                        </p>
                        <p>
                            Erin hosted the meeting using zoom and like last week she was a great tutor for the group.
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
                        <li><span class="task-txt completed">Add more examples to my portfolio</span> <i class="fas fa-check green"></i>  </li>
                        <li><span class="task-txt">Request a reveiw from the Instructor</span> <i class="fas fa-times red"></i> </li>
                        <li><span class="task-txt completed">Make my Portfolio site more Responsive</span> <i class="fas fa-check green"></i> </li>
                    </ol>
                </div>
                <div class="report">
                    <h3 class="report-header h-center">
                       Week 3 Report
                    </h3>
                    <div>
                        <h4 class="h-center">What did I do since the last meeting?</h4>
                        <p>
                            I was having a hard time deciding on how to seperate my assignment and exercise pages from my main index page
                            so I have decided to create each example and assignment page as a seperate html page and then link an
                            iframe to it. This way I can include them in the body of my front end page and the user doesn't need to 
                            navigate away. I spent a lot more time on the css for the site and tried to make it more pleasant to use.
                        </p>
                        <h4 class="h-center">What am I going to do next?</h4>
                        <p> 
                            I will not go off on tangents but stick to the assignments. Going out of scope cost me too much time so I will be more 
                            strict when it comes to spending my time.
                        </p>
                        
                        <h4 class="h-center">What are my blockers?</h4>
                        <p>  
                        I spent a lot of time on the Assignment this week. I ended up spending most of my time on Exercise 6.
                        I learned that Wikipedia has a great API, so I tried to get the Category: Boulevards in Paris page from the API. 
                        I was able to use the Javascript ajax functions to make calls to the Wiki web service but I couldn't get the actual page.
                        I finally followed the instructions and ran the code given to extract the array of links from the page using the console.
                        I then downloaded the log file after using console.log to record the array into the file. I then copied the array and 
                        pasted it into the Team Assignment code. After that I was able to quickly complete the exercise.
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
                        <li><span class="task-txt">Make sublinks for sections inside of the main section of the page as well as the 
                            right side of the page. Sublinks for examples, team assignments, Reading notes, tasks, and reports.
                        </span></li>
                    </ol>
                </div>
                `
        },
        {
            week: 'w4',
            title: 'Week 4',
            reading: {
                subjects: `
                <div class="subjects-cont">
                    <h3 class="subjects-header h-center">Chapter 2 Subjects</h3>
                    <ul>
                        <li>TChapter 8 - Forms (Links to an external site.)</li>
                        <li>Chapter 12 - OOP (Links to an external site.)</li>
                        <li>Chapter 15 - section on Modular JavaScript</li>
                    </ul>
                </div>`,
                
                examples: `
                <div class="examples-cont">
                    <h3 class="section-header h-center">W04 Individual Activity: Javascript Form Validation</h3>
                    <iframe src="./pages/w04_js_form_validation.html" class="document-viewer"></iframe>
                    
                </div>
                    
                <div class="examples-cont">
                    <h3 class="section-header h-center">W04 Team Activity:</h3>
                    <iframe src="./pages/tic_tac_toe.html" class="document-viewer ht-300"></iframe>
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
                </div>
                `,
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
      
                    const myObj = Object.assign({
                name: "Hello"
            }, {
                name: "World"
            }, {
                name: "!"
            });
            const result = myObj.name;
      
      
   window.onload = function(e){
    //alert(result);
        
    var nav = document.getElementById('nav');
    links.forEach(function(link, index){
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
           /* if(weeks[index].reading.scripts){
                //weeks[index].reading.scripts();
            }
            */
            
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
