/* Single File Components */

import Vue from 'vue';
import VueButton from './vue_button.vue';

Vue.component('vue-button', VueButton);

// the code below used to live inside index.html
new Vue({ 
    el: '#app',

    data: {
        message: 'test'
    }
});