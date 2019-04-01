const inquirer = require('inquirer');
inquirer.registerPrompt('emoji', require('inquirer-emoji'))

  return inquirer.prompt([
    {
      type: 'emoji',
      name: 'spirit_animal',
      message: 'Find your spirit animal emoji:'
    }
  ]);
