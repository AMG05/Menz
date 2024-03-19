import {h, render} from 'preact';
import DecreaseIncreaseButtons from './modules/forms/components/IncreaseDecreaseForm';

import './modules/toggle';
import './modules/tabs';
import './modules/modal';
import './modules/validate';
import './modules/forms/components/IncreaseDecreaseForm';
// Importer(`tabs`)();
// import(/* webpackChunkName: "toggle" */`./features/toggle`).then(module => module.default());
// // import(/* webpackChunkName: "validate" */`@stormid/validate`).then(module => module.default.init(VALIDATE.SELECTOR));
// // Importer.bind(null, 'validate')(import(/* webpackChunkName: "validate" */`@stormid/validate`)),

render( <DecreaseIncreaseButtons />, document.getElementById("reactyform"))