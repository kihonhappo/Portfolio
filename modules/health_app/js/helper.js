
export const week_days = [
    {name: 'Sunday',number: 0},
    {name: 'Monday',number: 1},
    {name: 'Tuesday',number: 2},
    {name: 'Wednesday',number: 3},
    {name: 'Thursday',number: 4},
    {name: 'Friday',number: 5},
    {name: 'Saturday',number: 6}
];

export const campaign_goals = [
    'Fat Loss',
    'Muscle Gain',
    'Weight Loss',
    'Weight Gain',
    'Flexibility Gain',
    'Decrease Inflamation'
];

export const meal_type = [
    'Breakfast',
    'Dinner',
    'Snack',
    'Lunch',
    'Desert',
    'All Day'
];

export const diet_plans = [
    'Low Carb',
    'Plant Based',
    'Vegitarian',
    'Vegan',
    'Atkins'
];

export const food_type = [
    'Protein',
    'Vegitable',
    'Dairy',
    'Nuts/Seeds',
    'Fats/Oils',
    'Fruit',
    'Berries',
    'Sugar',
    'Supplament',
    'Vitamin',
    'Drug',
    'Legume',
    'Grain/Cereal/Bread'
];

export const activity_level = [
    'Rest',
    'Light',
    'Moderate',
    'Vigorous'
];

export const gender = [
    'Female',
    'Male'
];

export const measure_units = [
    {name: 'Cup',abbr: 'c'},
    {name: 'Tablespoon',abbr: 'Tbsp'},
    {name: 'Teaspoon',abbr: 'tsp'},
    {name: 'Pound',abbr: 'lb'},
    {name: 'Ounce',abbr: 'oz'},
    {name: 'Quart',abbr: 'qt'},
    {name: 'Teaspoon',abbr: 'tsp'},
    {name: 'Teaspoon',abbr: 'tsp'},
    {name: 'Teaspoon',abbr: 'tsp'},
    {name: 'Teaspoon',abbr: 'tsp'},
    
];

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

export function getJSON(url){
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                
                return response.json();
            }
            //console.log(response.json());
        })
        .catch(function(error) {
            console.log(error);
        });
}

/* This function allows me to control the date formats incase I need to send data back to an API or DB 
    that needs date datatypes to be a cerain format */
    export function processDate(format_type, dte){
        let return_dte = dte;
        if(dte){
            let d = dte.getDate();
            let m = dte.getMonth() + 1;
            let y = dte.getFullYear().toString();
            return_dte = y + '-' + m + '-' + d;
            switch(format_type){
                case 'server':
    
                    break;
                case 'client':
                    return_dte = m + '-' + d + '-' + y;
                    break;
            }
        }
        return return_dte;
      }
