"use strict";

// variables to hold the dice results

    var fate;
    var destiny;
    var karma;

// variables to hold the text of my life story

    var biographyOne;
    var biographyTwo;
    var biographyThree;

// variable to hold life story.. It holds the final string that will be displayed on the page.

    var lifeStory;

// random number generators to act as dice. They fill the fate, destiny, and karma vars...

    function myFate() {
        fate = Math.floor((Math.random() * 10) + 1);
        destiny = Math.floor((Math.random() * 10) + 1);
        karma = Math.floor((Math.random() * 10) + 1);
        }

// sends string into about.html page as text
// cycles through if else if statements to create a random story...

function pubBio() {
    myFate();

//if else statements for fate

    if (fate == 1) {
        biographyOne = "I grew up in the state of Florida for most of my early life.";
        } else if (fate == 2){
        biographyOne = "I have lived in Florida, Georgia, Alabama, Kentucky, and Iowa.";
        } else if (fate == 3){
        biographyOne = "I wanted to be an astronaut when I was a child.";
        } else if (fate == 4){
        biographyOne = "I moved to Kentucky in 2007.";
        } else if (fate == 5){
        biographyOne = "I have lived in Louisville since 2009.";
        } else if (fate == 6){
        biographyOne = "I have always like computers.";
        } else if (fate == 7){
        biographyOne = "I enjoyed playing games as a child.";
        } else if (fate == 8){
        biographyOne = "I have always been fascinated by technology.";
        } else if (fate == 9){
        biographyOne = "I was a voracious reader as a child.";
        } else {
        biographyOne = "When I was young I wanted to create Voltron.";
    }


//if else statements for destiny

    if (destiny == 1) {
        biographyTwo = "I became interested in game design as a teenager. I like to figure out hidden design decisions in games and also come up with my own game ideas.";
    } else if (destiny == 2){
        biographyTwo = "I love to read. I began reading as a child and I haven’t stopped reading daily since then.";
    } else if (destiny == 3){
        biographyTwo = "I like to build my own computers. It saves money and you can make your pc look amazing as well.";
    } else if (destiny == 4){
        biographyTwo = "I really like Javascript. Between HTML, CSS, and Javascript I choose Javascript as my favorite language.";
    } else if (destiny == 5){
        biographyTwo = "My favorite philosophical book is “The Tao of Pooh”.";
    } else if (destiny == 6){
        biographyTwo = "I enjoy playing games like Magic: the gathering, Dominion, and Ascension.";
    } else if (destiny == 7){
        biographyTwo = "I really like motorcycles. Japanese and European racing bikes are simply amazing machines.";
    } else if (destiny == 8){
        biographyTwo = "I like science fiction and fantasy shows most of the time. The Flash is my current favorite tv show.";
    } else if (destiny == 9){
        biographyTwo = "I am fascinated by history. I feel that an understanding of our history is vital to understanding where we are going.";
    } else {
        biographyTwo = "I enjoy leaning about science and technology. I find books like “Our Mathematical Universe” to be very fun to read.";
    }

//if else statements for karma

    if (karma == 1) {
        biographyThree = "In the future I want to focus on improving my coding skills and getting a career as web developer.";
    } else if (karma == 2) {
        biographyThree = "I would like to get certified as a .net developer at some point.";
    } else if (karma == 3) {
        biographyThree = "I want to get my motorcycle license in the near future and begin learning to drive motorcycles.";
    } else if (karma == 4) {
        biographyThree = "I want to travel the world. I want to visit Italy, England, Japan, China, and Germany.";
    } else if (karma == 5) {
        biographyThree = "I would like to see all 50 states in my lifetime.";
    } else if (karma == 6) {
        biographyThree = "I would like to visit the original Comic-Con in California.";
    } else if (karma == 7) {
        biographyThree = "I am interested in publishing a paper and pencil role playing game I designed.";
    } else if (karma == 8) {
        biographyThree = "I would like to visit Las Vegas and see all of the Cirque Du Soleil shows that are only shown there.";
    } else if (karma == 9) {
        biographyThree = "I want to visit New York and walk around the city.";
    } else {
        biographyThree = "I plan on eventually buying a house although I haven’t decided where I would like that house to be yet.";
    }


//combines fate destiny and karma into a single string as my life story
// and publishes it to <p> called biog in my about page.
    
    lifeStory = biographyOne + " " + biographyTwo + " " + biographyThree;
    document.getElementById("biog").innerHTML = lifeStory;
}
