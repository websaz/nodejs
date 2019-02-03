
const _=require('lodash');
const yargs=require('yargs');
const notes = require('./notes');
var argv=yargs.argv;
var command = process.argv[2];

if (command === 'add') {
    notes.addNote(argv.title,argv.body)
} else if (command === 'list')
 {
    notes.addNote(argv.title,argv.body)
}
