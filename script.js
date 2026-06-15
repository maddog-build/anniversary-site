function checkPassword() {

    const pass = document.getElementById("password").value;

    if(pass === "10624") {

        document.getElementById("lockScreen").style.display="none";
        document.getElementById("mainContent").style.display="block";

    } else {

        alert("Wrong Password");
    }
}
const anniversary = new Date("June 10, 2027");

function updateCountdown(){

    const now = new Date();

    const diff = anniversary - now;

    const days = Math.floor(diff/(1000*60*60*24));

    document.getElementById("countdown").innerHTML =
        days + " days until our anniversary ❤️";
}

setInterval(updateCountdown,1000);
function showLetter(){

alert(
"I love you more than words can express ❤️"
);

}