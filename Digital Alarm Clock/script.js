const currentTime = document.getElementById("current-time");
const audioElement = document.getElementById('alarmSound');
const alarmTimeInput = document.getElementById('alarmTime');
const setAlarmButton = document.getElementById('setAlarm');
const stopAlarmButton = document.getElementById('stopAlarm');
let alarmTimeoutId;

function updateTime() {
    currentTime.textContent = new Date().toLocaleTimeString();
}

setInterval(updateTime, 1000); // Update every second

setAlarmButton.addEventListener('click', () => {
    const alarmTime = alarmTimeInput.value;
    playAlarmAt(alarmTime);
    stopAlarmButton.classList.add('alarm-set-bac');

});

stopAlarmButton.addEventListener('click', () => {
    audioElement.pause();
    clearTimeout(alarmTimeoutId);
    clearAlarmSetBackground(); // Reset background color
});

function clearAlarmSetBackground() {
    stopAlarmButton.classList.remove('alarm-set-bac');
}


function playAlarmAt(alarmTime) {
    const now = new Date();
    const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...alarmTime.split(':').map(Number));

    const timeToAlarm = alarmDate - now;

    if (timeToAlarm > 0) {
        alarmTimeoutId = setTimeout(() => audioElement.play(), timeToAlarm);
    } else {
        alert("Alarm time cannot be in the past!");
    }
}