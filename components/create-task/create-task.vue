<template lang="pug">
  .create-task-wrapper
    base-input(label="Task name" :value.sync="taskName" )
    base-tag-input(:tags.sync="taskTags" :value.sync="tagName")
    base-textarea(:value.sync="taskContent" :label="`Task Content (${count})`" @update="characterCounter" @keyDown="contentFormatting")
    .task-datepicker-wrapper
      .task-datepicker__label DEADLINE
      .task-datepicker
        base-date-picker(:value.sync="taskDeadline")
    v-btn(depressed, color="success", block, @click="addTask" ) Add task
    v-alert(:value='validate' type='warning' transition='scale-transition') Fill in all the fields
</template>

<script>
  import BaseTextarea from '../Base/base-textarea';
  import BaseInput from '../Base/base-input';
  import BaseTagInput from '../Base/base-tag-input';
  import BaseDatePicker from '../Base/base-date-picker';
  import { generateId, characterCounterHelper, blockKeys } from '../../assets/js/helper';
  export default {
  components: { BaseDatePicker, BaseTagInput, BaseInput, BaseTextarea },
  layout: 'navi',
  name: 'create-task',
  data () {
    return {
      taskDeadline: null,
      taskName: '',
      tagName: '',
      taskContent: '',
      taskTags: [],
      maxContentLength: 2048,
      count: 2048,
      validate: false
    }
  },
  methods: {
    addTask() {
      if(this.taskName && this.taskContent && this.taskDeadline && this.taskTags){
        let tasks = JSON.parse(this.$localStorage.get('tasks'));
        let id = generateId(this.$store.state.tasks.list);
        this.$store.commit('tasks/addTask', {
          taskId: id,
          taskName: this.taskName,
          taskTags: this.taskTags,
          taskContent: this.taskContent,
          taskDeadline: this.taskDeadline,
          taskComplete: false,
          taskOverdue: false
        });
        if(tasks){
          this.$localStorage.set('tasks', JSON.stringify([...tasks, {
            taskId: id,
            taskName: this.taskName,
            taskTags: this.taskTags,
            taskContent: this.taskContent,
            taskDeadline: this.taskDeadline,
            taskComplete: false,
            taskOverdue: false
          }]))
        }else {
          this.$localStorage.set('tasks', JSON.stringify([{
            taskId: id,
            taskName: this.taskName,
            taskTags: this.taskTags,
            taskContent: this.taskContent,
            taskDeadline: this.taskDeadline,
            taskComplete: false,
            taskOverdue: false
          }]))
        }
        this.taskName = '';
        this.tagName = '';
        this.taskContent = '';
        this.taskDeadline = '';
        this.taskTags = [];
        this.validate = false;
      }else {
        this.validate = true;
        setTimeout(()=>{
          this.validate = false
        }, 2000)
      }
    },
    characterCounter(){
      if (this.taskContent.length >= this.maxContentLength) {
        this.taskContent = this.taskContent.substr(0, this.maxContentLength);
      }
      this.count = characterCounterHelper(this.maxContentLength, this.taskContent.length)
    },
    contentFormatting(evt){
      if (this.taskContent.length >= this.maxContentLength){
        this.taskContent = this.taskContent.substr(0, this.maxContentLength);
       blockKeys(evt)
      }
      this.characterCounter()
    }
  }
};
</script>

<style lang="sass" scoped>
  .create-task-wrapper
    width: 40%
    margin:  0 auto
    max-width: 400px
    min-width: 300px
    & > *
      margin-bottom: 15px

  .task-datepicker-wrapper
    display: flex
    align-items: center
    width: 100%
    justify-content: space-between
    &__label
      width: 50%
      font-size: 15px

</style>
