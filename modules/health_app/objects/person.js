
export default class person {
    constructor() {
        this.state = 'new',
        this.preferences = {
            burn_direction: 'down'
        },
        this.data = [
            {   
                name: 'Person_ID', 
                label: 'Person ID',
                default: '',
                value: '',
                type: 'hidden',
                ctrl: 'hidden',
                disabled: true,
                required: false,
                source: 'user:concat:First_Name+_+Last_Name+timestamp'
            },
            {   
                name: 'First_Name',
                label: 'First Name',
                placeholder: '',
                default: '',
                value: '',
                type: 'text',
                ctrl: 'textbox',
                disabled: false,
                required: true,
                source: 'user'                
            },
            {   
                name: 'Last_Name',
                label: 'Last Name',
                placeholder: '',
                default: '',
                value: '',
                type: 'text',
                ctrl: 'textbox',
                disabled: false,
                required: true,
                source: 'user'
            },
            {   name: 'DOB',
                label: 'Birthdate',
                placeholder: '',
                default: '',
                value: '',
                type: 'date',
                ctrl: 'datepicker',
                disabled: false,
                required: true,
                source: 'user'
            },
            {   
                name: 'Age',
                label: 'Age',
                default: 0,
                value: 0,
                type: 'number',
                ctrl: 'textbox',
                disabled: true,
                required: true,
                source: 'user:calc:age'
            },
            {   
                name: 'Height',
                label: 'Height <span class="green">(inches)</span>',                
                placeholder: 'Height in Inches',
                default: 0,
                value: 0,
                type: 'number',
                ctrl: 'textbox',
                disabled: false,
                required: true,
                source: 'user'
            },
            {   
                name: 'Weight',
                label: 'Weight <span class="green">(lbs)</span>',
                placeholder: 'Enter Weight in Lbs',
                default: 0,
                value: 0,
                unit: 'imperial',
                type: 'number',
                ctrl: 'textbox',
                disabled: false,
                required: true,
                source: 'user'
            },
            {   
                name: 'Gender',
                label: 'Gender',
                list: 'gender',
                default: 0,
                value: '',
                type: "select",
                ctrl: 'select',
                disabled: false,
                required: true,
                source: 'user'
            },
            {   
                name: 'BMR',
                label: 'B.M.R.',
                default: 0,
                value: 0,
                type: 'number',
                ctrl: 'textbox',
                disabled: true,
                required: false,
                source: 'user:calc:bmr'
            },
            {   
                name: 'BMI',
                label: 'B.M.I.',
                default: 0,
                value: 0,
                type: 'number',
                ctrl: 'textbox',
                disabled: true,
                required: false,
                source: 'user:calc:bmi'
            },
            {   
                name: 'Created',
                label: 'Created',
                default: '',
                value: new Date().toLocaleString(),
                type: 'text',
                ctrl: 'textbox',
                disabled: true,
                required: false,
                source: 'auto'
            },
            {   
                name: 'Updated',
                label: 'Updated',
                default: '',
                value: new Date().toLocaleString(),
                type: 'text',
                ctrl: 'textbox',
                disabled: true,
                required: false,
                source: 'auto:now'
            }
        ],
        this.gender = [
            {text: 'Male',value: 'm'},
            {text: 'Female',value: 'f'}
        ],
        this.Items = []
        


    }

}