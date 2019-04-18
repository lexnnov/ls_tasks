import {
  isOverdue,
  sortCompletDescending,
  sortCompletEascending,
  sortOverdueDescending,
  sortOverdueEascending
} from '../assets/js/helper';

export const state = () => ({
  list: [],
  currentDate: Date.now()
});

export const mutations = {
  addTask (state, text) {
    state.list.push(text)
  },
  getOverdueTasks (state, todo) {
    state.list = todo.map((item) => {
      if (isOverdue(state.currentDate, item.taskDeadline) && !item.taskComplete ){
        return {
          taskId: item.taskId,
          taskName: item.taskName,
          taskTags: item.taskTags,
          taskContent: item.taskContent,
          taskDeadline: item.taskDeadline,
          taskComplete: item.taskComplete,
          taskOverdue: true
        }
      } else return item
    })
  },
  sortComplete (state, sort) {
    if (sort) {
      state.list.sort(sortCompletEascending)
    } else {
      state.list.sort(sortCompletDescending)
    }
  },
  sortOverdue (state, sort) {
    if (sort) {
      state.list.sort(sortOverdueEascending)
    } else {
      state.list.sort(sortOverdueDescending)
    }
  },
  editTask (state, task) {
    state.list = state.list.map((item) => {
      if (item.taskId === task.taskId){
        return {
          taskId: task.taskId,
          taskName: task.taskName,
          taskTags: task.taskTags,
          taskContent: task.taskContent,
          taskDeadline: task.taskDeadline,
          taskComplete: task.taskComplete,
          taskOverdue: task.taskOverdue
        }
      } else return item
    })
  }
};
