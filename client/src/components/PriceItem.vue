<template>
  <div class="price-item p-2 mt-2">
  <span>
    {{data.origin}}
  </span>
  |
  <span>
    {{data.destination}}
  </span>
  |
  <span>
    {{data.departureDate}}
  </span>
  |
  <span>
    {{data.returnDate}}
  </span>
  |
  <span>
    {{data.returnDate}}
  </span>
  |
  <span>
    {{data.price.amount}}
  </span>
  |
  <span>
    {{data.price.currency}}
  </span>
  </div>
</template>

<script>
export default {
  name: 'PriceItem',
  props: {
    data: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.price-item{
  background: white;
  border-radius: 1rem;
  border: solid black 1px;
  min-height: 6rem;
}
</style>
