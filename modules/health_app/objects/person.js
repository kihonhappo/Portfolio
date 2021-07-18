
export default class person {
    constructor() {

        this.data = [
            {   name: 'Person_ID', 
                label: 'Person ID',
                value: '',
                data_type: 'text',
                ctrl: 'textbox',
                disabled: true,
                required: true,
                source: 'user:concat:First_Name+_+Last_Name+timestamp'

            },
            {   name: 'First_Name',
                label: 'First Name',
                value: 'Aaron',
                data_type: 'text',
                ctrl: 'textbox',
                disabled: false,
                required: true,
                source: 'user'

            },
            {   name: 'Last_Name',
                label: 'Last Name',
                value: 'Ameny',
                data_type: 'text',
                ctrl: 'textbox',
                disabled: false,
                required: true,
                source: 'user'

            },
            {   name: 'DOB',
                label: 'Birthdate',
                value: '2-25-1971',
                data_type: 'date',
                ctrl: 'datepicker',
                disabled: false,
                required: true,
                source: 'user'
            },
            {   name: 'Age',
                label: 'Age',
                value: 0,
                data_type: 'Number',
                ctrl: 'textbox',
                disabled: true,
                required: true,
                source: 'user:calc:age'

            },
            {   name: 'Height',
                label: 'Height',
                value: 70,
                data_type: 'Number',
                ctrl: 'textbox',
                disabled: false,
                required: true,
                source: 'user'

            },
            {   name: 'Weight',
                label: 'Weight',
                value: 210,
                unit: 'imperial',
                data_type: 'Number',
                ctrl: 'textbox',
                disabled: false,
                required: true,
                source: 'user'

            },
            {   name: 'Gender',
                label: 'Gender',
                list: 'gender',
                value: 'm',
                ctrl: 'select',
                disabled: false,
                required: true,
                source: 'user'

            },
            {   name: 'BMR',
                label: 'B.M.R.',
                value: 0,
                data_type: 'Number',
                ctrl: 'textbox',
                disabled: true,
                required: true,
                source: 'user:calc:bmr',
                event: ''

            },
            {   name: 'BMI',
                label: 'B.M.I.',
                value: 0,
                data_type: 'Number',
                ctrl: 'textbox',
                disabled: true,
                required: true,
                source: 'user:calc:bmi'

            },
            {   name: 'Created',
                label: 'Created',
                value: '',
                ctrl: 'textbox',
                disabled: true,
                required: true,
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