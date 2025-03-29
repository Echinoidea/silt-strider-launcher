<template>
  <div class="flex flex-col justify-center w-full h-[100vh]">
    <TitleBar />

    <div class="flex flex-row justify-center items-center w-full">
      <ScreenshotCarousel />
    </div>

    <div>
      <Tabs value="0" class="mx-8 lg:mx-[10%] mb-4 mwui-border">
        <TabList>
          <Tab value="0">Changelog</Tab>
          <Tab value="1">Version History</Tab>
          <Tab value="2">FAQ</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="m-0 h-[15vh] overflow-scroll">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>

    <div class="flex mt-auto mb-4 justify-end w-[100%]">
      <Button
        label="Launch"
        class="w-full mx-4 h-16"
        style="
          color: #dcc59c;
          background-color: #000000;
          border-radius: 0px;
          box-shadow:
            0 0 0 1px #e1b254,
            0 0 0 2px #6f5432,
            0 0 0 3px #e1b254;
        "
      />
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import ScreenshotCarousel from "./components/ScreenshotCarousel.vue";
import TitleBar from "./components/TitleBar.vue";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
</script>
