function updateClock() {

    const clock = 
        document.getElementById("clock");

    const now = new Date();

    let hours =
        String(now.getHours())
        .padStart(2,"0");

    let minutes =
        String(now.getMinutes())
        .padStart(2,"0");

    let seconds =
        String(now.getSeconds())
        .padStart(2, "0");

    const date =
        now.toLocaleDateString(
            "en-US",
            {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric"
            }
        );

    clock.innerHTML =
        hours + ":" + minutes + ":" + seconds +
        "<br>" +
        "<small>" + date + "</small>";

updateClock();

setInterval(
    updateClock,
    1000
);
}