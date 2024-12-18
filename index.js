//MODAL SECTION
// Open modal function
function openModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    modal.style.display = 'flex'; // Make the modal visible and centered
    modalImg.src = img.src; // Set the modal image source
}

// Close modal function
document.querySelector('.close').onclick = function () {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none'; // Hide the modal
};

// Close modal when clicking outside the image
document.getElementById('imageModal').onclick = function (e) {
    if (e.target === this) {
        this.style.display = 'none'; // Hide the modal
    }
};
