const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const futureTime = futureDate.getTime();

const tick = function () {
  const today = new Date().getTime();
  const time = futureTime - today;
  
  days.innerHTML = String(Math.trunc(time / oneDay)).padStart(2, 0);
  hours.innerHTML = String(Math.trunc((time % oneDay) / oneHour)).padStart(
    2,
    0
  );
  minutes.innerHTML = String(Math.trunc((time % oneHour) / oneMinute)).padStart(
    2,
    0
  );
  seconds.innerHTML = String(Math.trunc((time % oneMinute) / 1000)).padStart(
    2,
    0
  );
};

tick();
setInterval(tick, 1000);