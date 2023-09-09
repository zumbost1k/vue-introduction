import { createApp } from 'vue'
import App from './App'
import components from './components/UI'
import router from './components/router/router';
import store from './components/store';

const app = createApp(App)
Object.values(components).forEach(UI_element => {
    app.component(UI_element.name, UI_element)
});
app
    .use(store)
    .use(router)
    .mount('#app')
