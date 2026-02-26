const bidForm = document.getElementById('bidForm');
const highestBidElement = document.getElementById('highestBid');
const highestBidderElement = document.getElementById('highestBidder');
const bidMessageElement = document.getElementById('bidMessage');

let highestBid = 0;
let highestBidder = 'None';

bidForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const bidderName = document.getElementById('bidderName').value.trim();
  const bidAmount = parseFloat(document.getElementById('bidAmount').value);

  if (bidAmount > highestBid) {
    highestBid = bidAmount;
    highestBidder = bidderName;
    highestBidElement.textContent = highestBid;
    highestBidderElement.textContent = highestBidder;
    bidMessageElement.textContent = `Congratulations ${bidderName}, you're the highest bidder!`;
    bidMessageElement.style.color = 'green';
  } else {
    bidMessageElement.textContent = `Your bid must be higher than $${highestBid}.`;
    bidMessageElement.style.color = 'red';
  }

  bidForm.reset();
});
