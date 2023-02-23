<template>
  <div>
    <h3>App.vue 根组件</h3>
    <h3>{{ username }}</h3>
  </div>


  <hr>

  <h3>{{ count }}</h3>
  <button @click="addCount()">+1</button>
</template>

<script>

export default {
  name: 'MyApp',
  data() {
    return {
      username: 'zs',
      count: 0
    }
  },
  methods: {
    addCount() {
      this.count += 1
    }
  }
}
</script>

<style lang="less">
h3 {
  color: cyan;
}

div {
  background-color: cyan;
  h3 {
    background-color: red;
  }
}
</style>