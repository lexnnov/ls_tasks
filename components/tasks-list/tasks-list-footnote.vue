<template lang="pug">
  .div
    v-btn(label='', outline color='#c4c4c4', text-color='black' @click="()=>{this.$emit('sortByComplete')}")
      v-icon(left='' color="yellow darken-2") done
      | - completed tasks
    v-btn(label='', outline color='#c4c4c4', text-color='black' @click="()=>{this.$emit('sortByOverdue')}")
      v-icon(left='' color="red darken-2") error_outline
      | - overdue tasks
    v-btn(label='', outline color='#c4c4c4', text-color='black' disabled )
      v-icon(left='' color="grey") alarm
      | - task at work
</template>

<script>
	export default {
		name: 'tasks-list-footnote',
	};
</script>

<style scoped>

</style>
