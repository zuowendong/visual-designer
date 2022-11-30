#! /usr/bin/env node
import chalk from 'chalk';
import question from './question/index.js';
import { createConfig } from './config.js';

const answer = await question();
const config = createConfig(answer);

console.log(chalk.red(config.componentName));
