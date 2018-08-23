<template>
	<v-app>
		<v-form @submit.prevent="validate">
			<v-text-field v-model="text" v-validate="'required'"
				name="text" :error-messages="collectedErrors">
			</v-text-field>
			<v-btn id="button" type="submit">Validate</v-btn>
		</v-form>
    </v-app>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			text: ''
		}
	},
	computed: {
		collectedErrors: function() {
			return this.errors.collect('text')
		}
	},
	methods: {
		validate() {
			this.$validator.validateAll()
		}
	}
}
</script>
