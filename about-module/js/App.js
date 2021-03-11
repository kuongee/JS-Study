// #1
//import './module.js';

// #2
import { sheep } from './module.js';

// #3
import { classModule } from './module.js';

// #4
import { default as ddd } from './module.js';

function App() {
  console.log('This is App.js');

  // #2
  console.log('sheep : ', sheep.name);
  sheep.name = 'happy';

  // #3
  // const cm = new classModule();
  // cm.data = 'app';

  // #4
  ddd.data = 'defaultapp';
}

App();
