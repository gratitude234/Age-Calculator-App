const calculateAge = () => {
    const Days = document.getElementById('day').value;
    const Months = document.getElementById('month').value;
    const Years = document.getElementById('year').value;

    const daysInput = document.getElementById('day');
    const monthsInput = document.getElementById('month');
    const yearsInput = document.getElementById('year');

    const label = document.getElementById("labels");
    const daysError = document.getElementById('Day-span');
    const emptyMessage = document.getElementById("Day-span1");
    const labelMonth = document.getElementById("labelMonth");
    const monthsError = document.getElementById('Month-span');
    const emptyMonthMessage = document.getElementById("Month-span1");
    const labelYear = document.getElementById("labelYear");
    const yearError = document.getElementById('Year-span');
    const emptyYearMessage = document.getElementById("Year-span1")

    const displayDays = document.getElementById('displayDay');
    const displayMonths = document.getElementById('displayMonth');
    const displayYears = document.getElementById('displayYear');

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();
    let newMonth =  currentMonth - Months;
    let newDay =  currentDay - Days;
    let newYear = currentYear - Years;

    function testDays(num) {
        const twoDigitsRegex = /^\d{1,2}$/;
        return twoDigitsRegex.test(num) && num <= 31;
    }

    function testMonths(num) {
        const twoDigitsRegex = /^\d{1,2}$/;
        return twoDigitsRegex.test(num) && num <= 12;
    }
    function testYears(num) {
        const twoDigitsRegex = /^\d{4}$/;
        return twoDigitsRegex.test(num) && num >= 1874 && num <= currentYear;
    }

    if (newMonth < 0 || (newMonth === 0 && currentDay < Days)) {
        newYear--;
        newMonth +=12
    }
    if (newDay < 0) {
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth()-1,0);
        newDay += prevMonth.getDate();
        newMonth--;
    }
    if (testDays(Days)) {
        displayDays.innerHTML = newDay;
        
    } else{
        label.className = "label-error";
        daysInput.className = "days-error";
        daysError.classList.add("error-message");
        daysError.classList.remove("hidden");
        emptyMessage.classList.add("hidden")
    }
    if (testMonths(Months)) {
        displayMonths.innerHTML = newMonth;

    } else{
        labelMonth.className = "label-error";
        monthsInput.className = "days-error";
        monthsError.classList.add("error-message");
        monthsError.classList.remove("hidden")
    }
    if (testYears(Years)) {
        displayYears.innerHTML = newYear;
 
    } else{
        labelYear.className = "label-error";
        yearsInput.className = "days-error";
        yearError.classList.add("error-message");
        yearError.classList.remove("hidden")
    }

    if (Days === "") {
        emptyMessage.classList.add("error-message");
        emptyMessage.classList.remove("hidden")
        daysError.classList.add("hidden")
    }
    if (Months === "") {
        emptyMonthMessage.classList.add("error-message");
        emptyMonthMessage.classList.remove("hidden")
        monthsError.classList.add("hidden")
    }
    if (Years === "") {
        emptyYearMessage.classList.add("error-message");
        emptyYearMessage.classList.remove("hidden");
        yearError.classList.add('hidden');
    }

}




