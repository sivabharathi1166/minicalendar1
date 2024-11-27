const prevButton = document.getElementById('prev-month');
const nextButton = document.getElementById('next-month');
const monthYearSpan = document.getElementById('month-year');
const daysContainer = document.getElementById('days');

let currentDate = new Date();

function renderCalendar() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

   
    monthYearSpan.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

    daysContainer.innerHTML = ''; 

    
    for (let i = 0; i < firstDay; i++) {
        daysContainer.appendChild(document.createElement('div'));
    }

    
    for (let i = 1; i <= lastDate; i++) {
        const day = document.createElement('div');
        day.textContent = i;
        day.classList.add('day');

        if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            day.classList.add('today');
        }

        daysContainer.appendChild(day);
    }
}

prevButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
