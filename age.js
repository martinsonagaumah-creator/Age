
const form = document.querySelector(".ageForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    const dayError = document.getElementById("dayError");
    const monthError = document.getElementById("monthError");
    const yearError = document.getElementById("yearError");

    const fullDays = document.getElementById("days");
    const fullMonths = document.getElementById("months");
    const fullYears = document.getElementById("years");

    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";

    let hasError = false;

    if (day.value === ""){
        dayError.textContent = "This field is required";
        hasError = true;
    }

    if (month.value === ""){
        monthError.textContent = "This field is required";
        hasError = true;
    }

    if (year.value === ""){
        yearError.textContent = "This field is required";
        hasError = true;
    }

    if (hasError){
        return;
    }

    let date = document.getElementById("day").value;
    let period = document.getElementById("month").value;
    let annum = document.getElementById("year").value;


    let birthDate = new Date(annum, period -1, date);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if(days < 0){
        months--;
        days += 30;
    }

    if(months < 0){
        years--;
        months += 12;
    }

    fullYears.textContent = years;
    fullMonths.textContent = months;
    fullDays.textContent = days;

    const dayValue = Number(day.value);
    const monthValue = Number(month.value);
    const yearValue = Number(year.value);

    if(day.value < 1 || day.value > 31){
        dayError.textContent = "Must be a valid day"
        hasError = true;
    }

    if(month.value < 1 || month.value > 12){
        monthError.textContent = "Must be a valid month"
        hasError = true;
    }

    const userDate = new Date(yearValue, monthValue -1, dayValue);

    if(
        userDate.getDate() !== dayValue ||
        userDate.getMonth() !== monthValue -1 ||
        userDate.getFullYear() !== yearValue 
    ){
        dayError.textContent = "Must be a valid date"
        hasError = true;
    }

    const presentDay = new Date()

    if (userDate > presentDay){
        yearError.textContent = "Date must not be in the future"
        hasError = true;
    }

    if (hasError) {
        fullDays.textContent = "--";
        fullMonths.textContent = "--";
        fullYears.textContent = "--";

        return;
    }
})