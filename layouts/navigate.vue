<template lang="pug">
  v-container(align-center justify-center )
    v-layout.navigation(row='', wrap='')
      v-flex(xs12='', sm6='')
        v-btn(depressed='', small='' to='/' ) Create task
        v-btn(depressed='', small='' to='/tasks' ) List of tasks {{ this.$store.state.tasks.list.length !== 0 ? this.$store.state.tasks.list.length : ''}}
    nuxt
</template>

<script>
	export default {
		name: 'navigate',
    data() {
		  return {
        task: 0
      }
    },
    mounted () {
      this.task = JSON.parse(this.$localStorage.get('tasks'))
      if(this.task){
        this.$store.commit('tasks/getOverdueTasks', this.task)
      }
    },
	};
</script>

<style lang="sass" scoped>
  .navigation
    margin-bottom: 80px
  a
    margin: 0
    margin-right: 15px

</style>
