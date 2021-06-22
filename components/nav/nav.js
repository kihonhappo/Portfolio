

export default class nav{
    constructor(weeks) {
        
        this.nav = document.getElementById('nav');
        this.weeks = weeks;
        this.top_header = document.getElementById('top-header');
        this.main = document.getElementById('main');
        this.links = [
            {
                week: "w1",
                label: "Week 1: Setup and Review",
                active: true,
                url: "weeks/week1.js"
            },
            {
                week: "w2",
                label: "Week 2: Review",
                active: true,
                url: "weeks/week2.js"
                
            },
            {
                week: "w3",
                label: "Week 3: Objects, Arrays",
                active: true,
                url: "weeks/week3.js"
            },
            {
                week: "w4",
                label: "Week 4: Modular, OOP & Forms",
                active: true,
                url: "weeks/week4.js",
                
            },
            {
                week: "w5",
                label: "Week 5: Testing & Debugging",
                active: true,
                url: "weeks/week4.js",
                
            },
            {
                week: "w6",
                label: "Week 6: Midterm Project",
                active: true,
                url: "weeks/week4.js",
                
            },
            {
                week: "w7",
                label: "Week 7: Hikes: Comments",
                active: true,
                url: "weeks/week4.js",
                
            },
            {
                week: "w8",
                label: "Week 8: AJAX and the CORS",
                active: true,
                url: "weeks/week4.js",
                
            },
            {
                week: "w9",
                label: "Week 9: Workflow",
                active: true,
                url: "weeks/week4.js",
                
            }
          ];
        this.loadNav();
    }

    loadNav(){
        let me = this;
        this.links.forEach(function(link, index){
            let div_link_cont = document.createElement('DIV');
            div_link_cont.classList.add('header-link-cont');
            let h4 = document.createElement('H4');
            h4.classList.add('link-parent');
            let a_top = document.createElement('A');
            let sub_links = document.createElement('DIV');
            a_top.text = link.label;
            a_top.href = '#' + link.week;
            a_top.classList.add('head-link-a');
            h4.text = 'link.label';
            h4.classList.add('nav-link-header');
            h4.id = 'head-link-' + link.week;
            h4.appendChild(a_top);
            div_link_cont.appendChild(h4);
            sub_links.classList.add('sub-links-cont');
            sub_links.classList.add('hide');
            
            let week = me.weeks.filter(x => x.week == link.week)[0];
            sub_links.id = 'sub_link_' + link.week; 
            Object.keys(week).forEach(function(key, index){
                if(key != 'week' && key != 'title'){
                    let a_child = document.createElement('A');
                    a_child.text = me.setCap(key);
                    a_child.classList.add('sub-link');
                    a_child.href = key;
                    a_child.addEventListener('click', function(event){
                        event.preventDefault();
                        me.loadPage(week, key);
                    });
                    sub_links.append(a_child);
                    
                }
            });
            div_link_cont.appendChild(sub_links);
           // if(link.active == true){
            me.nav.appendChild(div_link_cont);
            a_top.addEventListener("click", function(e){
                e.preventDefault();
                localStorage.setItem("lastPage", link.week);
                let sub_link_list = document.querySelectorAll('.sub-links-cont');
                sub_link_list.forEach(function(sub){
                    if(sub.id != sub_links.id && !sub.classList.contains('hide')){
                        sub.classList.add('hide');
                    }
                });
                me.loadPage(week, 'reading');
                sub_links.classList.toggle('hide');
            });
            var lastPageNav = localStorage.getItem("lastPage");
            if(lastPageNav == link.week){
                me.loadPage(week, 'reading');
                sub_links.classList.toggle('hide');
            }
           // }
        });
    }
    loadPage(week, link){
        
        this.top_header.innerHTML = week.title;
        this.main.innerHTML = week[link];
       // document.getElementById('right').innerHTML = ;
        
          //alert('Done');
    }
    setCap(key){
        if(key.indexOf('_') > -1){
            key = key.split('_');
            key[0] = key[0][0].toUpperCase() + key[0].slice(1);
            key[1] = key[1][0].toUpperCase() + key[1].slice(1);
            key = key.join(' ');
        }
        else{
            key = key[0].toUpperCase() + key.slice(1);
        }
        return key;
    }

}

  
   
 
       
        
