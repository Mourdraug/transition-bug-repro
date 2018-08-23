import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import flushPromises from 'flush-promises'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'

Vue.use(Vuetify)
Vue.use(VeeValidate)

console.log('Vuetify ver.:' + Vuetify.version)

describe('App.vue', () => {
	it('Adds error on empty field', async () => {
		const wrapper = mount(App, { sync: false })
		expect(wrapper.vm.errors.collect('text').length).toBe(0)
		wrapper.vm.validate()
		await flushPromises()
		expect(wrapper.vm.errors.collect('text').length).toBeGreaterThan(0)
	})

	it('No error on filled field', async () => {
		const wrapper = mount(App, { sync: false })
		expect(wrapper.vm.errors.collect('text').length).toBe(0)
		wrapper.setData({ text: 'abc' })
		await flushPromises()
		wrapper.vm.validate()
		await flushPromises()
		expect(wrapper.vm.errors.collect('text').length).toBe(0)
	})
})
