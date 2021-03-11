console.log('module!!!');
export const sheep = {
  name: 'joy',
};

class classModule {
  data;
  constructor() {
    console.log('classModule constructor');
  }
}

export { classModule };

export default new classModule();
