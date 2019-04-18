<template lang="pug">
  v-textarea(
    outline,
    name='input-7-4',
    :label='label',
    v-model='inputValue'
    hide-details,
    @input="()=>{this.$emit('update')}",
    @keydown.native="(evt)=>{$emit('keyDown', evt)}"
    :disabled="disabled"
  )
</template>

<script>
	export default {
		name: 'base-textarea',
    props: {
      value : {
		    type: String,
        default: ''
      },
      label: {
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
