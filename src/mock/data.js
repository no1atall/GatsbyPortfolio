import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ian Vicherek',
  subtitle: 'I am a React Developer',
  cta: 'Learn about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'Ian.jpg',
  paragraphOne:
    'Even at the tender age of 10, I had a fascination with computers. My dad was a tech enthusiast, and loved to collect various electronics, gadgets, and computer parts. I quickly inherited his love for technology, immersing myself for hours tinkering with the interior of old towers, mixing and matching parts, upgrading and learning about what makes a computer tick.',
  paragraphTwo:
    'This passion to learn and use the latest technologies has only grown with time.  The explosive growth of the internet has given birth to a whole online world, a world filled with knowledge. Never before has knowledge been more accessible that it is today. I find myself fascinated with this virtual work created by technology, and want to take greater part in its creation, design, and direction. Naturally, coding is the most direct manner to add my own touch to my little corner of the internet.',
  paragraphThree:
    'I continue to learn, build, design, and implement little things on the web, adding a bit of myself to this vast world. Interested in some of the things I’ve done? Look no further, and scroll below!',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Contact-Form.png',
    title: 'Material UI Contact Form',
    info:
      'This is a responsive form which authenticates data and sends an email. It is built using Material UI for styling, React, JavaScript, nodejs, react-hook-form for gathering input data, Yup for authentication, and email-js for email sending.',
    info2:
      'Building this project, I learned how to encorporate the react-hook-form into a contact page, and perform verfication using the yup library.',
    url: 'https://materialui-contact-form.netlify.app',
    repo: 'https://github.com/no1atall/Form', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'paladin.png',
    title: 'Paladin Demo Home Page',
    info:
      'This is a responsive demo home page built with Treact. It uses React, JavaScript, Html and CSS. The CSS is done with TailwindCSS framework and the styled components library.',
    info2:
      'This little project taught me how to construct a single page website and uililize TailwindCSS.',
    url: 'https://paladin-demo.netlify.app/',
    repo: 'https://github.com/no1atall/Paladin/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Guessing-Game.png',
    title: 'Number Guessing Game',
    info:
      'This is a responsive guessing game where you have 7 guesses to guess a random number from 1 to 100. It uses Html, JavaScript, and CSS. Semantic UI is used as the CSS framework.',
    info2:
      'In this project I learned to use Semnatic UI and put to use the JavaScript skill I had been learning to perform story and dynamically display data.',
    url: 'https://littlenumberguessinggame.netlify.app/',
    repo: 'https://github.com/no1atall/NumberGuessingGame', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Reading-List.png',
    title: 'Reading List',
    info:
      'This is a responsive Reading List. It uses local storage to keep tracks of books for you. It is built using Html, JavaScript, and CSS. Skeleon CSS is used as the CSS framework.',
    info2:
      'I used this project to sharpen my Javascript skills, as well as dable with required field and error messages.',
    url: 'https://small-reading-list.netlify.app/',
    repo: 'https://github.com/no1atall/Book-List', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Loan-Calculator.png',
    title: 'Loan Caculator',
    info:
      'This is a responsive loan calculator that calculates monthly payments, total interest, and total amount due. It is built with Html, JavaScript, and CSS. Bootstrap is used as the CSS framework. ',
    info2:
      'This project taught me how to use JavaScrpit to preform calculation and return the resuts of the performed calculations.',
    url: 'https://small-loan-calc.netlify.app/',
    repo: 'https://github.com/no1atall/LoanCalculator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Task-List.png',
    title: 'Personal Task List',
    info:
      "This is a responsive Task List utilizing local storage. It is built with Html, JavaScript and CSS. The CSS framework used for this project is Google's Material UI. ",
    info2: '',
    url: 'https://my-small-task-list.netlify.app/',
    repo: 'https://github.com/no1atall/Task-List', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ianenrico1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ian-vicherek-29711b1b8/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/no1atall',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
