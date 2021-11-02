const shareButton = document.getElementById('open-share-modal')
let shareModal = document.getElementsByClassName('share-modal')

shareButton.addEventListener('click', function () {
  document.querySelector('.share-modal').style.visibility = 'visible'
})

document.addEventListener('click', function (event) {
  if (event.target.closest('.share-modal')) {
    closeShareModal()
  }
})

function closeShareModal() {
  document.querySelector('.share-modal').style.visibility = 'hidden'
}
