function analog() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let hRotate = 12 * hour + minute / 2;
    let mRotate = 6 * minute;
    let sRotate = 6 * second;
    document.getElementById('hour').style.transform = `rotate(${hRotate}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mRotate}deg)`;
    document.getElementById('second').style.transform = `rotate(${sRotate}deg)`;

    if (hour < 10) {
        hour = '0' + hour
    } if (minute < 10) {
        minute = '0' + minute
    } if (second < 10) {
        second = '0' + second
    }
    document.getElementsByClassName('digitalClock')[0].innerHTML = hour + '<span>HOURS</span>';
    document.getElementsByClassName('digitalClock')[1].innerHTML = minute + '<span>MINS</span>';
    document.getElementsByClassName('digitalClock')[2].innerHTML = second + '<span>SEC</span>';
}
setInterval(analog, 1000)