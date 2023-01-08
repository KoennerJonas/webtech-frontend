import { mount } from "@vue/test-utils"
import Logo from '@/components/Logo'
import RegisterView from '@/views/RegisterView'


describe('RegisterView.vue', () => {
  it('should have Navbar component', () => {
    //when
    const wrapper = mount(RegisterView)

    //then
    const nav = wrapper.findComponent(Logo)
    expect(nav.exists()).toBeTruthy()
  })
})
