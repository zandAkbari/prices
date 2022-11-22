import { mount } from '@vue/test-utils'
import PriceBox from '@/components/PriceBox.vue'

describe('PriceBox.vue', () => {

      let wrapper = null;
let firstData={
    propsData: {
        filterdData: [],isFiltered:false}}
    let filteredEmpty={
        propsData: {
            filterdData: [],isFiltered:true}}
    let filteredfull={
        propsData: {
            filterdData: [  {
                "origin": "FRA",
                "destination": "IRI",
                "departureDate": "2017-01-13",
                "returnDate": "2016-01-14",
                "seatAvailability": 7,
                "price": {
                    "amount": 128.26,
                    "currency": "EUR"
                },
                "offerType": "BestPrice",
                "uuid": "SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af"
            }],isFiltered:false}}

      afterEach(()=> {
          wrapper.destroy;
      });

      it('should render', () => {
          wrapper = mount(PriceBox,firstData)
          expect(wrapper.find('.price-box').exists()).toBe(true)
      })
    it('should hide the error after filtering', () => {
        wrapper = mount(PriceBox,firstData)
        expect(wrapper.find('.error').exists()).toBe(false)
    })
    it('should hide the error when data is full', () => {
        wrapper = mount(PriceBox,filteredfull)
        expect(wrapper.find('.error').exists()).toBe(false)
    })
    it('should show error when data is empty and it is after filtering', () => {
        wrapper = mount(PriceBox,filteredEmpty)
        expect(wrapper.find('.error').exists()).toBe(true)
    })

})
