const links = [
    {
        week: "w1",
        label: "Week 1 Notes",
        url: "week1/index.html",
        notes = `<div class="notes-content">
                    <h2>I am a Notes Title 1</h2>
                </div>
            `
    },
    {
        week: "w2",
        label: "Week 2 Notes",
        url: "week2/index.html",
        notes = `<div class="notes-content">
                    <h2>I am a Notes Title 2</h2>
                </div>
            `
    },
    {
        week: "w2 Team",
        label: "Week 2 Team Notes",
        url: "team/index.html",
        notes = `<div class="notes-content">
                    <h2>I am a Notes Title 2</h2>
                </div>
            `
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
    });

