function updateHourDate () {
    let date = new Date();
    // const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    document.getElementById("hour").innerHTML = date.toLocaleTimeString('en-GB', {hour: "2-digit", minute: "2-digit"});
    document.getElementById("date").innerHTML = date.toLocaleDateString('en-GB');
};

updateHourDate();

setInterval(updateHourDate, 1000); // [ms]