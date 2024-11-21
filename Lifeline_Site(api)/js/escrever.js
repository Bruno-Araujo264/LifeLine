function chooseFeeling(emotion){
    var emoji = document.getElementsByClassName('emoji')
    for(var cleanSelected = 0; cleanSelected <= 4; cleanSelected++){
        emoji[cleanSelected].style.backgroundColor = 'transparent'
    }

    if(emotion == 'feliz'){
        var cor = 'yellow'
        emojiHighlight = document.getElementById('feliz')
        emojiHighlight.style.backgroundColor = "yellow"
        emojiHighlight.style.borderRadius = '100%'
        return cor
    }
    if(emotion == 'triste'){
        var cor = 'lightblue'
        emojiHighlight = document.getElementById('triste')
        emojiHighlight.style.backgroundColor = "lightblue"
        emojiHighlight.style.borderRadius = '100%'
        return cor
    }
    if(emotion == 'raiva'){
        var cor = 'red'
        emojiHighlight = document.getElementById('raiva')
        emojiHighlight.style.backgroundColor = "red"
        emojiHighlight.style.borderRadius = '100%'
        return cor
    }
    if(emotion == 'surpreso'){
        var cor = 'plum'
        emojiHighlight = document.getElementById('surpreso')
        emojiHighlight.style.backgroundColor = "plum"
        emojiHighlight.style.borderRadius = '100%'
        return cor
    }
    if(emotion == 'medo'){
        var cor = 'gainsboro'
        emojiHighlight = document.getElementById('medo')
        emojiHighlight.style.backgroundColor = "gainsboro"
        emojiHighlight.style.borderRadius = '100%'
        return cor
    }
}