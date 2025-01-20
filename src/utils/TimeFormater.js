function timeToMinutes(time) {
    if (time) {
        const hourAndMinutes = time.split(':').map(x => Number(x))
        let minutes = 0;
        return minutes += hourAndMinutes[0] * 60 + hourAndMinutes[1];
    }
}

function minutesToTime(minutes) {
    const hour = Math.trunc(minutes / 60);
    const minute = minutes % 60
    return `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}`
}

export { timeToMinutes, minutesToTime }