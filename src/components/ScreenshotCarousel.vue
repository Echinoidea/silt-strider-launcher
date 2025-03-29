<template>
  <div class="w-full md:w-[75vw] lg:w-[50vw]">
    <Carousel :value="images" :numVisible="1" :numScroll="1">
      <template #item="slotProps">
        <div class="carousel-item">
          <img
            :src="slotProps.data.image"
            alt="carousel image"
            class="carousel-image"
          />
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import Carousel from "primevue/carousel";
  import Card from "primevue/card";
  import screenshot1 from "../assets/screenshot1.png";
  import screenshot2 from "../assets/screenshot2.png";
  import screenshot3 from "../assets/screenshot3.png";

  const images = ref([
    { image: screenshot2 },
    { image: screenshot1 },
    { image: screenshot3 },
  ]);
</script>

<style>
  .carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 1rem; */
    margin: 1rem;
    /* background-color: #0a0a0a; */
    border-radius: 0px;
    background-color: #000000;
    box-shadow:
      0 0 0 1px #e1b254,
      0 0 0 2px #6f5432,
      0 0 0 3px #e1b254;
  }

  .carousel-image {
    /* width: 400px; */
    height: 400px;
    border-radius: 0px;
    object-fit: cover;
  }
</style>
