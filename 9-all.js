const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'Just a simple question',
      default: 'Alligators, of course!',
    },
    {
      type: 'list',
      name: 'reptile-list',
      message: 'Basic list example',
      choices: ['alligator', 'crocodile'],
    },
    {
      type: 'rawlist',
      name: 'reptile-rawlist',
      message: 'Rawlist example',
      choices: ['alligator', 'crocodile'],
    },
    {
      type: 'expand',
      name: 'reptile-expand',
      message: 'Expand example',
      choices: [
        {
          key: 'a',
          value: 'alligator',
        },
        {
          key: 'c',
          value: 'crocodile',
        },
      ],
    },
    {
      type: 'checkbox',
      name: 'reptile-checkbox',
      message: 'Here\'s a checkbox example',
      choices: [
        'Alligators', 'Snakes', 'Turtles', 'Lizards',
      ],
    },
    {
      type: 'password',
      name: 'secret',
      message: 'Take in a password without showing input',
    },
    {
      type: 'editor',
      name: 'story',
      message: 'Opening an editor for lengthy input',
    },
  ])
  .then(answers => {
    console.info('Answers:', answers);
    console.info('Fav reptile:', answers.faveReptile)
    console.info('Story:', answers.story)
  });

