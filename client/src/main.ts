import {createApp} from 'vue'
import './scss/index.scss'

import Button from "primevue/button"
import {pinia} from "./plugins/pinia.ts";
import {primeVue} from "./plugins/primevue.ts";

const app = createApp({
    components: {
        PvButton: Button
    }
})

pinia(app)
primeVue(app)

app.mount('#app');
