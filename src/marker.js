
export default BuildMarker




function BuildMarker(categories) {

  this.categories = categories;

  if (this.categories === 'activities') {
    const markerDiv = document.createElement('div');
    markerDiv.style.backgroundImage = 'http://i.imgur.com/WbMOfMl.png';
    this.markerDiv = markerDiv;
  }

  if (this.categories === 'hotels') {
    const markerDiv = document.createElement('div')
    markerDiv.style.backgroundImage = 'http://i.imgur.com/D9574Cu.png'
    this.markerDiv = markerDiv;
  }

  if (this.restaurants === 'activities') {
    const markerDiv = document.createElement('div')
    markerDiv.classList(this.categories)
    markerDiv.style.backgroundImage = 'http://i.imgur.com/cqR6pUI.png'
    this.markerDiv = markerDiv;
  }
}



