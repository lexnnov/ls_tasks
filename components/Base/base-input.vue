<template lang="pug">
  v-text-field(
    v-model='inputValue',
    :label='label',
    outline,
    hide-details,
    :disabled="disabled"
  )
</template>

<script>
	export default {
		name: 'base-input',
    props: {
		  label: {
		    type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      disabled: {
		    type: Boolean,
        default: false
      }
    },
    computed:{
      inputValue: {
        get(){
          return this.value
        },
        set(val){
          this.$emit('update:value', val)
        }
      }
    }
	};
</script>

<style lang="sass" >
  .v-input__slot
    border: 1px solid #757575 !important

  .v-input--is-disabled .v-input__slot
    border: 1px solid #bebebe !important
    border-radius: 4px

</style>
