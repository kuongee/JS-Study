// #1
// import './module.js'; // 평가되지 않는다.

// #2
import { sheep } from './module.js';

// #3
// import { classModule } from './module.js';

// #4
import { default as ddd } from './module.js';

function AnotherApp() {
  console.log('This is AnotherApp.js');

  // #2
  // App 에서 수정한 내용을 볼 수 있다.
  console.log('sheep Another : ', sheep.name);

  // #3
  // App과 AnotherApp은 같은 instance를 공유하고 있지는 않다.
  // const cm = new classModule();
  // console.log('data Another : ', cm.data);

  // #4
  // 여긴 App에서 수정한 내용이 반영되어있다.
  // 최초로 App에서 실행된 객체가 공유
  console.log('default data Another : ', ddd.data);
}

AnotherApp();
