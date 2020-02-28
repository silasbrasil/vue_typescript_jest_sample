import { shallowMount } from '@vue/test-utils';
import Message from '@/components/Message.vue';

describe('Message.vue', () => {
  // let wrapper: Wrapper<Message>;

  // beforeEach(() => {
  // wrapper = shallowMount(Message, {
  //   propsData: { message: myMessage }
  // })
  // })

  it('render Message.vue', () => {
    const wrapper = shallowMount(Message)
    expect(wrapper.is(Message)).toBe(true)
  })

  it('message is Equals "My message"', () => {
    const myMessage = 'My message'
    const wrapper = shallowMount(Message, {
      propsData: { message: myMessage }
    })
    expect(wrapper.text()).toBe(myMessage)
  })

  it('message is Equals ""', () => {
    const wrapper = shallowMount(Message)
    expect(wrapper.text()).toBe('')
  })

  // it('', () => {
  //   const wrapper = shallowMount(Message)
  //   expect(wrapper).toBe('')
  // })

  it('does <p> exits', () => {
    const wrapper = shallowMount(Message)
    expect(wrapper.find('p').text()).toBe('Texto do <p>')
  })
})
