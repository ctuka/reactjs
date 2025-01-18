import moment from "moment";
import "./DigitalClock3.scss";
import { useEffect, useState } from "react";

export default function DigitalClock3(color, backgroundColor) {
console.log("##########");

const [date, setDate] = useState(moment());

console.log(moment().format("LL"));

const monthDayYearFormat = date.format("LL");
const dayOfWeek = date.format("dddd");
const hour = date.hour();
const minute = date.minute();
const second = date.second();


useEffect(() => {
    const intervalId = setInterval(() => {
        setDate(moment());
    }, 1000);

    return () => {
        clearInterval(intervalId);
    }
}, [second]);




const month = date.month();
console.log(month);



const year = date.year();



let timeOfDay = "MORNING";

if (hour >= 12 && hour < 18) {
    timeOfDay = "AFTERNOON";
} else if (hour >= 18) {
    timeOfDay = "NIGHT";
}

const styles = {
    color,
    backgroundColor
};

  return (
      <div style={styles} className="digital-clock">
          <div className="time">
              {`${hour}`.padStart(2, "0")}
              <span style={{ opacity: second % 2 === 0 ? 1 : 0 }}>:</span>
              {String(minute).padStart(2, "0")}
              <span style={{ opacity: second % 2 === 0 ? 0 : 1 }}>:</span>
              {`${second}`.padStart(2, "0")}
          </div>

          <div>
              <div className="date">{monthDayYearFormat}</div>
              <div className="day">
                  {dayOfWeek} {timeOfDay}
              </div>
          </div>
      </div>
  );
}


