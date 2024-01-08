const getNewYear = () => {
    const currentyear = new Date().getFullYear()
    return new Date(`January 01 ${currentyear + 1} 00:00:00`)
}

const year = document.querySelector('.year')
year.innerHTML = getNewYear().getFullYear()

const app = document.querySelector('.countdownTimer')
const message = document.querySelector('.message')
const heading = document.querySelector('h1')

const format = (t) => {
    return t < 10 ? '0' + t : t;
};

const render = (time) => {
    app.innerHTML = `
        <div class="countDown">
            <div class="timer">
                <h2 class="days">${format(time.days)}</h2>
                <small>Days</small>
            </div>
            <div class="timer">
                <h2 class="hours">${format(time.hours)}</h2>
                <small>Hours</small>
            </div>
            <div class="timer">
                <h2 class="minute">${format(time.minute)}</h2>
                <small>Minute</small>
            </div>
            <div class="timer">
                <h2 class="seconds">${format(time.seconds)}</h2>
                <small>Secons</small>
            </div>
        </div>
    `
}

const showMessage = () => {
    message.innerHTML = `Happy New Year ${newYear}!`
    app.innerHTML = ''
    heading.style.display = 'none'
}

const hideMesaage = () => {
    message.innerHTML = ''
    heading.style.display = 'block'
}

const complete = () => {
    showMessage()

    setTimeout(() => {
        hideMesaage()
        countdownTimer.setExpiredDate(getNewYear())
    }, 1000 * 60 * 60 * 24)
}

const countdownTimer = new countDown(
    getNewYear(),
    render,
    complete
)