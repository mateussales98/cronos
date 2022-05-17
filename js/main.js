const timer = document.querySelector('.timer')
const btn_start = document.querySelector('.start')
const btn_stop = document.querySelector('.stop')
const btn_resume = document.querySelector('.resume')
const btn_reset = document.querySelector('.reset')
const popup = document.querySelector('.pop-up')

const Modal = {
  toogle(btn) {
    btn.classList.toggle('hidden')
  }
}

let millisecond = 0
let second = 0
let minute = 0
let hour = 0
let dispmillisecond= 0

const Cronos = {

  time() {
    millisecond += 10
    if (millisecond == 1000) {
      millisecond = 0
      second += 1
    }

    if (second == 60) {
      second = 0
      minute += 1
    }

    if (minute == 60) {
      minute = 0
      hour += 1
    }

    if (millisecond > 100) {
      dispmillisecond = millisecond / 10
    }

    display = `0${minute.toString()}:0${second.toString()}.0${dispmillisecond}`
    
    if (dispmillisecond > 9) {
      display = `0${minute.toString()}:0${second.toString()}.${dispmillisecond}`
    }
    if (second > 9) {
      display = `0${minute.toString()}:${second.toString()}.${dispmillisecond}`
    }
    if (minute > 9) {
      display = `${minute.toString()}:${second.toString()}.${dispmillisecond}`
    }
    if (hour > 0) {
      display = `${hour.toString()}:${minute.toString()}:${second.toString()}.${dispmillisecond}`
    }

    return timer.innerText = display
  },

  start() {
    cro = setInterval(this.time, 10)
    stop()

    Modal.toogle(btn_start)
    Modal.toogle(btn_stop)
  },

  stop() {
    clearInterval(cro)
    Modal.toogle(btn_stop)
    Modal.toogle(btn_resume)
    Modal.toogle(btn_reset)
    return this.time().display
  },

  resume() {
    cro = setInterval(this.time, 10)
    stop()

    Modal.toogle(btn_stop)
    Modal.toogle(btn_resume)
    Modal.toogle(btn_reset)
  },

  reset() {

    clearInterval(this.time())
    millisecond = 0
    second = 0
    minute = 0
    hour = 0

    display = `0${minute.toString()}:0${second.toString()}.0${millisecond.toString()}`

    Modal.toogle(btn_start)
    Modal.toogle(btn_resume)
    Modal.toogle(btn_reset)

    console.log()

    return timer.innerText = display
  }
}