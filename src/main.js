import { createApp } from 'vue'
import App from './App'
import components from './components/UI'

const app = createApp(App)
Object.values(components).forEach(UI_element => {
    app.component(UI_element.name, UI_element)
});
app.mount('#app')
