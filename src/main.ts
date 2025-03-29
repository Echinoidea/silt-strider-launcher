import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";

import "./assets/styles.css";
import "primeicons/primeicons.css";

import Nora from "@primeuix/themes/nora";
import { definePreset } from "@primeuix/themes";

import Button from "primevue/button";
import Carousel from "primevue/carousel";
import Card from "primevue/card";
import Menubar from "primevue/menubar";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";

const app = createApp(App);

const mw = {
    50: "#e1b254",
    100: "#c4994a",
    200: "#aa8031",
    300: "#745b31",
    400: "#6f5432",
    500: "#6f5432",
    600: "#6f5432",
    700: "#6f5432",
    800: "#6f5432",
    900: "#6f5432",
    950: "#6f5432",
};

const Morrowind = definePreset(Nora, {
    semantic: {
        primary: mw,
        colorScheme: {
            light: {
                primary: {
                    color: mw[950],
                    inverseColor: "#ffffff",
                    hoverColor: mw[900],
                    activeColor: mw[800],
                    borderRadius: "0px", // Define border-radius here
                },
                highlight: {
                    background: mw[950],
                    focusBackground: mw[700],
                    color: "#ffffff",
                    focusColor: "#ffffff",
                    borderRadius: "0px", // Define border-radius here
                },
                Menubar: {
                    // Add toolbar specific styling, this is hypothetical
                    backgroundColor: mw[800],
                    borderRadius: "4px",
                    color: "#ffffff",
                },
                Tab: {
                    backgroundColor: "#000000",
                },
                TabList: {
                    backgroundColor: "#000000",
                },
                TabPanel: {
                    backgroundColor: "#000000",
                },
                TabPanels: {
                    backgroundColor: "#000000",
                },
                TabMenu: {
                    backgroundColor: "#000000",
                },
            },
            dark: {
                primary: {
                    color: mw[50],
                    inverseColor: mw[950],
                    hoverColor: mw[100],
                    activeColor: mw[200],
                    borderRadius: "0px", // Define border-radius here
                },
                highlight: {
                    background: "rgba(250, 250, 250, .16)",
                    focusBackground: "rgba(250, 250, 250, .24)",
                    color: "rgba(255,255,255,.87)",
                    focusColor: "rgba(255,255,255,.87)",
                    borderRadius: "0px", // Define border-radius here
                },
                Menubar: {
                    // Add toolbar specific styling, this is hypothetical
                    backgroundColor: mw[800],
                    borderRadius: "4px",
                    color: "#ffffff",
                },
                Tab: {
                    backgroundColor: "#000000",
                },
                TabList: {
                    backgroundColor: "#000000",
                },
                TabPanel: {
                    backgroundColor: "#000000",
                },
                TabPanels: {
                    backgroundColor: "#000000",
                },
                TabMenu: {
                    backgroundColor: "#000000",
                },
            },
        },
    },
});

app.use(PrimeVue, {
    theme: {
        preset: Morrowind,
    },
});

app.mount("#app");

app.component("Button", Button);
app.component("Carousel", Carousel);
app.component("Card", Card);
app.component("Menubar", Menubar);
app.component("Tabs", Tabs);
app.component("TabList", TabList);
app.component("Tab", Tab);
app.component("TabPanels", TabPanels);
app.component("TabPanel", TabPanel);
