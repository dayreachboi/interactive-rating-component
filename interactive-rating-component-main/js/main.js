let selectedRating = 0;

function rate(rating) {
  selectedRating = rating;
  updateSelectedRatingDisplay();
}

function updateSelectedRatingDisplay() {
  document.getElementById('selectedRating').innerText = `You rated: ${selectedRating}`;
}
