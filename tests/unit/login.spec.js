import { mount } from "@vue/test-utils"
import LoginView from "@/views/LoginView"


describe('LoginView.vue', () => {
  it('should have Navbar component', () => {
    //when
    const wrapper = mount(LoginView)

    //then
    const nav = wrapper.findComponent(LoginView)
    expect(nav.exists()).toBeTruthy()
  })
})
