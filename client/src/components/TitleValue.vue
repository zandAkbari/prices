<template>

    <div :aria-label="name" class="col-12 col-md-6 text-left">
      <span>{{name}}</span>
      <span>:</span>
      <span>{{value}}</span>
    </div>


</template>

<script>
export default {
  name: 'TitleValue',
  props: ["name","value"]

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
