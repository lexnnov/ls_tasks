<template lang="pug">
  .task-wrapper
    base-input(label="Task name" :value.sync="taskName" :disabled="disable")
    base-tag-input(:tags.sync="taskTags" :value.sync="tag" :disabled="disable")
    base-textarea(:value.sync="taskContent" :label="`Task Content`" :disabled="disable")
    .task-datepicker-wrapper
      .task-datepicker__label DEADLINE
      .task-datepicker
        base-date-picker(:value.sync="taskDeadline" :disabled="disable")
    .task-checkbox-wrapper
      .task-checkbox__label COMPLETE
      base-checkbox(v-if="!overdue" :value.sync="taskComplete" :disabled="disable" :label="taskComplete ? `yes` : `no`")
      .qwe(v-else)
        v-icon( left color="red darken-2") error_outline
        | task is overdue
    v-btn(depressed, color="success", block, @click="wasEdit ? saveTask() : disable ? editTask() : cancelEdit()" ) {{ this.wasEdit ? 'Save': this.disable ? 'Edit' : 'Cancel'}}

</template>

<script>
  import BaseInput from '../../components/Base/base-input';
  import BaseTagInput from '../../components/Base/base-tag-input';
  import BaseTextarea from '../../components/Base/base-textarea';
  import BaseDatePicker from '../../components/Base/base-date-picker';
  import BaseCheckbox from '../../components/Base/base-checkbox';
  export default {
    components: { BaseCheckbox, BaseDatePicker, BaseTextarea, BaseTagInput, BaseInput },
    name: 'task-editor',
    data () {
      return {
        tag:'',
        disable: true,
        name: '',
        content: '',
        tags: [],
        deadline: '',
        wasEdit: false,
        id: null,
        complete: false,
        overdue: false,
      }
    },

    watch: {
      task () {
        this.initData()
      }
    },
    mounted() {
      this.initData()
    },

    computed: {
      task: {
        get() {
          return this.$store.state.tasks.list[this.$route.params.id]
        }
      },
      taskId: {
        get() {
          if(this.task){
            return this.task.id
          }
        }
      },
      taskName: {
        get() {
          if(this.task){
            return this.name
          }
        },
        set(val) {
          this.wasEdit = true
          this.name = val
        }
      },
      taskContent: {
        get() {
          if(this.task) {
            return this.content
          }
        },
        set(val) {
          this.wasEdit = true
          this.content = val
        }
      },
      taskTags: {
        get() {
          if(this.task) {
            return this.tags
          }
        },
        set(val) {
          this.wasEdit = true
          this.tags = val
        }
      },
      taskDeadline: {
        get() {
          if(this.task) {
            return this.deadline
          }
        },
        set(val) {
          this.wasEdit = true
          this.deadline = val
        }
      },
      taskComplete: {
        get() {
          if(this.task) {
            return this.complete
          }
        },
        set(val) {
          this.wasEdit = true
          this.complete = val
        }
      },
      taskOverdue: {
        get() {
          if(this.task) {
            return this.overdue
          }
        },
        set(val) {
          this.wasEdit = true
          this.overdue = val
        }
      }
    },

    methods: {
      initData(){
        if(this.task) {
          this.name = this.task.taskName;
          this.content = this.task.taskContent;
          this.tags = this.task.taskTags;
          this.deadline = this.task.taskDeadline;
          this.id = this.task.taskId;
          this.complete = this.task.taskComplete;
          this.overdue = this.task.taskOverdue;
        }
      },
      editTask(){
        this.disable = false
      },
      cancelEdit(){
        this.disable = true
      },
      saveTask(){
        this.disable = true
        this.wasEdit = false
        this.$store.commit('tasks/editTask', {
          taskId: this.id,
          taskName: this.name,
          taskTags: this.tags,
          taskContent: this.content,
          taskDeadline: this.deadline,
          taskComplete: this.complete,
          taskOverdue: this.overdue
        })
        this.$localStorage.set('tasks', JSON.stringify(this.$store.state.tasks.list))
      }
    }
  };
</script>

<style lang="sass" scoped>
  .task-wrapper
    width: 40%
    margin:  0 auto
    max-width: 400px
    min-width: 300px
    & > *
      margin-bottom: 15px

  .task-datepicker-wrapper, .task-checkbox-wrapper
    display: flex
    align-items: center
    width: 100%
    justify-content: space-between

  .task-datepicker, .task-checkbox
    &__label
      width: 100%
      font-size: 15px

  .qwe
    display: flex
    align-items: center
    width: 100%
</style>
