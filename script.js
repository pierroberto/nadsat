const words = [
  { word: "Appypolly loggy", description: "Apology", letter: "A" },
  { word: "Baboochka", description: "Old woman", letter: "B" },
  { word: "Baddiwad", description: "Bad", letter: "B" },
  { word: "Banda", description: "Band", letter: "B" },
  { word: "Bezoomy", description: "Mad", letter: "B" },
  { word: "Biblio", description: "Library", letter: "B" },
  { word: "Bitva", description: "Battle", letter: "B" },
  { word: "Bog", description: "God", letter: "B" },
  { word: "Bolnoy", description: "Sick", letter: "B" },
  { word: "Bolshy", description: "Big", letter: "B" },
  { word: "Bratchny", description: "Bastard", letter: "B" },
  { word: "Bratty", description: "Brother", letter: "B" },
  { word: "Britva", description: "Razor", letter: "B" },
  { word: "Brooko", description: "Belly", letter: "B" },
  { word: "Brosay", description: "Throw", letter: "B" },
  { word: "Bugatty", description: "Rich", letter: "B" },
  { word: "Cal", description: "Shit", letter: "C" },
  { word: "Cancer", description: "Cigarette", letter: "C" },
  { word: "Cantora", description: "Office", letter: "C" },
  { word: "Carman", description: "Pocket", letter: "C" },
  { word: "Chai", description: "Tea", letter: "C" },
  { word: "Charlie", description: "Chaplain/Priest", letter: "C" },
  { word: "Chasha", description: "Cup", letter: "C" },
  { word: "Chasso", description: "Guard", letter: "C" },
  { word: "Cheena", description: "Woman", letter: "C" },
  { word: "Cheest", description: "Wash", letter: "C" },
  { word: "Chelloveck", description: "Fellow", letter: "C" },
  { word: "Chepooka", description: "Nonsense", letter: "C" },
  { word: "Choodessny", description: "Wonderful", letter: "C" },
  { word: "Chumble", description: "Mumble", letter: "C" },
  { word: "Clop", description: "Knock", letter: "C" },
  { word: "Cluve", description: "Beak", letter: "C" },
  { word: "Collocol", description: "Bell", letter: "C" },
  { word: "Crark", description: "Yowl", letter: "C" },
  { word: "Crast", description: "Steal", letter: "C" },
  { word: "Creech", description: "Scream", letter: "C" },
  { word: "Cutter", description: "Money", letter: "C" },
  { word: "Dama", description: "Lady", letter: "D" },
  { word: "Ded", description: "Old Man", letter: "D" },
  { word: "Deng", description: "Money", letter: "D" },
  { word: "Devotchka", description: "Girl", letter: "D" },
  { word: "Dobby", description: "Good", letter: "D" },
  { word: "Domy", description: "House", letter: "D" },
  { word: "Dook", description: "Ghost", letter: "D" },
  { word: "Dorogoy", description: "Valuable", letter: "D" },
  { word: "Drat", description: "Fight", letter: "D" },
  { word: "Drencrom", description: "A drug", letter: "D" },
  { word: "Droog", description: "Friend", letter: "D" },
  { word: "Dva", description: "Two", letter: "D" },
  { word: "Eegra", description: "Game", letter: "E" },
  { word: "Eemya", description: "Name", letter: "E" },
  { word: "Eggiweg", description: "Egg", letter: "E" },
  { word: "Em", description: "Mum", letter: "E" },
  { word: "Fagged", description: "Tired", letter: "F" },
  { word: "Filly", description: "Play", letter: "F" },
  { word: "Firegold", description: "A particular drink", letter: "F" },
  { word: "Forella", description: "Trout", letter: "F" },
  { word: "Gazetta", description: "Newspaper", letter: "G" },
  { word: "Glazz", description: "Eye", letter: "G" },
  { word: "Gloopy", description: "Stupid", letter: "G" },
  { word: "Godman", description: "Priest", letter: "G" },
  { word: "Golly", description: "Unit of Money", letter: "G" },
  { word: "Goloss", description: "Voice", letter: "G" },
  { word: "Goober", description: "Lip", letter: "G" },
  { word: "Gooly", description: "To Walk", letter: "G" },
  { word: "Gorlo", description: "Throat", letter: "G" },
  { word: "Govoreet", description: "To speak or talk", letter: "G" },
  { word: "Grazhny", description: "Dirty", letter: "G" },
  { word: "Grazzy", description: "Soiled", letter: "G" },
  { word: "Gromky", description: "Loud", letter: "G" },
  { word: "Groody", description: "Breast", letter: "G" },
  { word: "Gruppa", description: "Group", letter: "G" },
  { word: "Guff", description: "Laugh", letter: "G" },
  { word: "Gulliver", description: "Head", letter: "G" },
  { word: "Guttiwuts", description: "Guts", letter: "G" },
  { word: "Hen-korm", description: "Chickenfeed", letter: "H" },
  { word: "Horn", description: "To Cry Out", letter: "H" },
  { word: "Horrorshow", description: "Good, well", letter: "H" },
  { word: "Hound-and-Horny", description: "Corny", letter: "H" },
  { word: "In-out-in-out", description: "Sex", letter: "I" },
  { word: "Interessovat", description: "To interest", letter: "I" },
  { word: "Itty", description: "To go", letter: "I" },
  { word: "Jammiwam", description: "Jam", letter: "J" },
  { word: "Jeezny", description: "Life", letter: "J" },
  { word: "Kartoffel", description: "Potatoes", letter: "K" },
    { word: "Keeshkas", description: "Guts", letter: "K" },
    { word: "Kleb", description: "Bread", letter: "K" },
    { word: "Klootch", description: "Key", letter: "K" },
    { word: "Knopka", description: "Button", letter: "K" },
    { word: "Kopat", description: "To Dig", letter: "K" },
    { word: "Koshka", description: "Cat", letter: "K" },
    { word: "Kot", description: "Tomcat", letter: "K" },
    { word: "Krovvy", description: "Blood", letter: "K" },
    { word: "Kupet", description: "To Buy", letter: "K" },
    { word: "Lapa", description: "Paw", letter: "L" },
    { word: "Lewdies", description: "People", letter: "L" },
    { word: "Lighter", description: "Crone (?)", letter: "L" },
    { word: "Litso", description: "Face", letter: "L" },
    { word: "Lomtick", description: "Slice", letter: "L" },
    { word: "Loveted", description: "Caught", letter: "L" },
    { word: "Lubbilubbing", description: "Making love", letter: "L" },
    { word: "Luscious Glory", description: "Hair", letter: "L" },
    { word: "Malchick", description: "Boy", letter: "M" },
    { word: "Malenky", description: "Little", letter: "M" },
    { word: "Maslo", description: "Butter", letter: "M" },
    { word: "Merzky", description: "Filthy", letter: "M" },
    { word: "Messel", description: "Thought", letter: "M" },
    { word: "Mesto", description: "Place", letter: "M" },
    { word: "Millicent", description: "Policeman", letter: "M" },
    { word: "Minoota", description: "Minute", letter: "M" },
    { word: "Molodoy", description: "Young", letter: "M" },
    { word: "Moloko", description: "Milk", letter: "M" },
    { word: "Moodge", description: "Man", letter: "M" },
    { word: "Morder", description: "Snout", letter: "M" },
    { word: "Mounch", description: "Snack", letter: "M" },
    { word: "Mozg", description: "Brain", letter: "M" },
    { word: "Nachinat", description: "To Begin", letter: "N" },
    { word: "Nadmenny", description: "Arrogant", letter: "N" },
    { word: "Nadsat", description: "Teenage", letter: "N" },
    { word: "Nagoy", description: "Naked", letter: "N" },
    { word: "Nazz", description: "Fool", letter: "N" },
    { word: "Neezhnies", description: "Underpants", letter: "N" },
    { word: "Nochy", description: "Night", letter: "N" },
    { word: "Noga", description: "Foot", letter: "N" },
    { word: "Nozh", description: "Knife", letter: "N" },
    { word: "Nuking (scent)", description: "Smelling (of perfume)", letter: "N" },
    { word: "Oddy-knocky", description: "Lonesome", letter: "O" },
    { word: "Odin", description: "One", letter: "O" },
    { word: "Okno", description: "Window", letter: "O" },
    { word: "Oobivat", description: "To Kill", letter: "O" },
    { word: "Ookadeet", description: "To leave", letter: "O" },
    { word: "Ooko", description: "Ear", letter: "O" },
    { word: "Oomny", description: "Clever", letter: "O" },
    { word: "Oozhassny", description: "Terrible", letter: "O" },
    { word: "Oozy", description: "Chain", letter: "O" },
    { word: "Orange", description: "Man", letter: "O" },
    { word: "Osoosh", description: "To Dry", letter: "O" },
    { word: "Otchkies", description: "Eyeglasses", letter: "O" },
    { word: "Pan-handle", description: "Erection", letter: "P" },
    { word: "Pee", description: "Father", letter: "P" },
    { word: "Peet", description: "To Drink", letter: "P" },
    { word: "Pishcha", description: "Food", letter: "P" },
    { word: "Platch", description: "To Cry", letter: "P" },
    { word: "Platties", description: "Clothes", letter: "P" },
    { word: "Plenny", description: "Prisoner", letter: "P" },
    { word: "Plesk", description: "Splash", letter: "P" },
    { word: "Pletcho", description: "Shoulder", letter: "P" },
    { word: "Plott", description: "Flesh", letter: "P" },
    { word: "Podooshka", description: "Pillow", letter: "P" },
    { word: "Pol", description: "Sex", letter: "P" },
    { word: "Polezny", description: "Useful", letter: "P" },
    { word: "Polyclef", description: "Skeleton key", letter: "P" },
    { word: "Pony", description: "To understand", letter: "P" },
    { word: "Poogly", description: "Scared", letter: "P" },
    { word: "Pooshka", description: "Gun", letter: "P" },
    { word: "Pop-disk", description: "Pop-music disc", letter: "P" },
    { word: "Prestoopnik", description: "Criminal", letter: "P" },
    { word: "Pretty Polly", description: "Money", letter: "P" },
    { word: "Privodeet", description: "To lead somewhere", letter: "P" },
    { word: "Prod", description: "To produce", letter: "P" },
    { word: "Ptitsa", description: "Girl", letter: "P" },
    { word: "Pyahnitsa", description: "Drunk", letter: "P" },
    { word: "Rabbit", description: "Work", letter: "R" },
    { word: "Radosty", description: "Joy", letter: "R" },
    { word: "Raskazz", description: "Story", letter: "R" },
    { word: "Rasoodock", description: "Mind", letter: "R" },
    { word: "Raz", description: "Time", letter: "R" },
    { word: "Razdrez", description: "Upset", letter: "R" },
    { word: "Razrez", description: "To Rip", letter: "R" },
    { word: "Rooker", description: "Hand", letter: "R" },
    { word: "Rot", description: "Mouth", letter: "R" },
    { word: "Rozz", description: "Policeman", letter: "R" },
    { word: "Sabog", description: "Shoe", letter: "S" },
    { word: "Sakar", description: "Sugar", letter: "S" },
    { word: "Sammy", description: "Generous", letter: "S" },
    { word: "Sarky", description: "Sarcastic", letter: "S" },
    { word: "Scoteena", description: "\"Cow\"", letter: "S" },
    { word: "Shaika", description: "Gang", letter: "S" },
    { word: "Sharp", description: "Female", letter: "S" },
    { word: "Sharries", description: "Balls", letter: "S" },
    { word: "Shest", description: "Pole", letter: "S" },
    { word: "Shilarny", description: "Concern", letter: "S" },
    { word: "Shive", description: "\"Slice, cut\"", letter: "S" },
    { word: "Shiyah", description: "Neck", letter: "S" },
    { word: "Shlaga", description: "Club", letter: "S" },
    { word: "Shlapa", description: "Hat", letter: "S" },
    { word: "Shlem", description: "Helmet", letter: "S" },
    { word: "Shoom", description: "Noise", letter: "S" },
    { word: "Shoot", description: "Fool (v.)", letter: "S" },
    { word: "Sinny", description: "\"Movies, film\"", letter: "S" },
    { word: "Skazat", description: "To say", letter: "S" },
    { word: "Skolliwoll", description: "School", letter: "S" },
    { word: "Skorry", description: "\"Quick, quickly\"", letter: "S" },
    { word: "Skriking", description: "Scratching", letter: "S" },
    { word: "Skvat", description: "To Grab", letter: "S" },
    { word: "Sladky", description: "Sweet", letter: "S" },
    { word: "Sloochat", description: "To happen", letter: "S" },
    { word: "Slooshy", description: "\"To listen, hear\"", letter: "S" },
    { word: "Slovo", description: "Word", letter: "S" },
    { word: "Smeck", description: "Laugh (n.)", letter: "S" },
    { word: "Smot", description: "To look", letter: "S" },
    { word: "Sneety", description: "Dream", letter: "S" },
    { word: "Snoutie", description: "\"Tobacco, snuff\"", letter: "S" },
    { word: "Snuff It", description: "To Die", letter: "S" },
    { word: "Sobirat", description: "Pick Up", letter: "S" },
    { word: "Sod", description: "Bastard (idiom)", letter: "S" },
    { word: "Sodding", description: "Fucking (idiom)", letter: "S" },
    { word: "Soomka", description: "Woman", letter: "S" },
    { word: "Soviet", description: "\"Advice, order\"", letter: "S" },
    { word: "Spat, spatchka", description: "Sleep", letter: "S" },
    { word: "Spoogy", description: "Terrified", letter: "S" },
    { word: "Staja", description: "State Jail", letter: "S" },
    { word: "Starry", description: "\"Old, ancient\"", letter: "S" },
    { word: "Strack", description: "Horror", letter: "S" },
    { word: "Synthmesc", description: "A particular drug", letter: "S" },
    { word: "Tally", description: "Waist", letter: "T" },
    { word: "Tashtook", description: "Handkerchief", letter: "T" },
    { word: "Tass", description: "Cup", letter: "T" },
    { word: "Tolchock", description: "To hit", letter: "T" },
    { word: "Toofles", description: "Slippers", letter: "T" },
    { word: "Tree", description: "Three", letter: "T" },
    { word: "Vareet", description: "\"To \"cook up\"\"", letter: "V" },
    { word: "Vaysay", description: "\"Washroom, toilet\"", letter: "V" },
    { word: "Veck", description: "Guy", letter: "V" },
    { word: "Vellocet", description: "A particular drug", letter: "V" },
    { word: "Veshch", description: "Thing", letter: "V" },
    { word: "Viddy", description: "To see", letter: "V" },
    { word: "Voloss", description: "Hair", letter: "V" },
    { word: "Von", description: "Smell (n.)", letter: "V" },
    { word: "Vred", description: "To Harm", letter: "V" },
    { word: "Warble", description: "Song", letter: "W" },
    { word: "Yahma", description: "Hole", letter: "Y" },
    { word: "Yahoody", description: "Jew", letter: "Y" },
    { word: "Yahzick", description: "Tongue", letter: "Y" },
    { word: "Yarbles", description: "\"Balls, testicles\"", letter: "Y" },
    { word: "Yeckate", description: "To Drive", letter: "Y" },
    { word: "Zammechat", description: "Remarkable", letter: "Z" },
    { word: "Zasnoot", description: "To Sleep", letter: "Z" },
    { word: "Zheena", description: "Wife", letter: "Z" },
    { word: "Zoobies", description: "Teeth", letter: "Z" },
    { word: "Zvonock", description: "Doorbell/Bellpull", letter: "Z" },
    { word: "Zvook", description: "Sound", letter: "Z" },
];


