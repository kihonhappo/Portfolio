

export default class SleepTracker{
    constructor(){
        this.sleep_obj = {
            sleep_id: 0,
            sleep_date: '',
            sleep_start: '',
            sleep_end: '',
            hours: '',
            day_of_week: '',
            wake_ups: [],
            notes: ''
        },
        this.sleep_episodes = [];
        this.storage = {};
        
    }

    add_episode(episode){
        this.sleep_episodes.add(episode);
    }

}