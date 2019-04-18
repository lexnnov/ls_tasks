<template lang="pug">
  .table-header-wrapper
    v-list-tile
      v-list-tile-content
        v-list-tile-sub-title Task name
      v-list-tile-action
        v-list-tile-action-text Deadline
      v-list-tile-action
        | State
    v-divider

</template>

<script>
	export default {
		name: 'tasks-list-table_header'
	};
</script>

<style lang="sass" scoped>
/deep/
  .v-list__tile__sub-title
    font-size: 14px
    color: #909090
    width: 560px

  .v-list__tile__action
    font-size: 14px
    color: #909090

  .v-chip--label:hover
    background-color: #edffac !important
    cursor: pointer !important
    pointer-events: auto

  .v-list__tile__action-text
    font-size: 14px
    color: #909090
</style>
