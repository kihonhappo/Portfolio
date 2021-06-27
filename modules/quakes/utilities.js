

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