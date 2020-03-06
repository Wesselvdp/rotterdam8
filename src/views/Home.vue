<template>
  <div class="home">
    <img
      src="../assets/logo.png">
    <HelloWorld msg="Welcome to the Cheil Vue Boilerplate" />
    <h2>This is a h2 heading</h2>
    <h3>This is a h3 heading</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
      HelloWorld,
  },
};
</script>
