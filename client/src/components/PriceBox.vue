<template>
<div class="price-box">

  <TransitionGroup name="list"  >

  <PriceItem v-for="item in filterdData" :key="item.uuid"  :data="item" />

  </TransitionGroup>
  <div aria-label="error" v-if="!filterdData.length && isFiltered" class="error w-100 text-center px-2">Filtered data is empty</div>
  </div>
</template>

<script>
import PriceItem from "../components/PriceItem";

export default {
  name: 'PriceBox',
  components: {
    PriceItem
  },
  props: ["filterdData","isFiltered"]

  ,created() {



  }
}
</script>


<style scoped lang="scss">
.error{
color: red;
}
</style>
