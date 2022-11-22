import { mount } from '@vue/test-utils'
import FilterItem from '@/components/FilterItem.vue'

describe('FilterItem.vue', () => {
  let wrapper = null;
  beforeEach(()=> {
    wrapper = mount(FilterItem)
  });

  afterEach(()=> {
    wrapper.destroy;
  });
  it('should render', () => {
    expect(wrapper.find('.item').exists()).toBe(true)
  });
  test('sets the value and emit it', async () => {

    const input = wrapper.find('.item')

    await input.setValue('FC')

    expect(input.element.value).toBe('FC')
    expect(wrapper.emitted()).toHaveProperty('update:modelName')
  })
})
