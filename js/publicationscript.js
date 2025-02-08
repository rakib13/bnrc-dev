document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('pdf-modal');
    const pdfFrame = document.getElementById('pdf-frame');
    const closeModal = document.getElementById('close-modal');

    document.querySelectorAll('.pdf-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const pdfSrc = this.getAttribute('data-pdf'); // Get PDF file path
            pdfFrame.src = pdfSrc; // Set iframe source
            modal.style.display = 'flex'; // Show modal
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide modal
        pdfFrame.src = ''; // Clear iframe source
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            pdfFrame.src = ''; // Clear iframe source
        }
    });
});

////galleru script////

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.container .box-container .box')];
    for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}

