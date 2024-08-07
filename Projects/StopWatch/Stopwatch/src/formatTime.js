
function formatTime(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);

    let totalMilliseconds = milliseconds % 1000;

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    totalMilliseconds = String(totalMilliseconds).padStart(3, '0');

    return `${hours}:${minutes}:${seconds}.${totalMilliseconds}`;
}


// console.log(formatTime(123242))

export { formatTime }