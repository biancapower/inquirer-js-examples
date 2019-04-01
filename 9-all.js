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
      name: 'reptile',
      message: 'Basic list example',
      choices: ['alligator', 'crocodile'],
    },
    {
      type: 'rawlist',
      name: 'reptile',
      message: 'Rawlist example',
      choices: ['alligator', 'crocodile'],
    },
    {
      type: 'expand',
      name: 'reptile',
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
      name: 'reptiles',
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
  });
