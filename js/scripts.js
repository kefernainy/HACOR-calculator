// Empty JS for your own code to be here

$('select').change(function () {
  let HACORScore =
    Number($('#HRSelect').val()) +
    Number($('#pHSelect').val()) +
    Number($('#GCSSelect').val()) +
    Number($('#PFSelect').val()) +
    Number($('#RRSelect').val());

  $('#HACORScoreResult').text(HACORScore);

  let explanationText = '';

  if (HACORScore <= 2) {
    explanationText = '4.2% chance of failure.';
  } else if (HACORScore <= 4) {
    explanationText = '5.9% chance of failure.';
  } else if (HACORScore <= 6) {
    explanationText = '21.6% chance of failure.';
  } else if (HACORScore <= 8) {
    explanationText = '33.9% chance of failure.';
  } else if (HACORScore <= 10) {
    explanationText = '47.7% chance of failure.';
  } else if (HACORScore <= 12) {
    explanationText = '60.7% chance of failure.';
  } else if (HACORScore >= 13) {
    explanationText = '78.4% chance of failure.';
  }

  

  $('#scoreExplanation').text(explanationText);
});
