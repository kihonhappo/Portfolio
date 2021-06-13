import Model from './model.js';
import View from './view.js';
import Bugger from '/components/bugger.js';
const debug = new Bugger();

import Controller from './controller.js';


const app = new Controller(debug, new Model(), new View());










 