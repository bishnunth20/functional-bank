document.getElementById('deposit-button').addEventListener
('click', function () {
  const depositInput = document.getElementById('deposit-input');
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);

  // get and update deposit total
  const depositTotal = document.getElementById('deposit-total');
  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);

  depositTotal.innerText = previousDepositTotal + depositAmount;

  // clear input field
  depositInput.value = '';
})