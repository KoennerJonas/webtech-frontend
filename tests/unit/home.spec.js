import { mount } from "@vue/test-utils"
import HomeView from "@/views/HomeView"
import Navbar from '@/components/Navbar'


describe('HomeView.vue', () => {
  it('should have Navbar component', () => {
    //when
    const wrapper = mount(HomeView)

    //then
    const nav = wrapper.findComponent(Navbar)
    expect(nav.exists()).toBeTruthy()
  })
})
