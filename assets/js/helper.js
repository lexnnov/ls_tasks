export const generateId = (arr) =>  {
  let id = 0;
  arr.forEach(()=>{
    if(arr.find(x => x.taskId === id) === undefined){
      return id
    } else {
      id ++
    }
  });
  return id
};

export const characterCounterHelper = (maxTextLength, currentTextLength) =>  {
  return maxTextLength - currentTextLength
  if ((maxTextLength - currentTextLength) < 0) return 0
};

export const blockKeys = (evt) =>  {
  if (evt.keyCode !== 38 && evt.keyCode !== 39 && evt.keyCode !== 40 && evt.keyCode !== 37 && evt.keyCode !== 8) {
    evt.preventDefault()
    return
  }
};

export const sortCompletEascending = (a, b) => {
  if (a.taskComplete < b.taskComplete)
    return -1;
  if (a.taskComplete > b.taskComplete)
    return 1;
  return 0;
};

export const sortCompletDescending = (a, b) => {
  if (a.taskComplete < b.taskComplete)
    return 1;
  if (a.taskComplete > b.taskComplete)
    return -1;
  return 0;
};

export const sortOverdueEascending = (a, b) => {
  if (a.taskOverdue < b.taskOverdue)
    return 1;
  if (a.taskOverdue > b.taskOverdue)
    return -1;
  return 0;
};

export const sortOverdueDescending = (a, b) => {
  if (a.taskOverdue < b.taskOverdue)
    return -1;
  if (a.taskOverdue > b.taskOverdue)
    return 1;
  return 0;
};

export const isOverdue = (a, b) => {
  let s = a
  let f = Date.parse(b)
  return(s > f)
};


