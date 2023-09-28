import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#FFC107',
        secodary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        sucess: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#1976D2',
        secodary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        sucess: '#4CAF50',
        warning: '#FFC107',
      },
    }
  }
});
