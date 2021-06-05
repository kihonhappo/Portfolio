//create an array of hikes

import Comment from './comment.js';
const comm = new Comment();
let comment_list = [];

export default class hikes {

  constructor(){
    if(window.location.hostname.indexOf('github') > -1){
      
    }
    this.imgBasePath = "/images/";
    this.hikes = [
      {
        id: 'bechler_falls',
        name: "Bechler Falls",
        imgSrc: "bechler_falls.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "3 miles",
        difficulty: "Easy",
        description:
          "Beautiful short hike along the Bechler river to Bechler Falls",
        directions:
          "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
        comments: []
      },
      {
        id: 'teton_canyon',
        name: "Teton Canyon",
        imgSrc: "teton_canyon.jpg",
        imgAlt: "Image of Teton Canyo",
        distance: "3 miles",
        difficulty: "Easy",
        description: "Beautiful short (or long) hike through Teton Canyon.",
        directions:
          "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
        comments: [
          {id: 0,comment: "It was super hard",created: '5/23/2021',hike:'teton_canyon',author: ''},
          {id: 1,comment: "It was super hard again",created: '5/26/2021',hike:'teton_canyon',author: ''},
        ]
      },
      {
        id: 'dunanda_falls',
        name: "Dunanda Falls",
        imgSrc: "dunanda_falls.jpg",
        imgAlt: "Image of Dunanda Falls",
        distance: "7 miles",
        difficulty: "Moderate",
        description:
          "Beautiful hike through Bechler meadows river to Denanda Falls",
        directions:
          "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
        comments: []
      }
    ];

    
  }
  

  showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    let hikes = this.getList('hikes');
    this.renderHikeList(hikes, hikeListElement);
  }

  renderHikeList(hikes, parent) {
    let vi = this;
    hikes.forEach(hike => {
      parent.appendChild(vi.renderOneHike(hike));
      let addBtn = document.getElementById('addItem-' + hike.id);
      let newItem = document.getElementById('item-input-' + hike.id);
      addBtn.addEventListener('click', function(event){
            event.preventDefault();
           // alert('inside');
            vi.addItem(newItem, hike, hikes);
        });
      
      newItem.addEventListener('keyup', function(event){
            if(event.target.value != ''){
                addBtn.classList.add('active');
            }
            else{
                addBtn.classList.remove('active');
            }
        });
        let clear = document.getElementById('clearAll-' + hike.id).addEventListener('click', function(event){
            event.preventDefault();
            vi.clearList(hike, hikes);
        });
        let cks = document.querySelectorAll('.items');
        cks.forEach(function(ck){
            ck.addEventListener('click', function(event){
                event.preventDefault();
                let parent = event.target.parentNode;
                let ele = event.target;
                //vi.debug.changeBuggerTitle('Todo Item Attributes'); 
               // vi.debug.loadBugger('TagName: ' + ele.tagName + ' ClassList: ' + ele.classList);
                if(ele.classList.contains('delete')){
                    let del = ele;
                    let id = del.id.split('delete_')[1];
                    vi.deleteItem(id, hike, hikes);
                }
               // else if(ele.classList.contains('todo-text')){
                    //let edit = document.querySelector('.todo-text');
                    //let id = edit.id.split('_')[1];
                   // vi.editItem(edit);
               //}
               /*else{
                    let ck_child = parent.querySelector('input[type="checkbox"]');
                    let id = ck_child.id.split('_')[1];
                    vi.changeItemStatus(id);
                }*/
              
            });
        });
    });
    
  }

  renderOneHike(hike) {
    const item = document.createElement("li");
    //item.classList;
    item.innerHTML = ` 
       
          <h2>${hike.name}</h2>
          <div class="grid-2-columns">
            <div class="image">
              <img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
            </div>
            <div class="details">
              <h3>Distance</h3>
              <p>${hike.distance}</p>
              <h3>Difficulty</h3>
              <p>${hike.difficulty}</p>
            
              <div id="${hike.id}-comments" class="comments-cont">
                <div class="input-cont">
                  <input type="text" id="item-input-${hike.id}" tabindex="0" class="input-comm" placeholder="Keydown">
                  <div role="button" id="addItem-${hike.id}" class="btn btn-add">
                    +
                  </div>
                </div>
                <div class="active-comm">
                  <p class="status busy"><span id="active-cnt-${hike.id}">${hike.comments.length}</span> comments.</p>
                  <ul id="active-items-${hike.id}" class="comment-list items">
                    ${this.loadList(hike.comments)}
                  </ul>
                </div>
                <div class="footer">
                  <div class="control-buttons">
                    <div id="clearAll-${hike.id}" class="btn btn-secondary">Clear Items</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `;

    return item;
     
  }
  deleteItem(id, hike, hikes){
    //alert(id);
    let list = hike.comments;
    hike.comments = list.filter(x => x.id != id);
    this.saveList(hikes);
    this.refreshList(hike);
  }
  saveEditItem(){
    let list = this.getList();
    list.items = list.items.filter(x => x.id != id);
    this.saveList(list);
  }
  addItem(item, hike, hikes){
    let newcomm = {};
    newcomm.id = hike.comments.length + 1;
    newcomm.hike = hike.id;
    newcomm.comment = item.value;
    newcomm.created = new Date();
    newcomm.id = hike.id + '_' + hike.comments.length + new Date().getTime();
    item.value = '';
    hike.comments.push(newcomm);
    this.saveList(hikes);
    this.refreshList(hike);
    item.focus();
    
  }
  createID(){
    let list = this.getList();
    list.next_id = list.next_id + 1;
    this.saveList(list);
    return list.next_id;
  }
  saveList(list){
      //alert('save');
      localStorage.setItem("hikes", JSON.stringify(list));
      
  }
  getCnt(status){
    let list = this.getList();
    list = list.items.filter(x => x.status == status);
    return list.length;
  }
  getList(){
    
      let list = localStorage.getItem("hikes");
      if(list){
          list = JSON.parse(list);
      }
      else{
          list = this.hikes;
      } 
      return list;
  }
  clearList(hike, hikes){
      hike.comments = [];
      this.saveList(hikes);
      this.refreshList(hike);
  }
  loadList(list){
    let comment_li = '';
    if(list.length > 0){
      list.forEach(function(item){
        comment_li += comm.createItem(item);
      });
    }
    
    return comment_li;
  }
  refreshList(list){
    let ul = document.getElementById('active-items-' + list.id);
    ul.innerHTML = '';
    let comment_li = '';
    if(list.comments.length > 0){
      list.comments.forEach(function(item){
        comment_li += comm.createItem(item);
      });
    }
    ul.innerHTML = comment_li;
    document.getElementById('active-cnt-' + list.id).textContent = list.comments.length;
  }
}
