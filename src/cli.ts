#!/usr/bin/env node

import parser from 'yargs-parser';
import { greet } from './greet.js';

// Parse command-line arguments
const argv = parser(process.argv.slice(2));

if (argv.name) {
  greet(argv.name);
} else {
  console.log('Please provide a --name argument.');
}
