export default (function() {
    const calendar = document.createElement('div'),
        arrowMonthLeft = document.createElement('div'),
        calendarMonth = document.createElement('div'),
        calendarMonthName = document.createElement('div'),
        arrowMonthRight = document.createElement('div'),
        calendarButtons = document.createElement('div'),
        closedCalendarButton = document.createElement('button'),
        confirmChoiseButton = document.createElement('button'),
        options = {
            year: 'numeric',
            month: 'long',
            timezone: 'UTC',
            day: 'numeric',
        };
    let year = new Date().getFullYear(),
        month = new Date().getMonth() + 1,
        rangeIn = 0,
        rangeOut = 0,
        rangeDay = 2;

    //<================================================>
    calendar.className = 'calendar';
    arrowMonthLeft.className = 'arrowMonthLeft';
    calendarMonthName.className = 'calendarMonthName';
    calendarMonth.className = 'calendarMonth';
    arrowMonthRight.className = 'arrowMonthRight';
    closedCalendarButton.className = 'closedCalendarButton';
    confirmChoiseButton.className = 'confirmChoiseButton';
    calendarButtons.className = 'calendarButtons';
    closedCalendarButton.className = 'closedCalendarButton';
    confirmChoiseButton.className = 'confirmChoiseButton';
    //<================================================>
    calendar.appendChild(calendarMonth);
    calendarMonth.appendChild(arrowMonthLeft);
    calendarMonth.appendChild(arrowMonthRight);
    calendarMonth.insertBefore(calendarMonthName, arrowMonthRight);
    calendar.appendChild(calendarButtons);
    calendarButtons.appendChild(confirmChoiseButton);
    calendarButtons.appendChild(closedCalendarButton);
    confirmChoiseButton.innerHTML = '<i class="fas fa-check"></i>';
    closedCalendarButton.innerHTML = '<i class="fas fa-times"></i>';
    arrowMonthLeft.innerHTML = '<i class="fas fa-caret-left"></i>';
    arrowMonthRight.innerHTML = '<i class="fas fa-caret-right"></i>';
    getCalendar(year, month);
    function deleteTable() {
        let table = document.querySelector('table');
        calendar.removeChild(table);
    }
    //<================================================>
    function monthToogle(event) {
        // удаляем старый месяц
        deleteTable();
        if (event.currentTarget.className.includes('Right')) ++month;
        if (event.currentTarget.className.includes('Left')) --month;
        if (month === 13) {
            ++year;
            month = 1;
        }
        if (month === 0) {
            --year;
            month = 12;
        }
        getCalendar(year, month);
    }
    //<================================================>
    function getRange({ target }) {
        let date = +target.innerHTML;
        console.log(target);
        if (date) {
            let mSecCurrentDay = +new Date(year, month - 1, date);

            if (!target.dataset.mSecCurrentDay) {
                target.dataset.mSecCurrentDay = mSecCurrentDay;

                rangeDay--;
                if (rangeDay < 0) {
                    rangeDay = 0;
                }
            } else if (target.dataset.mSecCurrentDay) {
                delete target.dataset.mSecCurrentDay;
                rangeDay++;
                if (rangeDay > 2) {
                    rangeDay = 2;
                }
            }
            if (rangeIn && rangeIn === mSecCurrentDay) {
                rangeIn = 0;
                target.classList.remove('in-day');
            } else if (rangeOut && rangeOut === mSecCurrentDay) {
                rangeOut = 0;
                target.classList.remove('out-day');
            } else if (!rangeIn && !rangeOut && target.dataset.mSecCurrentDay) {
                rangeIn = +target.dataset.mSecCurrentDay;
                target.classList.add('in-day');
            } else if (
                !rangeIn &&
                rangeOut &&
                target.dataset.mSecCurrentDay < rangeOut
            ) {
                rangeIn = +target.dataset.mSecCurrentDay;
                target.classList.add('in-day');
            } else if (
                rangeIn &&
                !rangeOut &&
                rangeIn < mSecCurrentDay &&
                target.dataset.mSecCurrentDay
            ) {
                rangeOut = +target.dataset.mSecCurrentDay;
                target.classList.add('out-day');
            }
        }
        deleteTable();
        getCalendar(year, month);
        console.log(
            'rangeIn :',
            new Date(+rangeIn).toLocaleString('ru', options),
            'rangeOut :',
            new Date(+rangeOut).toLocaleString('ru', options)
        );
    }
    //<================================================>
    arrowMonthLeft.addEventListener('click', monthToogle);
    arrowMonthRight.addEventListener('click', monthToogle);
    //<================================================>
    function getCurrentDayMark(arrI, year, month) {
        const currentMonth = new Date().getMonth() + 1,
            currentDay = new Date().getDate(),
            currentYear = new Date().getFullYear();
        return (
            arrI === currentDay &&
            currentMonth === month &&
            currentYear === year
        );
    }
    function checkNotSomeRangeDay() {
        return rangeIn > 0 && rangeOut > 0;
    }
    //<================================================>
    function getCalendar(year, month) {
        const options = {
                year: 'numeric',
                month: 'long',
                timezone: 'UTC',
            },
            weekDaysArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            date = new Date(year, month - 1, 1),
            beforeEmptyCell = date.getDay(),
            lastDayMonth = new Date(year, month, 0).getDate(),
            table = document.createElement('table');
        let fullArray = [...new Array(beforeEmptyCell).fill('')],
            afterEmpyCell =
                Math.ceil((fullArray.length - 1) / 7) * 7 -
                (fullArray.length - 1);

        for (var i = 1; i <= lastDayMonth; i++) {
            fullArray.push(i);
        }

        fullArray = [...fullArray, ...new Array(afterEmpyCell).fill('')];
        calendarMonthName.textContent = date.toLocaleString('en', options);
        calendar.insertBefore(table, calendarButtons);
        //  хедер
        table.appendChild(document.createElement('tr'));
        weekDaysArr.forEach(day => {
            const th = document.createElement('th');
            table.lastChild.appendChild(th);
            th.textContent = day;
        });
        //  body
        table.appendChild(document.createElement('tr'));
        for (var i = 1; i < fullArray.length; i++) {
            const td = document.createElement('td');
            td.textContent = fullArray[i];
            table.lastChild.appendChild(td);
            let currentDay = new Date(year, month - 1, fullArray[i]);

            if (getCurrentDayMark(fullArray[i], year, month)) {
                td.className = 'markDay';
            }
            if (fullArray[i] && +currentDay === rangeIn) {
                td.classList.add('in-day');
            }
            if (fullArray[i] && +currentDay === rangeOut) {
                td.classList.add('out-day');
            }
            if (
                fullArray[i] &&
                checkNotSomeRangeDay() &&
                +currentDay > rangeIn &&
                +currentDay < rangeOut
            ) {
                td.classList.add('incoming-day');
            }
            if (i === fullArray.length - 1) break;
            if (i % 7 === 0) table.appendChild(document.createElement('tr'));
        }
        table.addEventListener('click', getRange);
    }
    return {
        confirmChoiseButton,
        closedCalendarButton,
        body: calendar,
        currentDay: new Date().toLocaleString('ru', options),
        range() {
            return {
                rangeIn: new Date(+rangeIn).toLocaleString('ru', options),
                rangeOut: new Date(+rangeOut).toLocaleString('ru', options),
            };
        },
        checkNotSomeRangeDay,
    };
})();
