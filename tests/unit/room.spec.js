import { mount } from "@vue/test-utils"
import Navbar from '@/components/Navbar'
import RoomView from '@/views/RoomView'


describe('RoomsView.vue', () => {
  it('should have Navbar component', () => {
    //when
    const wrapper = mount(RoomView)

    //then
    const nav = wrapper.findComponent(Navbar)
    expect(nav.exists()).toBeTruthy()
  })
})
