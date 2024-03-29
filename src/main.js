import { createApp } from "vue";
import "./assets/style.css";
import VueSmoothScroll from "vue3-smooth-scroll";

import Button from "./components/Button.vue";
import LinkButton from "./components/LinkButton.vue";

import {useData} from "./composables/data.js"
import {useLanguage} from "./composables/language.js"
import {useNavigation} from "./composables/navigation.js"
import {createAppRouter} from "./router/router.js"
import App from "./App.vue";

let app = createApp(App);

const data = useData()
app.use(VueSmoothScroll);
app.component("Button", Button);
app.component("LinkButton", LinkButton);


data.fetchEssentials().then(r => {
    const language = useLanguage()
    language.init(data.getSettings()['supportedLanguages'])

    const navigation = useNavigation()
    navigation.init(data.getSections(), data.getCategories())

    const router = createAppRouter()
    createApp(App).use(router).mount('#app')
})