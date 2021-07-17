
import Model from '../components/model.js';
import View from '../components/view.js';

import Controller from '../components/controller.js';

const root = document.getElementById('app');
const app = new Controller(root, new Model(), new View(root));
