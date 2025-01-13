var audio = document.createElement('audio');
audio.id = "audio"; // Keep the ID for easy access
document.getElementById('main').appendChild(audio);

var bellImage = document.getElementById('bell');
var setButton = document.getElementById("setbutton");
var timer;
var isTimerSet = false;
setButton.addEventListener("click", function() {
    const countdownElement = document.getElementById('countdown');
    const soundSelect = document.getElementById('soundSelect');
    const selectedSound = soundSelect.value;
    // Update audio source based on selection
    console.log(location.origin + "/assets/sound/" + selectedSound);
    if (!isTimerSet) {
        var hours = document.getElementById('hours').value;
        var minutes = document.getElementById('minutes').value;
        var seconds = document.getElementById('seconds').value;
        var totalSeconds = (hours * 3600) + (minutes * 60) + Number(seconds);

        var audio = document.getElementById('audio');
        audio.src = location.origin + "/assets/sound/" + selectedSound;
        timer = setInterval(function() {
            totalSeconds--;
            if (totalSeconds < 0) {
            clearInterval(timer);
            audio.play();
            bellImage.style.display = 'block';
            } else {
            var displayHours = Math.floor(totalSeconds / 3600);
            var displayMinutes = Math.floor((totalSeconds % 3600) / 60);
            var displaySeconds = totalSeconds % 60;
            var displaytime = '';
            if (displayHours > 0) {
                displaytime =  displayHours + 'H ' + displayMinutes + 'M ' + displaySeconds + 'S';
            }
            else if (displayMinutes > 0) {
                displaytime =  displayMinutes + 'M ' + displaySeconds + 'S';
            }
            else {
                displaytime =  displaySeconds + 'S';
            }
            countdownElement.innerText = displaytime;
            }
        }, 1000);
        isTimerSet = true;
        setButton.innerText = "Stop";
        }
    else {
        clearInterval(timer);
        countdownElement.innerText = '';
        isTimerSet = false;
        setButton.innerText = "Start";
        bellImage.style.display = 'none';
        }   
    }
)

