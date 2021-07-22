

export default class DayTracker{
    constructor(){
        this.template = `   
            <div class="day-tracker-cont">
                <input type="image" id="avatar" alt="Avatar" src="../images/avatar.png">
            </div>
        `;
        this.weigh_ins = [];
        this.storage = {};
        
    }

    add_episode(episode){
        this.weigh_ins.add(episode);
    }
    

}