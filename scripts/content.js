function hideSponsoredContent() {
    // Find all spans with text 'sponsored'.
    const sponsoredElements = document.querySelectorAll('span');

    sponsoredElements.forEach(element => {
        if (element.textContent.toLowerCase() === 'sponsored') {

            let parentDiv = element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement

            if (parentDiv) {

                parentDiv.style.transition = 'max-height 1s, opacity 0.7s, transform 1s';
                // Set the initial state
                parentDiv.style.maxHeight = '100px';  // Set maxHeight to the current height
                parentDiv.style.opacity = '1'; // Ensure the opacity is visible
                parentDiv.style.transformOrigin = 'top'; // Scale from the top

                // Trigger the transition
                setTimeout(() => {
                    parentDiv.style.maxHeight = '0'; // Shrink the height
                    parentDiv.style.opacity = '0'; // Fade out
                    parentDiv.style.transform = 'scaleY(0)'; // Shrink the element vertically
                }, 0);

                // After fade-out completes, hide the element
                setTimeout(() => {
                    parentDiv.style.display = 'none'; // Hide after fade-out
                    console.log('Sponsors are now hidden!');
                }, 1000);  // Matches the duration of the fade (1 second)
            }
        }
    });
}

// Set up MutationObserver to detect changes in the DOM
const observer = new MutationObserver(() => {
    hideSponsoredContent();  // Run the function on any DOM changes
});

// Start observing the document body for child additions
observer.observe(document.body, {
    childList: true,
    subtree: true
});
