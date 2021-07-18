
export class BMR{
    constructor(){
        this.title = '<h4>BMR (Basal Metabolic Rate</h4>';
        this.example = `
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
        `;
        this.weight_factor = 13.7;
        this.height_factor = 5;
        this.age_factor = 6.8;
        this.male_rate = 66;
        this.female_rate = 655;
        this.life_style_factors = [
            {name: 'Sedentary',factor: 1.2},
            {name: 'Light',factor: 1.375},
            {name: 'Moderate',factor: 1.55},
            {name: 'Very',factor: 1.725},
            {name: 'Extra',factor: 1.9}
        ];

        
    }
    calc_bmr(gender, wt, ht, age, level){
       // alert(gender + ' ' + wt + ' ' + ht + ' ' + age + ' ' + level);
        ht = ht * 2.54;
        wt = wt / 2.2;
        let value = 0;
        let level_rate = this.life_style_factors.filter(x => x.name == "Sedentary")[0].factor;
        if(gender == 'f'){
           value = this.female_rate + (this.weight_factor * parseInt(wt)) + (this.height_factor * parseInt(ht)) - (this.age_factor * parseInt(age));
        }
        else{
           value = this.male_rate + (this.weight_factor * parseInt(wt)) + (this.height_factor * parseInt(ht)) - (this.age_factor * parseInt(age));
        }
        //alert(level_rate);
        return value;// * level_rate;
    }
}

export class BMI{
    constructor(){
        this.title = '<h4>Calculating BMI Using the English System</h4>';
        this.example = `
                <p>Formula: weight (lb) / [height (in)]2 x 703</P>
                <p>Calculation: [weight (lb) / height (in) / height (in)] x 703</P>
                <p>	Let’s calculate Sam’s BMI using the English numeric system. His weight is 37 pounds and 4 ounces and his height is 41 1/2 inches.</p>
                <p>	Convert ounces and fractions to decimals:</p>
                <p>Weight of 37 lbs and 4 oz = 37.25 lbs (16 ounces = 1 pound so 4 oz/16 oz = 0.25).</p>
                <p>	Height = 41.5 in.</p>
                <p>	(37.25 lbs / 41.5 in / 41.5 in) x 703 = 15.2</p>
            `;
            this.factor = 703; 
        
    }

    calc_bmi(wt, ht){
        return ((wt / ht / ht) * 703).toFixed(2);
    }
}

export class NetCarb{
    constructor(){
        this.title = '<h4>Total Carbs – Fiber = Net Carbs</h4>',
        this.example = `
            <p>Calculate net carbs with this simple equation:</p>
            <p>	37 grams of total carbs – 4 grams of dietary fiber = 33 grams of net carbs per serving</p>
        `;
        
    }

    calc_netCarbs(carbs, fiber){
        return carbs - fiber;
    }
}