require ('./photos.js')
// console.log(PHOTOS)

// Filter out just png files
//console.log(PHOTOS.filter(photo => photo.format == 'png'))
// Now just print their names
//console.log(PHOTOS.filter(photo => photo.format == 'jpg').map(entry => entry.filename))

/*
 *
 *
 *
 *
 * let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
*/

let count = PHOTOS.reduce(function (allPhotos, photo) {
	if (photo.format == "jpg") {
		allPhotos++;
	}
	return allPhotos;	
}, 0);
console.log(count);
//let initialValue = 0;
//console.log(PHOTOS.reduce( (accumulator, currentValue) => { return currentValue.format =="jpg" } , 0 ));

// Ok here's some things for us to work on together
// Find any entries with the keyword 'Sunny Crest', print name & filepath
// How many of the photos are in the jpg format?
// Replace source names of 'Brian Capouch' with 'Brian L. Capouch'

// And then some things for you to work on as homework
// 1. Add some entries with different keywords (some same) and filetypes (Shoot for 8)
// 2. Run our "in-class" examples; make sure they work
// 3. Print the names of all the different unique sources
// 4. Count how many images contain a given keyword

