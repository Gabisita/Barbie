const buttonPrev = document.getElementById('buttonPrev')
const buttonNext = document.getElementById('buttonNext')
const track = document.getElementById('track')
const slickList = document.getElementById('slickList')
const slick = document.querySelectorAll('.slick')

const slickWidth = slick[0].offsetWidth

buttonPrev.onclick = () => Move(1)
buttonNext.onclick = () => Move(2)

const Move = (value) => {
    const trackWidth = track.offsetWidth
    const listWidth = slickList.offsetWidth

    track.style.left == '' ? leftPosition = track.style.left = 0 : leftPosition = parseFloat
    (track.style.left.slice(0, -2)* -1)

    if (leftPosition < (trackWidth - listWidth) && value == 2){
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`
    } else if (leftPosition > 0 && value == 1){
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`
    }
}

const buttonPrev2 = document.getElementById('buttonPrev2')
const buttonNext2 = document.getElementById('buttonNext2')
const track2 = document.getElementById('track2')
const slickList2 = document.getElementById('slickList2')
const slick2 = document.querySelectorAll('.slick2')

const slickWidth2 = slick2[0].offsetWidth

buttonPrev2.onclick = () => Move2(1)
buttonNext2.onclick = () => Move2(2)

const Move2 = (value) => {
    const trackWidth = track2.offsetWidth
    const listWidth = slickList2.offsetWidth

    track2.style.left == '' ? leftPosition = track2.style.left = 0 : leftPosition = parseFloat
    (track2.style.left.slice(0, -2)* -1)

    if (leftPosition < (trackWidth - listWidth) && value == 2){
        track2.style.left = `${-1 * (leftPosition + slickWidth)}px`
    } else if (leftPosition > 0 && value == 1){
        track2.style.left = `${-1 * (leftPosition - slickWidth)}px`
    }
}