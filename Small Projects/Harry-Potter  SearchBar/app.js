const endpoint  ="http://hp-api.herokuapp.com/api/characters"

const hpcharacters = [];  //empty array to put our characters

fetch(endpoint)
  .then(blob => blob.json()) //the data comes from fetch could be anything, so convert blob into raw data into json
  .then(data => hpcharacters.push(...data))
  .finally(() => { 
    console.log(hpcharacters)
  }) 
  

function findMatches(e) {
 console.log(e.target.value);
  const finalCharacters = hpcharacters.filter(hpCharacter => {
// here we are figuring out if the name matches what was searched
  return hpCharacter.name.toLowerCase().includes(e.target.value) || hpCharacter.image.toLowerCase().includes(e.target.value) ;
  });
  console.log('finalCharacters',finalCharacters)
  console.log(displayCharacters(finalCharacters))   //passing information to displayCharacter


};



const displayCharacters = function (characters)  {
    const html = characters.map((hpCharacter) => {
            return `
            <li class="hpCharacter">
                <h3>${hpCharacter.name}</h3>
                <img src="${hpCharacter.image}"></img>
                
            </li>
        `;
        })
        .join('');
  suggestions.innerHTML = html;

};



const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', findMatches)
searchInput.addEventListener('keyup', findMatches)





// function findMatches(e) {
//  console.log(e.target.value);
//   const finalCharacters = hpcharacters.filter(hpCharacter => {
// // here we are figuring out if the name matches what was searched
//   return hpCharacter.name.toLowerCase().includes(e.target.value) || hpCharacter.image.toLowerCase().includes(e.target.value) ;
//   });
//   console.log('finalCharacters',finalCharacters)


  
//   function displayCharacters(characters)  {

//     const html = characters.map((character) => {
//             return `
//             <li class="hpCharacter">
//                 <h3>${character.name}</h3>
//                 <img src="${character.image}"></img>
//             </li>
//         `;
//         })
//         .join('');
//   suggestions.innerHTML = html;


// };

// displayCharacters(finalCharacters)


// };