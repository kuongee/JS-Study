import api from './api.js';

class App {
  $container;
  currentLimit = 5;
  currentPage = 0;
  catItems = [];

  constructor() {
    this.init();
  }

  init() {
    this.$container = document.querySelector('.container');
    this.$container.addEventListener('scroll', () => {
      const diff =
        Math.round(this.$container.scrollWidth) -
        Math.round(this.$container.scrollLeft);

      if (diff <= this.$container.clientWidth) {
        this.currentPage++;
        this.loadCatItems();
      }
    });

    this.loadCatItems();
  }

  async loadCatItems() {
    this.catItems = await api.fetchCatItems({
      limit: this.currentLimit,
      page: this.currentPage,
      order: 'Desc',
    });
    this.render();
  }

  render() {
    this.catItems.forEach((item) => {
      const DIV = document.createElement('DIV');
      DIV.setAttribute('class', 'wrapper');
      const IMG = document.createElement('IMG');
      IMG.setAttribute('src', item.url);
      DIV.append(IMG);
      this.$container.append(DIV);
    });
  }
}

new App();
