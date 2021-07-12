
export default class bmr{
    constructor(){
        this.bmr = {
            title: '<h4>BMR (Basal Metabolic Rate</h4>',
            example: `
                <p>BMR = 66 + (13.7 x weight in kg) + (5 x height in cm) - (6.8 x age in years)</p>
                <p>	How many calories you need everyday</p>
                <p>If you’ve estimated your BMR using the Harris-Benedict formula, 
                your next step is to include the number of calories you burn during 
                daily activities based on your lifestyle:</p>
                <p>Sedentary. If you get minimal or no exercise, multiply your BMR by 1.2.</p>
                <p>Lightly active. If you exercise lightly one to three days a week, multiply your BMR by 1.375.</p>
                <p>Moderately active. If you exercise moderately three to five days a week, multiply your BMR by 1.55.</p>
                <p>Very active. If you engage in hard exercise six to seven days a week, multiply your BMR by 1.725.</p>
                <p>	Extra active. If you engage in very hard exercise six to seven days a week or have a physical job, multiply your BMR by 1.9.</p>
                <p>	The final number is approximately how many calories you need on a daily basis to maintain your weight.</p>
                
            `,
            weight_factor: 13.7,
            height_factor: 5,
            age_factor: 6.8,
            male_rate: 66,
            female_rate: 655,
            
        },
        this.bmi = {
            title: '<h4>Calculating BMI Using the English System</h4>',
            example: `
                <p>Formula: weight (lb) / [height (in)]2 x 703</P>
                <p>Calculation: [weight (lb) / height (in) / height (in)] x 703</P>
                <p>	Let’s calculate Sam’s BMI using the English numeric system. His weight is 37 pounds and 4 ounces and his height is 41 1/2 inches.</p>
                <p>	Convert ounces and fractions to decimals:</p>
                <p>Weight of 37 lbs and 4 oz = 37.25 lbs (16 ounces = 1 pound so 4 oz/16 oz = 0.25).</p>
                <p>	Height = 41.5 in.</p>
                <p>	(37.25 lbs / 41.5 in / 41.5 in) x 703 = 15.2</p>
            `,
            weight: 0,
            height: 0,
            factor: 703 
        };
        this.net_carb = {
            title: '<h4>Total Carbs – Fiber = Net Carbs</h4>',
            example: `
                <p>Calculate net carbs with this simple equation:</p>
                <p>	37 grams of total carbs – 4 grams of dietary fiber = 33 grams of net carbs per serving</p>
                `
        }
        
        
    }

    add_episode(episode){
        this.weigh_ins.add(episode);
    }
}

export class bmi{
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