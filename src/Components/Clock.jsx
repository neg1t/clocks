import { useEffect, useState } from "react";
import moment from 'moment-timezone';

const Clock = ({
  utc
}) => {
  const [hourT, setHourT] = useState({transform: 0})
  const [minT, setMinT] = useState({transform: 0})
  const [secT, setSecT] = useState({transform: 0})
  const [time, setTime] = useState('12:00:00')
 
  const updateTime = (utc) => {
    const deg = 6;
    let hour;
    let min;
    let sec;

    if (utc === 'default') {
      const currentDate = new Date();
      const options = {hour: 'numeric', minute: 'numeric', second: 'numeric'};
      setTime(currentDate.toLocaleString('ru-RU', options));
      hour = currentDate.getHours() * 30;
      min = currentDate.getMinutes() * deg;
      sec = currentDate.getSeconds() * deg;
    } else {
      const currentDate = moment(new Date()).tz(utc);
      setTime(currentDate.format('H:mm:ss'))
      hour = currentDate.hour() * 30;
      min = currentDate.minute() * deg;
      sec = currentDate.second() * deg;
    }
    setHourT({transform: `rotateZ(${(hour) + (min/12)}deg)`});
    setMinT({transform: `rotateZ(${min}deg)`});
    setSecT({transform: `rotateZ(${sec}deg)`});
  }

  useEffect(() => {
    const timeInterval = setInterval(() => {
      updateTime(utc);
    }, 1000)
    
    return () => {
      clearInterval(timeInterval);
    }
  }, [utc])
  return (
    <div className='clock-container'>
      <div className="clock">
        <div className="hour">
          <div className='hr' style={hourT}></div>
        </div>
        <div className="min">
          <div className='mn' style={minT}></div>
        </div>
        <div className="sec">
          <div className='sc' style={secT}></div>
        </div>
      </div>

      <p className='digit-time'>{time}</p>
    </div>
  )
}

export default Clock;