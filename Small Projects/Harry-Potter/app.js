const endpoint  ="http://hp-api.herokuapp.com/api/characters"

const hpcharacters = [];	//empty array to put our characters

fetch(endpoint)
  .then(blob => blob.json()) //the data comes from fetch could be anything, so convert blob into raw data into json
  .then(data => hpcharacters.push(...data))


function findMatches(wordToMatch, hpcharacters) {
	return hpcharacters.filter(name => {
// here we are figuring out if the name matches what was searched

		return name.hpcharacters.match() 
	});
};




// const searchInput = document.querySelector('.search')
// const suggestions = document.querySelector('.suggestions')


// searchInput.addEventListener('change', displayMatches)
// searchInput.addEventListener('keyup', displayMatches)