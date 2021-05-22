export default function isHiddenModal() {
   const modals = document.querySelectorAll('div.pnotify, div.pnotify, div.pnotify-container');
       if (modals) {
           modals.forEach(modal => {
               modal.classList.add('.is-hidden');
        })
    }
  
}