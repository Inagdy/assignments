const arrayOfQuotes = [
  {
    author: "Elbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you.",
  },
  {
    author: "Mahatma Gandhi",
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  },
  {
    author: "Ralph Waldo Emerson",
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  },
  {
    author: "Steve Jobs",
    quote:
      "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
  },
  {
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want.",
  },
  {
    author: "Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  { author: "Frank Sinatra", quote: "The best revenge is massive success." },
  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
  {
    author: "Maya Angelou",
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
];

var uniqnNumber;
var random;
function generate() {
  random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  if (uniqnNumber != random) {
    //   var container = random;
    // console.log(`\"${arrayOfQuotes[random].quote}\"`);

    uniqnNumber = random;

    document.querySelector(
      "#quote"
    ).textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector(
      "#author"
    ).textContent = `--${arrayOfQuotes[random].author}`;
  }
}
