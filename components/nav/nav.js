
import css_links from './css_links.js';
import css_weeks from './css_weeks.js';
import wfe_links from './wfe_links.js';
import wfe_weeks from './wfe_weeks.js';


export default class nav{
    constructor(links, weeks) {
        this.nav_sel = document.getElementById('nav-links-sel');
        this.nav = document.getElementById('nav');
        this.top_header = document.getElementById('top-header');
        this.main = document.getElementById('main');
        this.links = links;
        this.weeks = weeks;
        
        this.nav_sel.addEventListener('change', (e) => {
            let val = this.nav_sel.value;
            localStorage.setItem("lastSelect", val);
            switch(val){
                case 'css':
                    this.links = css_links;
                    this.weeks = css_weeks;
                    break;
                case 'wfe':
                    this.links = wfe_links;
                    this.weeks = wfe_weeks;
                    break;
            }
            this.nav.innerHTML = '';
            this.loadNav();
        });
        let lastSelect = localStorage.getItem('lastSelect');
        if(lastSelect){
            this.nav_sel.value = lastSelect;
            if(lastSelect == 'css'){
                this.links = css_links;
                this.weeks = css_weeks;
            }
        }
        this.loadNav();
        
    }

    loadNav(){
        //alert(JSON.stringify(this.links) + ' ' + JSON.stringify(this.weeks));
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
            //h4.classList.add('nav-link-header');
            h4.id = 'head-link-' + link.week;
            h4.appendChild(a_top);
            div_link_cont.appendChild(h4);
            sub_links.classList.add('sub-links-cont');
            //sub_links.classList.add('hide');
            
            let week = me.weeks.filter(x => x.week == link.week)[0];
            sub_links.id = 'sub_link_' + link.week; 
            Object.keys(week).forEach(function(key, index){
                if(key != 'week' && key != 'title'){
                    let a_child = document.createElement('A');
                    a_child.text = me.setCap(key);
                    a_child.id = link.week + '-' + key;
                    a_child.classList.add('sub-link');
                    
                    a_child.href = key;
                    a_child.addEventListener('click', function(event){
                        event.preventDefault();
                        localStorage.setItem("lastSubLink", key);
                        let subs = document.querySelectorAll('.sub-link');
                        subs.forEach(function(sub_c){
                            if(sub_c.classList.contains('sub-active')){
                                sub_c.classList.remove('sub-active');
                            }
                        });
                        a_child.classList.add('sub-active');
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
                //a_top.classList.('active');
                localStorage.setItem("lastPage", link.week);
                let sub_link_list = document.querySelectorAll('.sub-links-cont');
                let top_links = document.querySelectorAll('.head-link-a');
                sub_link_list.forEach(function(sub, index){
                    if(sub.id !== sub_links.id){
                        sub.classList.add('hide');
                        sub.style.maxHeight = null;
                        top_links[index].classList.remove('active');
                    }
                   /* else if(sub.id == sub_links.id && sub.classList.contains('hide')){
                        me.loadPage(week, 'reading');
                        sub_links.classList.remove('hide');
                        sub_links.style.maxHeight = sub_links.scrollHeight + "px";
                        top_links[index].classList.add('active');
                    }*/
                    
                });
                if(!a_top.classList.contains('active')){
                    me.loadPage(week, 'reading');
                    sub_links.classList.remove('hide');
                    sub_links.style.maxHeight = sub_links.scrollHeight + "px";
                    a_top.classList.add('active');
                }
                /*else{
                    sub_links.classList.add('hide');
                    sub_links.style.maxHeight = null;
                    a_top.classList.remove('active');
                }*/
                
            });
            var lastPageNav = localStorage.getItem("lastPage");
            let sub_last = localStorage.getItem("lastSubLink");
            if(sub_last == undefined){
                sub_last = 'examples';
            }
            if(lastPageNav == link.week ){
                let sub_lnk = document.getElementById(link.week + '-' + sub_last);
                sub_lnk.classList.add('sub-active');
                me.loadPage(week, sub_last);
                
               if (sub_links.style.maxHeight) {
                    sub_links.style.maxHeight = null;
                    sub_links.classList.add('hide');
                    a_top.classList.remove('active');
                } 
                else {
                    sub_links.style.maxHeight = sub_links.scrollHeight + "px";
                    sub_links.classList.remove('hide');
                    a_top.classList.add('active');
                } 
                
            }
            
           // }
        });
    }
    loadPage(week, link){
        let me = this;
      
        me.top_header.style.opacity = '0';
        me.main.style.opacity = '0';
       
        window.setTimeout(function(){
            me.top_header.innerHTML = week.title;
            me.main.innerHTML = week[link];
            me.top_header.style.opacity = '1';
            me.main.style.opacity = '1';
       },500);
        

        let show_links = document.querySelectorAll('.show-link')
        show_links.forEach(function(show_link){
            show_link.addEventListener('click', function(event){
                event.preventDefault();
                let ele = event.target;
                let parent = ele.parentNode;
                //alert(parent.tagName);
                //alert(ele.tagName);
                let closest = parent.querySelector('.child');
                //alert(closest.innerHTML);
                closest.classList.toggle('hide');
            });
        });
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

  
   
 
       
        
