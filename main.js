/*CLOSE OVERLAY*/
const modalOverlay = document.querySelector('.modal-overlay')

document.addEventListener('click', function (event) {
  let clickOutside = modalOverlay.contains(event.target)
  if (clickOutside) {
    closeOverlay()
  }
})

function closeOverlay() {
  modalOverlay.classList.remove('show')
}

/*OPEN AND CLOSE CONTACT MODAL*/
const contactButton = document.querySelector('#contact-button')
const contactModal = document.querySelector('#contact-modal')

contactButton.addEventListener('click', openContact)

function openContact(event) {
  contactModal.classList.add('show')
  modalOverlay.classList.add('show')
  event.stopImmediatePropagation()
}

document.addEventListener('click', function (event) {
  let clickOutside = !contactModal.contains(event.target)
  if (clickOutside) {
    closeContactModal()
  }
})

function closeContactModal() {
  contactModal.classList.remove('show')
}

/*OPEN AND CLOSE SHARE MODAL*/
const shareButton = document.querySelector('#open-share-modal')
const shareModal = document.querySelector('#share-modal')

shareButton.addEventListener('click', openShare)

function openShare(event) {
  shareModal.classList.add('show')
  modalOverlay.classList.add('show')
  event.stopImmediatePropagation()
}

/* close */
document.addEventListener('click', function (event) {
  let clickOutside = !shareModal.contains(event.target)
  if (clickOutside) {
    closeShareModal()
  }
})

function closeShareModal() {
  shareModal.classList.remove('show')
}

document.addEventListener('click', function (event) {
  let clickOutside = !shareModal.contains(event.target)
  if (clickOutside) {
    closeShareModal()
  }
})
