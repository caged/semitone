// src/main.js
import { version } from '../package.json';
import { Note } from '@tonaljs/tonal'

export default function () {
  console.log('version ' + version);
  console.log(Note.get('A'));
  console.log(Scale.get('minor', 'D'));
}