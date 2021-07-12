

export default class food{
    constructor(){
        this.title = '';
        this.type = '';
        this.notes = '';
        this.nutrition = {
            calories: 0,
            fat: 0,
            carbs: 0,
            sugar: 0,
            fiber: 0,
            sugar_alcohol: 0,
            protein: 0,
            sodium: 0,
            net_carbs: 0
        };
        this.measure = {
            unit: 'tbl',
            quantity: 0,
            metric_equiv: 0,
            serving_size: 0,
            serving_per_package: 0,
            cost_per_package: 0,
            cost_per_unit: 0
        };
    }

}