<template lang="pug">
  v-checkbox(v-model='content1', :label='label', color='secondary', :value='content1', hide-details, :disabled="disabled")
</template>

<script>
	export default {
		name: 'base-checkbox',
    props: {
		  value: {
		    type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
      }
    },
    computed: {
      content1: {
        get(){
          return this.value
        },
        set(val){
          this.$emit('update:value', val)
        }
      },
    }
	};
</script>

<style lang="sass">
  .v-input--checkbox
    margin-top: 0
    margin-bottom: 0
  .v-input--checkbox .v-input__slot
    border: none !important
    border-radius: 4px
</style>
