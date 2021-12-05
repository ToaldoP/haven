/*CLOSE OVERLAY*/
const modalOverlay = document.querySelector('.modal-overlay')
const galleryOverlay = document.querySelector('.gallery-overlay')

document.addEventListener('click', function (event) {
  let clickOutside = modalOverlay.contains(event.target)
  if (clickOutside) {
    closeOverlay()
  }
})

document.addEventListener('click', function (event) {
  let clickOutside = galleryOverlay.contains(event.target)
  if (clickOutside) {
    closeOverlay()
  }
})

function closeOverlay() {
  modalOverlay.classList.remove('show')
  galleryOverlay.classList.remove('show')
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

/*OPEN AND CLOSE SHARE MODAL*/
const moreInfosButton = document.querySelector('#more-infos')
const moreInfosModal = document.querySelector('#more-infos-modal')

moreInfosButton.addEventListener('click', openInfosModal)

function openInfosModal(event) {
  moreInfosModal.classList.add('show')
  modalOverlay.classList.add('show')
  event.stopImmediatePropagation()
}

function closeMoreInfosModal() {
  moreInfosModal.classList.remove('show')
}

document.addEventListener('click', function (event) {
  let clickOutside = !moreInfosModal.contains(event.target)
  if (clickOutside) {
    closeMoreInfosModal()
  }
})

/*OPEN AND CLOSE GALLERY MODAL & FAVORITE INTERACTION*/
const galleryButton = document.querySelector('.main-photo')
const galleryModal = document.querySelector('#gallery-modal')
const favoriteButton = document.querySelector('.favorite-button')

favoriteButton.addEventListener('click', alerta)

function alerta(event) {
  console.log('favorito')
  event.stopImmediatePropagation()
}

galleryButton.addEventListener('click', openGalleryModal)

function openGalleryModal(event) {
  galleryModal.classList.add('show')
  galleryOverlay.classList.add('show')
  event.stopImmediatePropagation()
}

function closeGalleryModal() {
  galleryModal.classList.remove('show')
}

document.addEventListener('click', function (event) {
  let clickOutside = !galleryModal.contains(event.target)
  if (clickOutside) {
    closeGalleryModal()
  }
})

/*PHOTO-GALLERY INTERACTION*/
let displayed = document.querySelector('#displayed')
let galleryPhotos = document.querySelectorAll('.gallery-scroll')
let borderPhoto = document.querySelectorAll('.announce-photo')

galleryPhotos.forEach(li => li.addEventListener('click', displayPhoto))

function displayPhoto(e) {
  displayed.src = e.target.src  
}


for (var i = 0; i < borderPhoto.length; i++) {
  borderPhoto[i].addEventListener("click", function() {
    (document.querySelector('.show-border')) ? document.querySelector('.show-border').classList.remove('show-border') : '';
    this.classList.add('show-border');
  });
} 




 