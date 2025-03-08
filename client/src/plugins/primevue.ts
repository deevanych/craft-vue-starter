import PrimeVue from "primevue/config";
import Lara from "@primeuix/themes/lara";
import type {App} from "vue";

export const primeVue = (app: App) => {
    app.use(PrimeVue, {
        theme: {
            preset: Lara
        }
    });

    return app
}
