import "./DigitalClock2.scss";

export default function DigitalClock2(props) {

const date = new Date();
//console.log(date);
const dayInMonth = date.getDate();
const dayInWeek = date.getDay();
const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
];

const month = date.getMonth();
console.log(month);

const months = [
    "January",
    "Februay",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agust",
    "September",
    "November",
    "December",
];
//console.log(months[month]);

const year = date.getFullYear();

const hour = date.getHours();

const minute = date.getMinutes();

let timeOfDay = "MORNING";

if (hour >= 12 && hour < 18) {
    timeOfDay = "AFTERNOON";
} else if (hour >= 20) {
    timeOfDay = "NIGHT";
}

  return (
      <div style={{
        color: props.color,
        backgroundColor: props.backgroundColor
      }} className="digital-clock">
          <div className="time">
              {`${hour}`.padStart(2, "0")}:{String(minute).padStart(2, "0")}
          </div>

          <div>
              <div className="date">
                  {months[month].toUpperCase()} {dayInMonth} , {year}
              </div>
              <div className="day">
                  {days[dayInWeek]} {timeOfDay}
              </div>
          </div>
      </div>
  );
}
