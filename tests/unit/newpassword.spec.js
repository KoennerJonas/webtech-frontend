import { mount } from "@vue/test-utils"
import NewPasswordView from '@/views/NewPasswordView'
import Logo from '@/components/Logo'


describe('NewPasswordView.vue', () => {
  it('should have Navbar component', () => {
    //when
    const wrapper = mount(NewPasswordView)

    //then
    const nav = wrapper.findComponent(Logo)
    expect(nav.exists()).toBeTruthy()
  })
})
