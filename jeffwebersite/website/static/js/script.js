window.addEventListener('DOMContentLoaded', function() {
    const modalTrigger = document.querySelectorAll('[data-modal]'),
            modal = document.querySelector('.modal'),
            modalCloseBtn = document.querySelector('[data-close]');

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', openModal);
        });

        function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        }

        modalCloseBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

});


