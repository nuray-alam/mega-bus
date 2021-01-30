function changeTicketCounts(currentTicketCountId, isIncrease) {
    const currentTicketCount = parseInt(document.getElementById(currentTicketCountId).value);
    let updatedTicketCount = 0; // initially dummy value
    if (isIncrease == true) {
        updatedTicketCount = currentTicketCount + 1;
    }
    else if (currentTicketCount > 0) {
        updatedTicketCount = currentTicketCount - 1;
    }
    document.getElementById(currentTicketCountId).value = updatedTicketCount;


    // updating bill section
    const subTotal = document.getElementById('subTotal');
    const vat = document.getElementById('vat');
    const total = document.getElementById('total');
    const firstClassTicketCount = parseInt(document.getElementById('first-class-current-ticket-count').value);
    const economyClassTicketCount = parseInt(document.getElementById('economy-current-ticket-count').value);
    const subTotalCount = firstClassTicketCount * 150 + economyClassTicketCount * 100;
    const vatCount = Math.round(subTotalCount * 0.1);
    const totalCount = subTotalCount + vatCount;
    subTotal.innerText = '$' + subTotalCount;
    vat.innerText = '$' + vatCount;
    total.innerText = '$' + totalCount;
    
}