const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const cardsContainer = document.getElementById("cards-container");
const alphabetList = document.getElementById("alphabet-list");
const currentLetter = document.getElementById("current-letter");

// Populate the cards
words.forEach(wordObj => {
  const card = document.createElement("div");
  card.className = "card";
  card.id = `word-${wordObj.word}`;
  card.dataset.letter = wordObj.letter;
  card.innerHTML = `
      <div class="word">${wordObj.word}</div>
      <div class="description">${wordObj.description}</div>
  `;
  cardsContainer.appendChild(card);
});

// Populate the alphabet bar
alphabet.forEach(letter => {
  const li = document.createElement("li");
  li.textContent = letter;
  li.onclick = () => scrollToLetter(letter);
  alphabetList.appendChild(li);
});

// Scroll to the first word with the selected letter, considering the top bar height
function scrollToLetter(letter) {
  const firstWord = words.find(word => word.letter === letter);
  if (firstWord) {
      const element = document.getElementById(`word-${firstWord.word}`);
      const headerHeight = document.querySelector(".header").offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

      // Adjust for header height
      window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth",
      });
  }
}

// Update the current letter dynamically as the user scrolls
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  const headerHeight = document.querySelector(".header").offsetHeight;

  for (let card of cards) {
      const rect = card.getBoundingClientRect();
      if (rect.top >= headerHeight && rect.top <= window.innerHeight / 2) {
          currentLetter.textContent = card.dataset.letter;
          break;
      }
  }
});

