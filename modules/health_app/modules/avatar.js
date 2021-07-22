
export default class Avatar{
    constructor(){
        this.body_types = {
            ectomorph: {
                label: 'Ectomorph',
                image: './images/ectomorph.png'
            },
            mesomorph: {
                label: 'Mesomorph',
                image: './images/mesomorph.png'
            },
            endomorph: {
                label: 'Endomorph',
                image: './images/endomorph.png'
            }
        };

        this.body_fat_map = {

        };

        this.body_mass_map = {

        };
    }

    add_item(){
        return `
            <div class="body-types">
                <div class="type">
                    <img src="${this.body_types.ectomorph.image}" alt="${this.body_types.ectomorph.label}" class="body-image">
                    <h4>${this.body_types.ectomorph.label}</h4>
                </div>
                <div class="type">
                    <img src="${this.body_types.mesomorph.image}" alt="${this.body_types.mesomorph.label}" class="body-image">
                    <h4>${this.body_types.mesomorph.label}</h4>
                </div>
                <div class="type">
                    <img src="${this.body_types.endomorph.image}" alt="${this.body_types.endomorph.label}" class="body-image">
                    <h4>${this.body_types.endomorph.label}</h4>
                </div>
            </div>
        `;
    }
    

}




