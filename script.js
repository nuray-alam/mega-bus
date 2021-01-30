function changeTicketCounts(currentTicketCountId, isIncrease) {
    const currentTicketCount = getInputValue(currentTicketCountId);
    let updatedTicketCount = 0; // initially dummy value
    if (isIncrease == true && currentTicketCount >= 0) {
        updatedTicketCount = currentTicketCount + 1;
    }
    else if (currentTicketCount > 0) {
        updatedTicketCount = currentTicketCount - 1;
    }
    document.getElementById(currentTicketCountId).value = updatedTicketCount;
    updateBillSection();
}
//update bill secetion function
function updateBillSection() {
    const firstClassTicketCount = getInputValue('first-class-current-ticket-count')
    const economyClassTicketCount = getInputValue('economy-current-ticket-count')
    if (firstClassTicketCount >= 0 && economyClassTicketCount >= 0) {
        const subTotalCount = firstClassTicketCount * 150 + economyClassTicketCount * 100;
        const vatCount = Math.round(subTotalCount * 0.1);
        const totalCount = subTotalCount + vatCount;
        // changing the bill section value
        changeInnerText('subTotal', '$' + subTotalCount);
        changeInnerText('vat', '$' + vatCount);
        changeInnerText('total', '$' + totalCount);
    }
    else {
        alert('Please avoid negative input or empty field');
    }
}
//get input value function
function getInputValue(inputId) {
    const inputValue = parseFloat(document.getElementById(inputId).value);
    return Math.round(inputValue);
}
//inner text changing function
function changeInnerText(idToChangeInnerText, valueToSet) {
    document.getElementById(idToChangeInnerText).innerText = valueToSet;
}
//changing display property function
function changeDisplayProperty(hidingElementId, property) {
    document.getElementById(hidingElementId).style.display = property;
}
// cofiramation function
function confirmation() {
    if (document.getElementById('total').innerText == '$00') {
        alert('To confirm booking you have to add at least one ticket');
    }
    else {
        document.getElementById('form-detail-section').style.display = 'none';
        changeDisplayProperty('confirmation-section', 'none');
        document.getElementById('booking-id').innerText = 'Your Booking ID is : ' + Math.ceil((1000000 * Math.random()));
        changeDisplayProperty('confirmation-message', 'block');
    }
}