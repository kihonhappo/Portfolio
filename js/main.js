const links = [
    {
        week: "w1",
        label: "Week 1 Notes",
        url: "week1/index.html"
    }
  ]
var ol = document.getElementById('table-contents');
links.forEach(function(link){
    var label = document.createElement("LABEL");
    var a = document.createElement("A");
    var li = document.createElement("LI");
    a.text = link.label;
    a.href = link.url;
    //li.appendChild(label);
    li.appendChild(a);
    ol.appendChild(li);
});