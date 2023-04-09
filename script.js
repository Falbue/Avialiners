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