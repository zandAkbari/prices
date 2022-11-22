<template>
<div class="price-page p-5 d-flex flex-column">
  <div class="panel  w-100">
  <div class="panel-header p-2 w-100">
    <FilterBox  @filter-data="allFilter" />
  </div>
  <div class="panel-body p-3">
    <PriceBox  :filterdData="this.filterdData"/>
  </div>
  </div>




</div>
</template>

<script>
import FilterBox from "../components/FilterBox"
import PriceBox from "../components/PriceBox"
import {getPrices} from "@/apis/PriceServices";
import mock from "../../tests/unit/mock.json"
export default {
  name: 'PricePage',
  components: {
    PriceBox,FilterBox
  },  data: function() {
    return {
      prices: "",
      origin:"",
       filterdData:""
    };
  },mounted(){
    //this.getPrices()
    this.prices = mock.data
    this.filterdData=mock.data
//console.log("======",this.prices)

  },

  methods:{
    getPrices(){
      getPrices()
          .then(response => {
            this.prices = response.data.data;
            this.filterdData=response.data.data

          })
    },
    allFilter(origin, destination){
      // let json=JSON.parse(JSON.stringify(this.prices))
      // if ( !Object.keys( json ).length ) {
      //   return
      // }

      let data=this.prices
      if(origin){
        data =this.filterCat(this.prices,"origin",origin)
      }
      if(destination){
        data = this.filterCat(data,"destination",destination)
      }
      this.filterdData=data

    },filterCat(data,selectedItem,expectedValue){

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
