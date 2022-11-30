import inquirer from 'inquirer';
import componentName from './componentName.js';

export default () => {
	return inquirer.prompt([
		/* Pass your questions in here */
		componentName()
	]);
};
