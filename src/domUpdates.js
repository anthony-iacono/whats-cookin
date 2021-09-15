// DOM UPDATE METHODS OBJECT
const domUpdates = {
  hide(...elements) {
    elements.forEach(element => {
      element.classList.add('hidden');
    })
  },

  show(...views) {
    views.forEach(view => view.classList.remove('hidden'));
  },

  displayPopout() {
    
  }

}

export default domUpdates;
