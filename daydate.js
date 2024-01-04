function updateTodayInfo() {
    const dayElement = document.getElementById('day');
    const dateElement = document.getElementById('date');
    const now = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const todayString = now.toLocaleDateString('en-US', options);

    const [day, date] = todayString.split(', ');

    dayElement.textContent = day;
    dateElement.textContent = date;
}

updateTodayInfo();