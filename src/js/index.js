import calendar from './calendar';
import initMap from './map';
if (location.href.includes('index')) {
    (function() {
        global.initMap = initMap;
        const searchButton = document.querySelector('.travel__search__button'),
            adultCounterMinus = document.querySelector('.adult-counter-minus'),
            adultCounterPlus = document.querySelector('.adult-counter-plus'),
            childrenCounterPlus = document.querySelector(
                '.children-counter-plus'
            ),
            childrenCounterMinus = document.querySelector(
                '.children-counter-minus'
            ),
            calendarDate = document.querySelectorAll('.calendar-date'),
            mainTravelSearch = document.querySelector('.main__travel__search'), // подключаем календарь
            counterAdult = getHumanCounter(),
            counterChildern = getHumanCounter(),
            calendarShadowMask = document.createElement('div'),
            dateInInput = document.querySelector('.date-in__input'),
            dateOutInput = document.querySelector('.date-out__input');

        dateInInput.placeholder = calendar.currentDay;
        dateOutInput.placeholder = calendar.currentDay;
        mainTravelSearch.appendChild(calendar.body);
        function showSearchBar() {
            const searchBar = document.querySelector('.travel__search-hotel');
            searchBar.classList.toggle('visible');
        }

        searchButton.addEventListener('click', showSearchBar);

        function getHumanCounter() {
            let counter = 0;
            return event => {
                let getClass = event.currentTarget.getAttribute('class');
                getClass.includes('plus') ? counter++ : counter--;
                let inputQuantity = getClass.includes('adult')
                    ? document.querySelector('.adult-quantity__input')
                    : document.querySelector('.children-quantity__input');
                counter = counter >= 0 ? counter : 0;
                inputQuantity.setAttribute('value', counter);
            };
        }

        adultCounterMinus.addEventListener('click', counterAdult);
        adultCounterPlus.addEventListener('click', counterAdult);
        childrenCounterPlus.addEventListener('click', counterChildern);
        childrenCounterMinus.addEventListener('click', counterChildern);

        function showCalendar() {
            calendar.body.classList.add('calendar-visible');
            calendarShadowMask.className = 'calendar-shadow-mask';
            mainTravelSearch.insertBefore(calendarShadowMask, calendar.body);
        }

        calendarDate.forEach(date =>
            date.addEventListener('click', showCalendar)
        );

        function closeCalendar() {
            calendar.body.classList.remove('calendar-visible');
            calendarShadowMask.classList.remove('calendar-shadow-mask');
        }

        calendar.closedCalendarButton.addEventListener('click', closeCalendar);

        function confirmRange() {
            if (calendar.checkNotSomeRangeDay()) {
                dateInInput.value = calendar.range().rangeIn;
                dateOutInput.value = calendar.range().rangeOut;
                closeCalendar();
            }
        }
        calendar.confirmChoiseButton.addEventListener('click', confirmRange);
    })();
}
if (location.href.includes('hotels')) {
    (function() {
        const minRange = document.querySelector('.minRange'),
            maxRange = document.querySelector('.maxRange');

        function getRange() {
            const minValue = +minRange.value,
                maxValue = +maxRange.value,
                minValuePercent = Math.round((minRange.value * 100) / 10000),
                maxValuePercent = Math.round((maxRange.value * 100) / 10000),
                minCost = document.querySelector('.min-cost'),
                maxCost = document.querySelector('.max-cost');

            minCost.innerHTML = `OT ${minValue}`;
            maxCost.innerHTML = `ДО ${maxValue}`;
            if (minValue > maxValue - 500) {
                maxRange.value = minValue + 500;

                if (maxValue == maxRange.max) {
                    minRange.value = 9500;
                }
            }
            if (maxValue < minValue + 500) {
                minRange.value = maxValue - 500;

                if (minValue == minRange.min) {
                    maxRange.value = 500;
                }
            }
            minRange.style.backgroundImage = `linear-gradient(to right, 
        darkgray ${minValuePercent}%,
        white ${minValuePercent}%,
        white ${maxValuePercent}%,
        darkgray ${maxValuePercent}% )`;
        }

        minRange.oninput = getRange;
        maxRange.oninput = getRange;
    })();
}
