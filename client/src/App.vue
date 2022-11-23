<template>
  <div>
  <PricePage />
  </div>
</template>

<script>
import PricePage from './views/PricePage'
import "./css/bootstrap.css";
export default {
  name: 'App',
  components: {
    PricePage
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


.list-leave-active {
  position: absolute;
}
</style>
