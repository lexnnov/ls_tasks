<template lang="pug">
  .dic
    template
      v-list-tile(ripple='', :to="`/task/${index}`")
        v-list-tile-content
          v-list-tile-title {{ item.taskName }}
          v-list-tile-sub-title {{ item.taskContent }}
        v-list-tile-action
          v-list-tile-action-text {{ formatDate(item.taskDeadline)  }}
        v-list-tile-action
          v-icon(:color='item.taskComplete ? `yellow darken-2` : item.taskOverdue ? `red darken-2` : `grey`')
            | {{item.taskComplete ? 'done' : item.taskOverdue ? 'error_outline' : 'alarm'}}
</template>

<script>
	export default {
		name: 'tasks-list-item',
    props: {
		  item: {
		    type: Object,
        default: null
      },
      index: {
        type: Number,
        default: null
      }
    },
    methods: {
      formatDate(string){
        let d = new Date(string);
        return d.toLocaleDateString()
      }
    }
	};
</script>

<style scoped>
  .dic {
    border-bottom: 1px solid #e1e1e1;
  }
  .dic:last-child{
    border-bottom: none;
  }
</style>
