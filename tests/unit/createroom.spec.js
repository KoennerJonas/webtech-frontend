import { mount } from '@vue/test-utils'
import CreateRoomView from "@/views/CreateRoomView"
import Navbar from '@/components/Navbar'

describe('CreateRoomView.vue', () => {
  it('should have Navbar component', () => {
    //when
    const wrapper = mount(CreateRoomView)

    //then
    const nav = wrapper.findComponent(Navbar)
    expect(nav.exists()).toBeTruthy()
  })
})
