<template lang="pug">
  no-ssr
    vue-tags-input(
      v-model='inputValue',
      :tags='inputTags',
      @tags-changed='newTags => inputTags = newTags'
      hide-details,
      :disabled="disabled"
    )
</template>

<script>
	export default {
		name: 'base-tag-input',
    props: {
      value: {
        type: String,
        default: ''
      },
      tags: {
        type: Array,
        default () {
          return []
        }
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed:{
      inputTags: {
        get(){
          return this.tags
        },
        set(val){
          this.$emit('update:tags', val)
        }
      },
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

  .ti-input
    border: 1px solid #757575 !important
    display: flex
    padding: 4px
    flex-wrap: wrap
    border-radius: 4px

  .ti-disabled .ti-input
    border: 1px solid #bebebe !important
    border-radius: 4px

  .ti-disabled .ti-new-tag-input-wrapper input::placeholder
    color: white !important

  .ti-disabled .ti-tag
    background-color: #818181
</style>
