// Product catalog for Paradise Nursery.
// Each plant has a thumbnail (original SVG illustration), name, price and category.
import snakePlant from './assets/plants/snake-plant.svg';
import spiderPlant from './assets/plants/spider-plant.svg';
import peaceLily from './assets/plants/peace-lily.svg';
import aloeVera from './assets/plants/aloe-vera.svg';
import echeveria from './assets/plants/echeveria.svg';
import jadePlant from './assets/plants/jade-plant.svg';
import pothos from './assets/plants/pothos.svg';
import zzPlant from './assets/plants/zz-plant.svg';
import philodendron from './assets/plants/philodendron.svg';

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: snakePlant,
        price: 24.99,
        description: 'Hardy, upright leaves that filter indoor air with almost no care.',
      },
      {
        name: 'Spider Plant',
        image: spiderPlant,
        price: 18.5,
        description: 'Fast-growing arching leaves, great for hanging baskets.',
      },
      {
        name: 'Peace Lily',
        image: peaceLily,
        price: 29.99,
        description: 'Elegant white blooms and glossy leaves that thrive in low light.',
      },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      {
        name: 'Aloe Vera',
        image: aloeVera,
        price: 15.0,
        description: 'Soothing gel-filled leaves and a classic, low-maintenance look.',
      },
      {
        name: 'Echeveria',
        image: echeveria,
        price: 12.75,
        description: 'Rosette-shaped succulent with soft blue-green color.',
      },
      {
        name: 'Jade Plant',
        image: jadePlant,
        price: 20.25,
        description: 'Thick glossy leaves said to bring good fortune to any room.',
      },
    ],
  },
  {
    category: 'Low Light Plants',
    plants: [
      {
        name: 'Pothos',
        image: pothos,
        price: 16.99,
        description: 'Trailing vines with heart-shaped leaves, nearly impossible to kill.',
      },
      {
        name: 'ZZ Plant',
        image: zzPlant,
        price: 27.5,
        description: 'Glossy, waxy leaves that tolerate neglect and low light.',
      },
      {
        name: 'Philodendron',
        image: philodendron,
        price: 22.0,
        description: 'Lush, trailing foliage that adapts to almost any corner.',
      },
    ],
  },
];

export default plantsData;
