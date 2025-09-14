document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('#competences .competence-list li');

    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            const skillId = item.getAttribute('data-skill');
            const description = document.getElementById(`desc-${skillId}`);

            description.classList.toggle('active');
        });
    });
});