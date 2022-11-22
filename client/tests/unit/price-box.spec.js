import { mount } from '@vue/test-utils'
import PriceBox from '@/components/PriceBox.vue'

describe('PriceBox.vue', () => {

      let wrapper = null;
      beforeEach(()=> {
          wrapper = mount(PriceBox)
      });

      afterEach(()=> {
          wrapper.destroy;
      });

      it('should render', () => {
          expect(wrapper.find('.price-box').exists()).toBe(true)
      });

})
