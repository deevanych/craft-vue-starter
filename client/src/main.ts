import {createApp} from 'vue'
import Button from "primevue/button"
import {pinia} from "./plugins/pinia.ts";
import {primeVue} from "./plugins/primevue.ts";

if (import.meta.env.MODE === 'development') {
    import('@/scss/index.scss')
}
 
const app = createApp({
    components: {
        PvButton: Button
    }
})

pinia(app)
primeVue(app)

app.mount('#app');
