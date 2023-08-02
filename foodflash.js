// Get the "See More" button and partners grid elements
const seeMoreBtn = document.getElementById('seeMoreBtn');
const partnersGrid = document.getElementById('partnersGrid');

// Function to show more partner items
function showMorePartners() {
    const hiddenPartnerItems = partnersGrid.querySelectorAll('.partner-item.hidden');

    // Show 4 more partner items 
    for (let i = 0; i < 4; i++) {
        const partnerItem = hiddenPartnerItems[i];
        if (partnerItem) {
            partnerItem.classList.remove('hidden');
        }
    }

    // Hide the "See More" button if all partner items are visible
    if (hiddenPartnerItems.length <= 4) {
        seeMoreBtn.style.display = 'none';
    }
}

// Add click event listener to the "See More" button
seeMoreBtn.addEventListener('click', showMorePartners);
