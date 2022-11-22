<template>
  <div class="filter-box d-flex flex-row justify-content-between">
    <div class="d-flex w-100 justify-content-center">
      <div>
  <FilterItem v-model:modelName="origin" />

  <FilterItem v-model:modelName="destination" />
   </div>
      </div>
  <button class="submit" @click="submitFilter">submit</button>
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
      this.$emit("filter-data", this.origin, this.destination);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
