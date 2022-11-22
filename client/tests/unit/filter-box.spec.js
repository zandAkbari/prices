    import { mount } from '@vue/test-utils'
import FilterBox from '@/components/FilterBox'

describe('FilterBox.vue', () => {
    let wrapper = null;
    beforeEach(()=> {
        wrapper = mount(FilterBox)
    });

    afterEach(()=> {
        wrapper.destroy;
    });
    it('should render', () => {
        expect(wrapper.find('.filter-box').exists()).toBe(true)
    });
    test('submit the value', async () => {

        wrapper.find('.submit').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('filter-data')
    })
})
