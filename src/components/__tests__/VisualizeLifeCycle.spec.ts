import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import VisualizeLifeCycle from '../VisualizeLifeCycle.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(VisualizeLifeCycle, { props: { msg: 'Visulize Life Cycle' } })
    expect(wrapper.text()).toContain('Visulize Life Cycle')
  })
})
