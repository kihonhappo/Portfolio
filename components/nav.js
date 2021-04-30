const links = [
    {
        week: "w1",
        label: "Week 1 Notes",
        url: "weeks/week1.js"
    },
    {
        week: "w2",
        label: "Week 2 Notes",
        url: "weeks/week2.js",
        
    }
  ]

    var questions_title = document.getElementById('questions-title');
    var questions_content = document.getElementById('questions-content');  
    var main_content_title = document.getElementById('main-content-title');
    var main_content = document.getElementById('main-content');
    var nav = document.getElementById('nav');
    links.forEach(function(link){
        var label = document.createElement("LABEL");
        var a = document.createElement("A");
        //var li = document.createElement("LI");
        a.text = link.label;
        a.href = link.url;
        //li.appendChild(label);
        //li.appendChild(a);
        nav.appendChild(a);
        //var id = document.getElementById("31");

        a.addEventListener("click",function(e){
            e.preventDefault();
            if (!document.getElementById(link.week)) {
                var script = document.createElement('script');
                /*script.onload = function () {
                    //do stuff with the script
                };*/
                script.src = link.url
                script.id = link.week;
                document.head.appendChild(script);
            }
            
         });
         //or something of the likes
    });



