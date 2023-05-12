//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArticle(touristSpot) {
  // Split the tourist spot into words
  const words = touristSpot.split(' ');
  
  // Check if the first word is an article
  if (['a', 'an', 'the'].includes(words[0].toLowerCase())) {
    // If it is, remove the first word and return the rest of the words
    return words.slice(1).join(' ');
  } else {
    // Otherwise, just return the tourist spot
    return touristSpot;
  }
}

// Sort the tourist spots by the modified names without articles
touristSpots.sort((a, b) => removeArticle(a).localeCompare(removeArticle(b)));

// Create a new ul element and add li elements for each tourist spot
const ul = document.createElement('ul');
ul.id = 'tourist-spots';
touristSpots.forEach(touristSpot => {
  const li = document.createElement('li');
  li.textContent = touristSpot;
  ul.appendChild(li);
});

// Append the ul element to the body
document.body.appendChild(ul);

