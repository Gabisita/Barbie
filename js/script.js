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