import { shallowMount } from '@vue/test-utils'
import PricePage from '@/views/PricePage'
//import PriceBox from "@/components/PriceBox"
 import FilterBox from "@/components/FilterBox"
import * as PriceServices from "../../src/apis/PriceServices";
import mock from "./mock"

describe('PricePage.vue', () => {

  // let wrapper = null;
  beforeEach(()=> {
    PriceServices.getPrices = jest.fn().mockResolvedValue({data: mock});
  });


  it("renders the initial prices", async () => {
    const wrapper = shallowMount(PricePage)
    await wrapper.vm.$nextTick()
      expect(wrapper.vm.filterdData).toHaveLength(4);

  })
    it("should filter data with origin and destination", async () => {
        const wrapper = shallowMount(PricePage)
        await wrapper.vm.$nextTick()
        wrapper.findComponent(FilterBox).vm.$emit('filter-data',"FRA", "FCO");
        expect(wrapper.vm.filterdData).toHaveLength(1);
        wrapper.findComponent(FilterBox).vm.$emit('filter-data',"", "IRI");
        expect(wrapper.vm.filterdData).toHaveLength(2);
        wrapper.findComponent(FilterBox).vm.$emit('filter-data',"FRA", "");
        expect(wrapper.vm.filterdData).toHaveLength(2);

        wrapper.findComponent(FilterBox).vm.$emit('filter-data',"", "");
        expect(wrapper.vm.filterdData).toHaveLength(4);
    })



})
