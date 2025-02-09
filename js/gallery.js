let loadMoreBtn = document.querySelector('#load-more');
let boxes = document.querySelectorAll('.grid-container .box');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    for (let i = currentItem; i < currentItem + 3 && i < boxes.length; i++) {
        boxes[i].style.display = 'block'; // Show more boxes
    }
    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none'; // Hide button if no more items
    }
};