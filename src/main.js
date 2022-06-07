import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

createApp(App).use(PrimeVue).use(router).use(store).mount("#app");
