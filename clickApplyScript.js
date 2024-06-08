document.addEventListener('DOMContentLoaded', function() {
  // Targeting the button by its id
    const applyButton = document.getElementById('indeedApplyButton');

    Console.log(applyButton)

  // Check if the button exists to avoid errors
    if (applyButton) {
        Console.log('Clicked')
      applyButton.click();

  }
});