
import Person from '../objects/person.js';
import SleepTracker from '../modules/sleep_tracker.js';
import WeightTracker from '../modules/weight_tracker.js';
import Food from '../objects/food.js';
import Meal from '../objects/meal.js';
import MealTracker from '../modules/meal_tracker.js';
import ActivityTracker from '../modules/activity_tracker.js';
import Activity from '../objects/activity.js';
import ActivityPlan from '../objects/activity_plan.js';
import Campaign from '../objects/campaign.js';
import Avatar from '../modules/avatar.js';

export default class Model{
    constructor(){
        this.person = new Person();
        this.avatar = new Avatar();
        this.sleep_tracker = new SleepTracker();
        this.weight_tracker = new WeightTracker();
        this.meal_tracker = new MealTracker();
        this.meal = new Meal();
        this.food = new Food();
        this.activity = new Activity();
        this.campaign = new Campaign();
        this.activity_plan = new ActivityPlan();
        this.activity_tracker = new ActivityTracker();
        this.icons = [];
        this.fdc_api = {
            api_key: 'api_key=IyUO5cDK5RwaCKw2kbGw0UJmHbyFlFn1ejnKJFJd',
            base_url: 'https://api.nal.usda.gov/fdc',
            version: '/v1/',
            food: '',
            endpoints: {
                get: ['food/','foods','foods/list','foods/search','json-spec','ymal-spec'],
                post: ['foods','foods/list','foods/search']
            },
            example: 'https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=IyUO5cDK5RwaCKw2kbGw0UJmHbyFlFn1ejnKJFJd'
        }

        let api = this.fdc_api;
        this.getFoodCats = api.base_url + api.version + api.endpoints.get[2] + '?' + api.api_key; 
       // alert('model');
       console.log(this.fetchFood(this.fdc_api.example));
    }

    async fetchFood(url){
        const res = await fetch(url);
        const json = await res.json();
        
        return json;
    }

    getJSON(view, url){
        fetch(url)
        .then(response => response.json())
        .then(result => {
            //alert('Model: Sub End Points: after fetch' + JSON.stringify(result));
            /*vi.debugger.changeBuggerTitle('getApi: sub-end-point: ' + vi.selected_api.name);
            vi.debugger.loadBugger(JSON.stringify(result));*/
            //vi.selected_api.subEndPoints = result;
            
            //view.loadSubEndPoints(vi.selected_api, result);
        }); 
    }
    checkStorage(id){
        return this.getLocalStorage(id);
    }
    save(frm){
        let id = frm.id;
        let msg = '';
        switch(id){
            case 'person':
                this.person.state = 'active';
                this.person.data.forEach(function(item){
                    item.value = frm.querySelector('[name=' + item.name + ']').value;
                }); 
                msg = 'Profile created successfully!';
                break;
        }
        localStorage.setItem(id, JSON.stringify(this[id]));
        return `<span class="green">${msg} saved</span>`;
    }

    delete(id){
        localStorage.removeItem(id);
        return `<span class="green">Item deleted successfully</span>`;
    }

    getLocalStorage(name){

        return localStorage.getItem(name);
    }
    getPerson(){
        return this.person;
    }
    getAvatar(){
        return this.avatar;
    }
    getCampaign(){
        return this.campaign;
    }

    getFood(view){
        view.main.innerHTML = JSON.stringify(this.fetchFood(this.fdc_api.example));
    }
}