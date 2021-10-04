'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const modalBtn = document.querySelectorAll('[data-modal]'),
          modalClose = document.querySelectorAll('.modal__close'),
          modal = document.querySelectorAll('.modal'),
          burger = document.querySelector('.burger');

    // Modal
    modalBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget;

            // ............
            let modalId = target.getAttribute('data-modal');
            let modal = document.getElementById(modalId);
            // ...............
            modal.classList.add('show');
            document.body.classList.add('no-scroll');
            let modalContent = modal.querySelector('.modal__content');
            setTimeout(() => {
                modalContent.style.opacity = 1;
            }, 1);
        });
    });
    modalClose.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.target;
            let currentModal = target.closest('.modal');
            // let modalContent = modal.querySelector('.modal__content');
            // modalContent.style.opacity = 0;
            currentModal.classList.remove('show');
            document.body.classList.remove('no-scroll');
        });
    });

    // Сам сделал:

    window.addEventListener('keydown', (e) => {
        const code = e.code;
        modal.forEach(item => {
            if (code === 'Escape' && item.classList.contains('show')) {
                item.classList.remove('show');
                document.body.classList.remove('no-scroll');
            }
        });
    });

    modal.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.target;
            if (item == target && item.classList.contains('show')) {
                item.classList.remove('show');
                document.body.classList.remove('no-scroll');
            }
        });
    });


    // Sidebar

    const sidebar = document.getElementById('sidebar'),
          page = document.getElementById('page'),
          body = document.body;

    burger.addEventListener('click', () => {
        if (body.classList.contains('show-sidebar')) {
            closeSidebar();
        } else {
            showSidebar();
        }
    });
    function showSidebar() {
        let mask = document.createElement('div');
        mask.classList.add('page__mask');
        mask.addEventListener('click', closeSidebar);
        page.appendChild(mask);
        body.classList.add('show-sidebar');
    }
    function closeSidebar() {
        body.classList.remove('show-sidebar');
        document.querySelector('.page__mask').remove();

    }


    // Textarea autoresize высота текстового поля увеличивается с заполнением
    const textArea = document.querySelectorAll('[data-autoresize]');
    textArea.forEach(item => {
        let textAreaH = item.offsetHeight; // высота текстового поля - получаем с DOM дерева
        item.addEventListener('input', (e) => {
            let target = e.target;
            target.style.height = textAreaH + 'px';
            target.style.height = target.scrollHeight + 'px';
        });
    });
   
});