// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Function to show a specific tab
function showTab(tabName) {
    // Hide all tab contents
    tabContents.forEach(content => {
        content.classList.remove('active');
        content.setAttribute('hidden', '');
    });

    // Remove active class from all buttons
    tabButtons.forEach(button => {
        button.classList.remove('active');
        button.setAttribute('aria-selected', 'false');
    });

    // Show the selected tab content
    const selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.classList.add('active');
        selectedContent.removeAttribute('hidden');
    }

    // Set the selected button as active
    const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
        selectedButton.setAttribute('aria-selected', 'true');
    }
}

// Add click event listeners to all tab buttons
tabButtons.forEach(button => {
    button.addEventListener('click', function () {
        const tabName = this.getAttribute('data-tab');
        showTab(tabName);
    });
});

// Keyboard navigation (optional: arrow keys support)
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const focusedButton = document.activeElement;
        if (focusedButton.classList.contains('tab-button')) {
            const buttons = Array.from(tabButtons);
            const currentIndex = buttons.indexOf(focusedButton);
            let nextIndex = currentIndex;

            if (e.key === 'ArrowLeft') {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
            } else if (e.key === 'ArrowRight') {
                nextIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
            }

            buttons[nextIndex].focus();
            buttons[nextIndex].click();
        }
    }
});

// Log page load
console.log('Portfolio loaded successfully!');
