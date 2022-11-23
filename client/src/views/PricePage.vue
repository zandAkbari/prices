<template>
<div class="price-page p-5 d-flex flex-column">
  <div class="panel  w-100">
  <section  aria-label="filter" class="panel-header p-2 w-100">
    <FilterBox  @filter-data="allFilter" />
  </section>
  <section aria-label="prices" class="panel-body p-3">
    <PriceBox :isFiltered="isFiltered" :filterdData="this.filterdData"/>
  </section>
  </div>




</div>
</template>

<script>
import FilterBox from "../components/FilterBox"
import PriceBox from "../components/PriceBox"
import {getPrices} from "@/apis/PriceServices";
export default {
  name: 'PricePage',
  components: {
    PriceBox,FilterBox
  },  data: function() {
    return {
      prices: "",
      origin:"",
       filterdData:"",
      isFiltered:false
    };
  },mounted(){
    this.getPrices()

  },

  methods:{
    getPrices(){
      //Call API to get all prices
      getPrices()
          .then(response => {
            this.prices = response.data.data;
            this.filterdData=response.data.data

          })
    },
    allFilter(origin, destination){
      //If origin or destination is full then call filter function
      this.isFiltered=true
      let data=this.prices
      if(origin){
        data =this.filterCat(this.prices,"origin",origin)
      }
      if(destination){
        data = this.filterCat(data,"destination",destination)
      }
      this.filterdData=data

    },filterCat(data,selectedItem,expectedValue){
      //Do filter on an array to find items with a selected item
      return data.filter( ( item ) => {
        if ( item[selectedItem] == null ) {
          return ;
        }
        return item[selectedItem].toLowerCase().includes( expectedValue.toLowerCase() );
      } );
    }
  }
}
</script>


<style scoped lang="scss">
.panel{
  background: #f6f6f6;
  border: solid #b3b7bb 1px;

  border-radius:1rem;

}
.panel-header{
border-bottom: solid #b3b7bb 1px;
  background: white;
  border-top-right-radius:1rem;
  border-top-left-radius:1rem;
}
.panel-body{

}
</style>
