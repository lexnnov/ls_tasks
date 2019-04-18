<template lang="pug">
  no-ssr
    date-picker(
      v-model='inputValue',
      :first-day-of-week='1'
      :lang="lang",
      input-class="mx-input mx-input1"
      format="YYYY-MM-DD"
      :disabled="disabled"
    )
</template>

<script>
	export default {
		name: 'base-date-picker',
    props: {
		  value: {
		    type: [Date, String],
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data(){
		  return {
        lang: {
          days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
          placeholder: {
            date: 'Select Date',
            dateRange: 'Select Date Range'
          },
        },
      }
    },
    computed: {
      inputValue: {
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

<style scoped>

</style>
