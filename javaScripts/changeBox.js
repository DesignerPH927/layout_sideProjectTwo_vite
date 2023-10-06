


const coverAssignMentContentBox = document.querySelector('.coverAssignMentContentBox')
const replyBtn = document.querySelector('.replyBtn')
const selectList = document.querySelector('.selectList')
const cancelBtn = document.querySelector('.cancelBtn')
// console.log(replyBtn);
replyBtn.addEventListener('click', () => {
  coverAssignMentContentBox.classList.add('active')
  selectList.classList.add('hideList')
})
cancelBtn.addEventListener('click', () => {
  coverAssignMentContentBox.classList.remove('active')
  selectList.classList.remove('hideList')
})