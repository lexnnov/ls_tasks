<template lang="pug">
  .tasks-list-wrapper
    tasks-list-footnote(@sortByComplete = "sortByComplete" @sortByOverdue = "sortByOverdue")
    tasks-list-table_header
    tasks-list-item(v-for="(item, index) in tasks" :item="item" :index="index" :key="index")
</template>

<script>
	import TasksListFootnote from './tasks-list-footnote';
  import TasksListItem from './tasks-list-item';
  import TasksListTable_header from './tasks-list-table_header';
  export default {
    components: { TasksListTable_header, TasksListItem, TasksListFootnote },
    layout: 'navi',
    name: 'tasks-list',
    data () {
      return {
        completeSort: false,
        overdueSort: false,
        currentDate: new Date()
      }
    },
    mounted () {
      this.$store.commit('tasks/getOverdueTasks', this.$store.state.tasks.list)
    },
    computed: {
      tasks() {
        return this.$store.state.tasks.list;
      }
    },
    methods: {
      sortByComplete() {
        this.$store.commit('tasks/sortComplete', this.completeSort)
        this.completeSort = !this.completeSort
      },
      sortByOverdue() {
        this.$store.commit('tasks/sortOverdue', this.overdueSort)
        this.overdueSort = !this.overdueSort

      },
      formatDate(string){
        let d = new Date(string);
        return d.toLocaleDateString()
      }
    }

	};
</script>

<style lang="sass" scoped>

</style>
