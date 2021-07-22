

export default class MealTracker{
    constructor(){
        
        this.items = [];
        this.storage = {};
        
    }

    add_episode(episode){
        this.meals.add(episode);
    }

    delete_episode(episode){
        this.meals = this.meals.filter(x => x != episode);
    }
    

}