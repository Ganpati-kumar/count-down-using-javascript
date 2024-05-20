const endDate = "6 April 2024  2024 1:00 PM"
document.getElementById("end-date").innerText = endDate;
const inputs =document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    if (diff < 0) return;
    // console.log(diff); //  in second
    // convert into days;
    inputs[0].value=(Math.floor (diff / 3600  / 24));
    //convert into hours
     inputs[1].value=(Math.floor (diff / 3600)  % 24);
    // convert into Minutes
    inputs[2].value = (Math.floor(diff / 60) % 60);
    //convert in second
      inputs[3].value=(Math.floor (diff ) % 60);
}
clock()
setInterval(
    () => {
        clock()
    },
    1000
)