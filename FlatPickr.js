$("#date").flatpickr({
    altFormat: "F j, Y",
    dateFormat: "d-m-Y H:i",  
    minDate: "today",
    altInput: true,
    inline: false,
});

$("#time").flatpickr({
    enableTime: true,
    noCalendar: true,
    time_24hr: true,
    dateFormat: "H:i",
    altInput: true,
    minTime: "08:00",
    maxTime: "17:00",

});

$(".resetDate").flatpickr({
    wrap: true,
    weekNumbers: true,
});