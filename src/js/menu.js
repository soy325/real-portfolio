export function menu(parans) {
    const headerToggle = document.getElementById('headerToggle')
    const headerNew = document.querySelector('#header')

    if (headerToggle) {
        headerToggle.addEventListener('click', function () {
            headerNew.classList.toggle('show')

            headerToggle.getAttribute('aria-expanded') === 'true'
                ? headerToggle.setAttribute('aria-expanded', 'false')
                : headerToggle.setAttribute('aria-expanded', 'true')

        })
    }
}