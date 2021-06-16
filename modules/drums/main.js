

const auds = document.querySelectorAll('div.key');
auds.forEach(function(aud){
    let key = aud.getAttribute('data-key');
    let audioObj = document.querySelector('audio[data-key="' + key + '"');
    audioObj.preload = 'auto';
    audioObj.addEventListener('ended', function(event){
        //alert('Ended');
        aud.classList.remove('playing');
    });
    let span = document.createElement("span");
    span.classList.add('clicked');
    span.classList.add('hide');
    span.innerHTML = 'Click Cnt ' + 0;
    aud.prepend(span);
    aud.setAttribute('data-clicked', 0);
    aud.addEventListener('click', function(event){
        let auds_2 = document.querySelectorAll('div.key');
        auds_2.forEach(function(aud_2){
            aud_2.classList.remove('playing');       
        });
        aud.classList.add('playing');
        let clicked = parseInt(aud.getAttribute('data-clicked'));
        //alert(clicked);
        
        clicked += 1;
        span.innerHTML = 'Click Cnt ' + clicked;
        switch(clicked){
            case 1:                
                span.classList.toggle('hide');
                
                aud.classList.add('move_10');
                break;
            case 2:
                aud.classList.remove('move_10');
                aud.classList.add('move_20');
                //span.classList.add('green');
                break;
            case 3:
                aud.classList.remove('move_20');
                aud.classList.add('move_30');
                break;
            case 4:
                aud.classList.remove('move_30');
                aud.classList.add('move_40');
                //span.classList.remove('green');
               // span.classList.add('blue');
                break;
            case 5:
                aud.classList.remove('move_40');
                aud.classList.add('move_50');
                break;
            case 6:
                aud.classList.remove('move_50');
                aud.classList.add('move_60');
                //span.classList.remove('blue');
               // span.classList.add('orange');
                break;
            case 7:
                aud.classList.remove('move_60');
                aud.classList.add('move_70');
                break;
            case 8:
                aud.classList.remove('move_70');
                aud.classList.add('move_80');
                break;
            case 9:
                aud.classList.remove('move_80');
                aud.classList.add('move_90');
               // span.classList.remove('orange');
               // span.classList.add('red');
                break;
            case 10:
                aud.classList.remove('move_90');
                aud.classList.add('move_100');
                break;
            case 11:
                aud.classList.remove('move_100');
                clicked = 0;
                span.classList.toggle('hide');
               // span.classList.toggle('hide');
               // span.classList.remove('red');
                break;
        
        }
        aud.setAttribute('data-clicked', clicked);
        
        audioObj.pause();
        audioObj.currentTime = 0;
        audioObj.play();
    });
});
