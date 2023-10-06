

const openModal = document.querySelectorAll('.openModal')
const aside = document.querySelector('aside')
const main = document.querySelector('main')
const ham = document.querySelector('.ham')
openModal.forEach((item) => {
  item.addEventListener('click', () => {
    aside.classList.remove('openAside')
    main.classList.remove('openMain')
    ham.classList.remove('close')
  })
})
