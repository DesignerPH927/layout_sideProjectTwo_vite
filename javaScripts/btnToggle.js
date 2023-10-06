

const ham = document.querySelector('.ham')
const main = document.querySelector('main')
const aside = document.querySelector('aside')
ham.addEventListener('click', () => {
  ham.classList.toggle('close')
  main.classList.toggle('openMain')
  aside.classList.toggle('openAside')
})