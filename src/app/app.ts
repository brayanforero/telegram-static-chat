const $toggleOptions = document.getElementById('toggle-options');
const $options = document.getElementById('card-options');

$toggleOptions.addEventListener('click', () => {
  if ($options.classList.contains('animate__slideInLeft')) {
    $options.classList.remove('animate__slideInLeft');
    $options.classList.add('animate__slideOutLeft');

    return;
  }

  $options.classList.remove('animate__slideOutLeft');
  $options.classList.add('animate__slideInLeft');
});
