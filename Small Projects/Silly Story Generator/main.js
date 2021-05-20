const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewal', 'turned into a slug and crawled away'];
randomize.addEventListener('click', result);  //Adds a click event listener to the randomize variable so that when the button it represents is clicked, the result() function is run

function result() {


    let newStory = storyText;   //This is needed so we can create a new random story each time the button is pressed and the function is run
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if (customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('Bob', name)

    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300 * 0.0714286) + 'stone';
        let temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}