const listItems = document.querySelectorAll('.content__container_tools_item');

listItems.forEach(el => {
    el.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');
    });
}); 