function digital(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    if (hour < 10){
        hour = '0' + hour
    }if (second < 10){
        second = '0' + second
    }if (minute < 10){
        minute = '0' + minute
    }
 
    document.getElementsByClassName('digital')[0].innerHTML = hour + ':' + minute + ':' + second;
    setInterval(digital, 1000)
}

function analog(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let hRotate = 12 * hour + minute / 2;
    let mRotate = 6 * minute;
    let sRotate = 6 * second;
    document.getElementById('hour').style.transform = 'rotate(' + hRotate + 'deg)';
    document.getElementById('minute').style.transform = 'rotate(' + mRotate + 'deg)';
    document.getElementById('second').style.transform ='rotate(' + sRotate + 'deg)';
}
setInterval(analog, 1000)