import { mount } from "@vue/test-utils"
import Logo from '@/components/Logo'
import PasswordResetView from '@/views/PasswordResetView'


describe('PasswordResetView.vue', () => {
  it('should have Navbar component', () => {
    //when
    const wrapper = mount(PasswordResetView)

    //then
    const nav = wrapper.findComponent(Logo)
    expect(nav.exists()).toBeTruthy()
  })
})
