function updateHourDate () {
    let date = new Date();
    // const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    document.getElementById("hour-date").innerHTML = date.toLocaleString('en-GB');
};

updateHourDate();

setInterval(updateHourDate, 1000); // [ms]