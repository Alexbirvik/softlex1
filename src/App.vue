<template>
  <div id="app">
    <Header />
    <Project />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Project from "./components/Project.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Project
  }
};
</script>
