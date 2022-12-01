import inquirer from 'inquirer';
import componentName from './wdComponent/name';
import componentLabel from './wdComponent/label';
import componentCategoryName from './wdComponent/category';

export const wdComponentQuestions = () => {
	return inquirer.prompt([
		/* Pass your questions in here */
		componentName(),
		componentLabel(),
		componentCategoryName()
	]);
};
