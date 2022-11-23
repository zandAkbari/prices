<template>
  <div class="filter-box d-flex flex-lg-row flex-column  align-items-md-center">
    <div class="d-flex w-100 flex-md-row flex-column justify-content-center">

      <FilterItem class="mr-md-5" placeholder="origin name" v-model:modelName="origin" />

      <FilterItem class="ml-md-5 mt-md-0 mt-3" placeholder="destination name" v-model:modelName="destination" />

      </div>
  <button aria-label="submit filter" class="submit mt-lg-0 mt-3" @click="submitFilter">submit filter</button>
  </div>
</template>

<script>
import FilterItem from "../components/FilterItem";

export default {
  name: 'FilterBox',
  components: {
    FilterItem
  },
  data: function() {
    return {
      origin:"",
      destination:""
    };
  },
  methods:{
    submitFilter(){
      //Call emit to send origin and destination to the price page
      this.$emit("filter-data", this.origin, this.destination);
    }
  }

}
</script>


<style scoped lang="scss">
.submit{
  width: 10rem;
  background: #fdb713;
  border: 0px;
  border-radius: 0.5rem;
}
</style>
