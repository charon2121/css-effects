const radios = document.querySelectorAll('input[type="radio"]')
const panels = document.querySelectorAll('.panel')


panels.forEach((panel) => {
    panel.classList.add('display-none')
})


radios.forEach((radio) => {
    radio.addEventListener('change', () => {
        panels.forEach((panel) => {
            panel.classList.add('display-none')
        })

        if (radio.getAttribute('id') == 'radio-1') {
            document.getElementById('panel-1').classList.remove('display-none')
        }

        if (radio.getAttribute('id') == 'radio-2') {
            document.getElementById('panel-2').classList.remove('display-none')
        }

        if (radio.getAttribute('id') == 'radio-3') {
            document.getElementById('panel-3').classList.remove('display-none')
        }
    })
})