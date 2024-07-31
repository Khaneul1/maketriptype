const buttons = document.querySelectorAll('button');
const nextButton = document.querySelectorAll('.next');

const handleButtonClick = (event) => {
  const clickedButton = event.target;
  const group = clickedButton.getAttribute('data-group');
  buttons.forEach((button) => {
    if (button.getAttribute('data-group') === group) {
      if (button === clickedButton) {
        button.classList.toggle('selected');
      } else {
        button.classList.remove('selected');
      }
    }
  });
};

const handleNextClick = () => {
  const selectedTravelBtn = document.querySelectorAll(
    'button[data-group="travel"].selected'
  );
  const selectedDurationBtn = document.querySelectorAll(
    'button[data-group="duration"].selected'
  );

  const travelType = selectedTravelBtn
    ? selectedTravelBtn.getAttribute('data-type')
    : null;
  const durationType = selectedDurationBtn
    ? selectedDurationBtn.getAttribute('data-type')
    : null;
};

buttons.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});
