<template>
  <div>
    <h1>Hypixel</h1>
    <div>
      <h2>{{ this.$store.getters.getName }}</h2>
      <input type="text" placeholder="name" v-model="name" />
      <button @click="changeName()">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: null
    };
  },
  methods: {
    changeName() {
      this.$store.dispatch("updateName", this.name);
    }
  }
};
</script>
