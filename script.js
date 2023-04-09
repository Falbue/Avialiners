// Кнопки добавления билетов
let ticketCount = 0;
  
  function addTicket() {
  	if (ticketCount < 8) {
    ticketCount += 1;
    document.getElementById("ticketCount").value = ticketCount;
  }
}
  
  function removeTicket() {
    if (ticketCount > 1) {
      ticketCount -= 1;
      document.getElementById("ticketCount").value = ticketCount;
    }
  }



let passengers = 1; // количество пассажиров по умолчанию
let maxPassengers = 5; // максимальное число пассажиров

function addPassenger() {
  if (passengers < maxPassengers) {
    passengers++;
    addPassengerFields();
  } else {
    alert("Мест для бронирования больше нет");
  }
}

function removePassanger() {
  if (passengers > 1) {
    passengers--;
    removePassengerFields();
  } else {
    alert("Удаление пассажиров из списка запрещено");
  }
}

function addPassengerFields() {
  // добавление полей ввода для нового пассажира
}

function removePassengerFields() {
  // удаление полей ввода последнего пассажира
}

// привязка функций к кнопкам
document.querySelector(".passager_num_buttons").addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    let btnValue = parseInt(event.target.textContent);
    while (passengers !== btnValue) {
      if (passengers > btnValue) {
        removePassenger();
      } else {
        addPassenger();
      }
    }
  }
});

document.querySelector(".frame_booking_buttons").addEventListener("click", function(event) {
  if (event.target.textContent === "+") {
    addPassenger();
  } else if (event.target.textContent === "-") {
    removePassenger();
  }
});