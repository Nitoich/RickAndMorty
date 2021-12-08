let currentPage = 1

getOnePage(currentPage);

document.getElementById('getNextPage').addEventListener('click', function(event) {
    toggleModal();
    currentPage++
    getOnePage(currentPage);
    if (currentPage == 42) {
        this.classList.add('display-none');
    }
});