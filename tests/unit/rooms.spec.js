import { mount } from "@vue/test-utils"
import RoomsView from '@/views/RoomsView'
import Navbar from '@/components/Navbar'


describe('RoomsView.vue', () => {
  it('should have Navbar component', () => {
    //when
    const wrapper = mount(RoomsView)

    //then
    const nav = wrapper.findComponent(Navbar)
    expect(nav.exists()).toBeTruthy()
  })
})
