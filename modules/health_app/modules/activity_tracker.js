

export default class weight_tracker{
    constructor(){
        this.weigh_in_obj = {
            weight_in_id: 0,
            weight_in_date: '',
            weight_in_time: '',
            day: '',
            weight: '',
            notes: ''
        },
        this.weigh_ins = [];
        this.storage = {};
        
    }

    add_episode(episode){
        this.weigh_ins.add(episode);
    }
    

}