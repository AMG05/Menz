import toggle from '@stormid/toggle';

document.querySelector('.js-toggle') && toggle('.js-toggle');
// document.querySelector('.js-exclusive-nav') && toggle('.js-exclusive-nav');
// document.querySelector('.js-exclusive-search') && toggle('js-exclusive-search');
document.querySelector('.js-toggle__local') && toggle('.js-toggle__local', { local: true });