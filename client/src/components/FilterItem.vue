<template>
  <input type="text"
         :placeholder="placeholder"
            :value="modelName"
         :aria-label="placeholder"
            @input="$emit('update:modelName', $event.target.value)"
  class="input px-2">
</template>

<script>
export default {
  name: 'FilterItem',
  props: ['modelName','placeholder','label'],
  emits: ['update:modelName']
}
</script>


<style scoped lang="scss">
.input{
  max-width: 15rem;
  height: 2rem;
  border-radius:0.5rem;
  border: solid 1px black;
}

</style>
