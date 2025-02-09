var quotes = [
  "Talk is cheap. Show me the code. — Linus Torvalds",
  "Programs must be written for people to read, and only incidentally for machines to execute. — Harold Abelson",
  "The only way to learn a new programming language is by writing programs in it. — Dennis Ritchie",
  "Simplicity is the soul of efficiency. — Austin Freeman",
  "The best way to predict the future is to invent it. — Alan Kay",
  "Good programmers use their brains, not their fingers. — Robert C. Martin",
  "It's not a bug, it's a feature. — Anonymous",
  "First, solve the problem. Then, write the code. — John Johnson",
  "Programs are meant to be read by humans, and only incidentally for computers to execute. — Donald Knuth",
  "A good programmer is someone who always looks both ways before crossing a one-way street. — Anonymous",
  "There are only two hard things in computer science: cache invalidation and naming things. — Phil Karlton",
  "The most disastrous thing that you can ever learn is your first programming language. — Alan Kay",
  "If you want to be a programmer, think like a programmer. — Anonymous",
  "It's not that we need new ideas, but we need to stop having old ideas. — Edwin Land",
  "Code never lies, comments sometimes do. — Ron Jeffries",
  "When debugging, novices insert print statements, experts remove them. — Unknown",
  "The function of good software is to make the complex appear to be simple. — Grady Booch",
  "Complexity is the enemy of maintenance. — Waseem Abbas",
  "In programming, the hard part isn’t solving problems, but deciding what problems to solve. — Unknown",
  "Everything should be made as simple as possible, but no simpler. — Albert Einstein",
  "The best way to get a good idea is to get a lot of ideas. — Linus Pauling",
  "Your most unhappy customers are your greatest source of learning. — Bill Gates",
  "The problem is not the problem. The problem is your attitude about the problem. — Captain Jack Sparrow",
  "A developer is a person who solves problems you didn’t know you had, in ways you don’t understand. — Unknown",
  "Good code is its own best documentation. — Steve McConnell",
  "It’s not the tools you have faith in – it’s the people you have faith in. — Steve Wozniak",
  "There are only two hard things in computer science: cache invalidation, naming things, and off-by-one errors. — Leon Bambrick",
  "In programming, the difference between a good developer and a great one is how they approach problems. — Unknown",
  "Developers are not just building software; they are building the future. — Unknown",
  "Simplicity is the ultimate sophistication. — Leonardo da Vinci",
  "Code is like humor. When you have to explain it, it’s bad. — Cory House",
  "A good developer is someone who can effectively communicate with machines and humans. — Unknown",
  "Do not worry about having to change code later; that’s a good thing. The best code is code that changes. — Kent Beck",
  "Being a developer means learning and adapting to new technologies, but it also means understanding how to make these technologies serve people better. — Unknown",
  "The best thing about writing code is it’s always a new challenge; the worst thing is when you write bad code. — Unknown",
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Don’t write code, write software. — Unknown",
  "The problem is not the technology, it’s how you approach the problem. — Unknown",
  "A developer is a person who writes software; a good developer is a person who writes useful software. — Unknown",
  "Success is the ability to go from one failure to another with no loss of enthusiasm. — Winston Churchill",
];

function getQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("newQuoteSection").innerHTML = quotes[randomNumber];
}
