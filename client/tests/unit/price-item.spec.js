import {mount} from '@vue/test-utils'
import PriceItem from '@/components/PriceItem.vue'

describe('PriceItem.vue', () => {
    let wrapper = null;
    beforeEach(()=> {
        wrapper = mount(PriceItem,{
            propsData: {
                data: {
                        "origin": "FRA",
                        "destination": "FCO",
                        "departureDate": "2017-01-13",
                        "returnDate": "2016-01-14",
                        "seatAvailability": 7,
                        "price": {
                            "amount": 128.26,
                            "currency": "EUR"
                        },
                        "offerType": "BestPrice",
                        "uuid": "SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af"
                    }

            }
        })
    });

    afterEach(()=> {
        wrapper.destroy;
    });
    it('should render', () => {
        expect(wrapper.find('.price-item').exists()).toBe(true)
    });
})
