import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: uuid(),
    title: "Quentin Tarantino",
    image: "https://i.pinimg.com/originals/91/cd/92/91cd921450f6f2e4aff79367e82ba96b.png",
    totalScore: 50,
    mcqs: [
      {
        _id: uuid(),
        question: "What is the name of the movie within 'Inglorious Basterds' that serves as the cornerstone of Operation Kino?",
        options: [{ _id: uuid(), option: "Nation's Pride", isCorrect: true },
        { _id: uuid(), option: "Nation's Glory", isCorrect: false },
        { _id: uuid(), option: "Nation's Sword", isCorrect: false },
        { _id: uuid(), option: "Nation's Soldier", isCorrect: false }],
      },
      {
        _id: uuid(),
        question: "In 'Django Unchained', in which US state was Big Daddy's plantation based?",
        options: [{ _id: uuid(), option: "Tennessee", isCorrect: true },
        { _id: uuid(), option: "Mississippi", isCorrect: false },
        { _id: uuid(), option: "South Carolina", isCorrect: false },
        { _id: uuid(), option: "Texas", isCorrect: false }],
      },
      {
        _id: uuid(),
        question: "In 'Django Unchained', where did Dr. King Schultz shoot Calvin Candie?",
        options: [{ _id: uuid(), option: "The face", isCorrect: false },
        { _id: uuid(), option: "Te head", isCorrect: false },
        { _id: uuid(), option: "His arm", isCorrect: false },
        { _id: uuid(), option: "The chest", isCorrect: true }],
      },
      {
        _id: uuid(),
        question: "Which Tarantino movie did Harvey Keitel only talk over a phone in?",
        options: [{ _id: uuid(), option: "Reservoir Dogs", isCorrect: false },
        { _id: uuid(), option: "Inglourious Basterds", isCorrect: true },
        { _id: uuid(), option: "Pulp Fiction", isCorrect: false },
        { _id: uuid(), option: "Django Unchained", isCorrect: false }],
      },
      {
        _id: uuid(),
        question: "How many years were there between when 'The Hateful Eight' and 'Once Upon A Time... In Hollywood' was released?",
        options: [{ _id: uuid(), option: "5 years", isCorrect: true },
        { _id: uuid(), option: "6 years", isCorrect: false },
        { _id: uuid(), option: "8 years", isCorrect: false },
        { _id: uuid(), option: "7 years", isCorrect: false }]
      },
    ],
    categoryName: "Quentin Tarantino",
  },
  {
    _id: uuid(),
    title: "Martin Scorsese",
    image: "https://i.pinimg.com/originals/e9/52/05/e95205142e4ae35c0787fa7f513ddf40.jpg",
    totalScore: 50,
    mcqs: [
      {
        _id: uuid(),
        question: "A Martin Scorsese film not about underworld gangsters but about corrupt financiers",
        options: [{ _id: uuid(), option: "Shutter Island", isCorrect: false },
        { _id: uuid(), option: "The Departed", isCorrect: false },
        { _id: uuid(), option: "The Wolf of Wall Street", isCorrect: true },
        { _id: uuid(), option: "The Aviator", isCorrect: false }]
      },
      {
        _id: uuid(),
        question: "Martin Scorsese directed psychological thrillers as well as gangster movies. Which psy-thriller was focused on a mental institution located in Massachusetts?",
        options: [{ _id: uuid(), option: "Shutter Island", isCorrect: true },
        { _id: uuid(), option: "The Departed", isCorrect: false },
        { _id: uuid(), option: "The Wolf of Wall Street", isCorrect: false },
        { _id: uuid(), option: "The Aviator", isCorrect: false }]
      },
      {
        _id: uuid(),
        question: "What movie won Scorsese his only Oscar for best director?",
        options: [{ _id: uuid(), option: "Shutter Island", isCorrect: false },
        { _id: uuid(), option: "The Departed", isCorrect: true },
        { _id: uuid(), option: "Raging Bull", isCorrect: false },
        { _id: uuid(), option: "Goodfellas", isCorrect: false }]
      },
      {
        _id: uuid(),
        question: "What is the name of the book Goodfellas is adapted from?",
        options: [{ _id: uuid(), option: "In No Uncertain Terms", isCorrect: false },
        { _id: uuid(), option: "The Family", isCorrect: false },
        { _id: uuid(), option: "Wiseguy", isCorrect: true },
        { _id: uuid(), option: "Blye private eye", isCorrect: false }]
      },
      {
        _id: uuid(),
        question: "In The Aviator, Leonardo DiCaprio portrays what wealthy inventor, filmmaker and businessman?",
        options: [{ _id: uuid(), option: "Howard Hughes", isCorrect: true },
        { _id: uuid(), option: "Nelson Rockefeller", isCorrect: false },
        { _id: uuid(), option: "Vincent Astor", isCorrect: false },
        { _id: uuid(), option: "Juan Trippe", isCorrect: false }]
      },
    ],
    categoryName: "Martin Scorsese",
  },
  {
    _id: uuid(),
    title: "David Fincher",
    image: "https://i.pinimg.com/originals/d8/97/1b/d8971b320ceeb67b20b62938d75bcbea.jpg",
    totalScore: 50,
    mcqs: [
      {
        _id: uuid(),
        question: "John Doe punishes those guilty of commiting one of the seven deadly sins. The victim he goes after first is guilty of which sin?",
        options: [{ _id: uuid(), option: "lust", isCorrect: false },
        { _id: uuid(), option: "gluttony", isCorrect: false },
        { _id: uuid(), option: "sloth", isCorrect: true },
        { _id: uuid(), option: "greed", isCorrect: false }]
      },
      {
        _id: uuid(),
        question: "Fincher's film Gone Girl is set in which state?",
        options: [{ _id: uuid(), option: "New Mexico", isCorrect: false },
        { _id: uuid(), option: "Missouri", isCorrect: true },
        { _id: uuid(), option: "Montana", isCorrect: false },
        { _id: uuid(), option: "Texas", isCorrect: false }]
      },
      {
        _id: uuid(),
        question: "Which actor starred in Fincher's 1997 film called The Game?",
        options: [{ _id: uuid(), option: "Tom Cruise", isCorrect: false },
        { _id: uuid(), option: "Robert DeNiro", isCorrect: false },
        { _id: uuid(), option: "Mark Ruffalo", isCorrect: false },
        { _id: uuid(), option: "Sean Penn", isCorrect: true }]
      },
      {
        _id: uuid(),
        question: " The Girl With The Dragon Tattoo Is Based On The Novel By Which Author?",
        options: [{ _id: uuid(), option: "Stieg Larsson", isCorrect: true },
        { _id: uuid(), option: "Mikael Blomkvist", isCorrect: false },
        { _id: uuid(), option: "Stellen Skarsgard", isCorrect: false },
        { _id: uuid(), option: "Jo Nesbo", isCorrect: false }]
      },
      {
        _id: uuid(),
        question: " The Social Network Is Based On Which Technology Entrepreneur?",
        options: [{ _id: uuid(), option: "Elon Musk", isCorrect: false },
        { _id: uuid(), option: "Richard Branson", isCorrect: false },
        { _id: uuid(), option: "Mark Zuckerberg", isCorrect: true },
        { _id: uuid(), option: "Bill Gates", isCorrect: false }]
      },
    ],
    categoryName: "David Fincher",
  },
  {
    _id: uuid(),
    title: "Christopher Nolan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8KrPYmUxZVFZMIut0qBBaM7MHoEa1Tv6WDXN4uDvsn39POpAvyo9QS9PfL65L9VGq_s&usqp=CAU",
    totalScore: 50,
    mcqs: [
      {
        _id: uuid(),
        question: "What's the name of the composer who's a frequent collaborator with Nolan, working on the Batman films and Inception?",
        options: ["John Williams", "Mark Mothersbaugh", "Hans Zimmer", "Danny Elfman"],
        answer: "Hans Zimmer",
      },
      {
        _id: uuid(),
        question: "In How Many Of Nolan's Films Has Michael Caine Appeared On-Screen?",
        options: ["5", "6", "7", "8"],
        answer: "7",
      },
      {
        _id: uuid(),
        question: "In The Prestige, What Is The Name Of Borden's Teleportation Trick?",
        options: ["The Teleported Man", "The Transmitted Man", "The Beamed Man", "The Transported Man"],
        answer: "The Transported Man",
      },
      {
        _id: uuid(),
        question: "What Is The Primary Theme Of Many Nolan Movies?",
        options: ["Love", "Space", "Time", "Death"],
        answer: "Time",
      },
      {
        _id: uuid(),
        question: "What Is The Name Of The Robot In Interstellar?",
        options: ["PANS", "OSHA", "TARS", "STOP"],
        answer: "TARS",
      },
    ],
    categoryName: "Christopher Nolan",
  },
  {
    _id: uuid(),
    title: "Steven Spielberg",
    image: "https://i.pinimg.com/originals/f8/2f/ad/f82fadde1a7627743ff99eef3440d925.jpg",
    totalScore: 50,
    mcqs: [
      {
        _id: uuid(),
        question: "Which composer has worked on many of Spielberg's films?",
        options: [{ _id: uuid(), option: "John Williams", isCorrect: true },
        { _id: uuid(), option: "Mark Mothersbaugh", isCorrect: false },
        { _id: uuid(), option: "Hans Zimmer", isCorrect: false },
        { _id: uuid(), option: "Danny Elfman", isCorrect: false }]
      },
      {
        _id: uuid(),
        question: "Which of the following professions does Catch Me If You Can's Frank Abignale not pretend to be?",
        options: [{ _id: uuid(), option: "A doctor", isCorrect: false },
        { _id: uuid(), option: "An Panam airline pilot", isCorrect: false },
        { _id: uuid(), option: "A Louisiana prosecutor", isCorrect: false },
        { _id: uuid(), option: "A tailor", isCorrect: true }]["A doctor", "An Panam airline pilot", "A Louisiana prosecutor", "A tailor"],
        answer: "A tailor",
      },
      {
        _id: uuid(),
        question: "When Matt Damon was cast as Private Ryan, it was because Spielberg wanted a relatively unknown actor. This backfired when Damon’s first big hit was released just a short while before Spielberg’s movie. What was Damon’s first hit?",
        options: [{ _id: uuid(), option: "Rounders", isCorrect: false },
        { _id: uuid(), option: "The Good Shephard", isCorrect: false },
        { _id: uuid(), option: "Good Will Hunting", isCorrect: true },
        { _id: uuid(), option: "Chasing Amy", isCorrect: false }]
      },
      {
        _id: uuid(),
        question: "At what moment does the black-and-white film turn back to color?",
        options: [{ _id: uuid(), option: "when the Nazis walk out of the factory", isCorrect: false },
        { _id: uuid(), option: "when the workers give Schindler the ring", isCorrect: false },
        { _id: uuid(), option: "when Schindler's car pulls out of the compound", isCorrect: false },
        { _id: uuid(), option: "when the surviving, present-day Schindler Jews are shown", isCorrect: true }]
      },
      {
        _id: uuid(),
        question: "Which Fast and the Furious star was also part of Capt. Miller’s squad?",
        options: [{ _id: uuid(), option: "Vin Diesel", isCorrect: true },
        { _id: uuid(), option: "Dwayne Johnson", isCorrect: false },
        { _id: uuid(), option: "Paul Walker", isCorrect: false },
        { _id: uuid(), option: "Tyrese Gibson", isCorrect: false }]
      },
    ],
    categoryName: "Steven Spielberg",
  },
];