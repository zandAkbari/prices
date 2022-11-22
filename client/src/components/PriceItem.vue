<template>
  <div class="price-item d-flex flex-row flex-wrap p-2 mt-2">
   <TitleValue name="origin" :value="data.origin" />
    <TitleValue name="destination" :value="data.destination" />
    <TitleValue name="return date" :value="data.returnDate" />
    <TitleValue name="departure date" :value="data.departureDate" />
    <TitleValue name="seat availability" :value="data.seatAvailability" />
    <TitleValue name="price" :value="`${data.price.amount} ${data.price.currency}`" />





  </div>
</template>

<script>
import TitleValue from "@/components/TitleValue";
export default {
  name: 'PriceItem',
  components: {TitleValue},
  props: {
    data: Object,

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
