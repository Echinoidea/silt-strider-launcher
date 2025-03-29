<template>
  <div class="flex flex-col">
    <Menubar
      :model="items"
      class="mwui-border"
      style="
        padding: 1rem 1rem 1rem 1.5rem;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        background-color: #000000;
        color: #ffffff;
      "
    >
      <template #start>
        <div class="flex items-center gap-4">
          <img src="../assets/siltstrider.svg" alt="" class="w-8" />
          <p class="text-xl">Silt Strider</p>
        </div>
      </template>

      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <i v-if="item.icon" :class="item.icon" class="mr-2"></i>
          <span>{{ item.label }}</span>
          <i
            v-if="hasSubmenu"
            :class="[
              'pi ml-auto',
              { 'pi-angle-down': root, 'pi-angle-right': !root }
            ]"
          ></i>
        </a>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import Menubar from "primevue/menubar";

  // Define the menu items with nested sub-items
  const items = ref([
    {
      label: "Files",
      items: [
        {
          label: "Set OpenMW Directory",
          icon: "pi pi-folder",
        },
        {
          label: "Set Wabbajack Directory",
          icon: "pi pi-folder",
        },
      ],
    },
    {
      label: "Tools",
      items: [
        {
          label: "MO2",
          icon: "pi pi-cog",
        },
        {
          label: "OpenMW Launcher",
          icon: "pi pi-sliders-v",
        },
      ],
    },
  ]);
</script>

<style></style>
