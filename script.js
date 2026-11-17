function showTime() {
    const now = new Date();
    const text = now.toLocaleString('en-GB'); // gives DD/MM/YYYY, HH:MM:SS
    document.getElementById('timer').textContent = text;
}

showTime();                    // show immediately
setInterval(showTime, 1000); 