#! /usr/bin/env node

import logger from './shared/logger';
import { Command } from 'commander';
import { create } from './commands/create';

const program = new Command();

program
	.command('create')
	.description('Create a component directory')
	.option('-n, --name <componentName>', 'Component name')
	.action(create);

program.on('command:*', ([cmd]) => {
	program.outputHelp();
	logger.error(`\nUnknown command ${cmd}.\n`);
	process.exitCode = 1;
});

program.parse();
