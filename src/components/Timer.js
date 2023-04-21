import {useState, useEffect} from 'react'

function Timer() {
    const [timerOn, setTimerOn] = useState(true)
    const [time, setTime] = useState(1000)

    useEffect(() => {
        let interval = null;
        if(timerOn) {
          interval = setInterval(() => {
            setTime(prevTime => prevTime -1)
          },100)
        } else{
            clearInterval(interval)
        }
        return () => clearInterval(interval)
       },[timerOn])

  return (
    <div>
        {time}
        <br></br>
        <button onClick = {() => setTimerOn(true)}>Start</button>
        <button onClick = {() => setTimerOn(false)}>Stop</button>
        <button onClick = {() => setTime(0)}>Reset</button>

    </div>
  )
}

export default Timer