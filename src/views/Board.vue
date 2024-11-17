<script>
import draggable from 'vuedraggable';

export default {
  name: 'Board',
  components: {
    draggable,
  },
  data() {
    return {
      columns: [
        { title: '📝 To do', tasks: [], newTask: '' },
        { title: '🔨 In progress', tasks: [], newTask: '' },
        { title: '🧐 In review', tasks: [], newTask: '' },
        { title: '✅ Done', tasks: [], newTask: '' },
      ]
    };
  },
  methods: {
    addTask(columnIndex) {
      const column = this.columns[columnIndex] // finding the colom
      if (column.newTask !== '') {
        column.tasks.push(column.newTask);
        column.newTask = '';
      }
      else {
        alert('Fill in a task...')
      }
    },

    deleteTask(columnIndex, taskIndex) {
      const column = this.columns[columnIndex] // finding the colom
      column.tasks.splice(taskIndex, 1);
    },

    addTable() {
      this.columns.push([])
    },

    deleteTable(index) {
      this.columns.splice(index, 1)
    }
    
  }
};
</script>

<template>
  <div class="addTableContainer">
    <div class="buttonAddTable" @click="addTable">
      <p>Add table</p>
      <svg class="addIcon" mlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960">
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
      </svg>
    </div>
  </div>
  <div class="container">
    <div v-for="(column, index) in columns" :key="index" class="column">
      <div class="titleSection">
        <p contenteditable="true" @blur="updateTitle($event.target.innerText)">
          {{ column.title || 'Fill in a title...' }}
        </p>
        <div>
          <svg class="icon" @click="deleteTable(index)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <draggable v-model="column.tasks" group="tasks" class="tasks">
        <template #item="{ element: task }">
          <div class="task">
            <div class="iconContainer">
              <svg class="icon" @click="deleteTask(index, taskIndex)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
            <p class="taskText" contenteditable="true" @blur="updateTitle($event.target.innerText)">{{ task }}</p>
          </div>
        </template>
      </draggable>
      <hr>
      <div class="addTask">
        <textarea class="dynamicTextarea" v-model="column.newTask" placeholder="Fill in a task..."></textarea>
        <button class="addTaskButton" @click="addTask(index);">+ Add a task</button>
      </div>
    </div>
</div>
</template>

<style>
.addTableContainer {
  display: flex;
  justify-content: flex-end;
  padding-left: 30px;
  padding-right: 30px;
}

.buttonAddTable {
  background-color: #101204;
  padding: 10px 12px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 6px;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
}

.buttonAddTable:hover {
  transition-duration: 200ms;
  background-color: #2f2f2f;
}

.addIcon {
  fill: #fff;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  padding: 30px;
}

.titleSection {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #101204;
  color: #B6C2CF;
  padding: 20px 15px 20px 15px;
  border-radius: 10px;
  font-weight: 600;
  width: 300px;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-height: 50px;
}

.task {
  background-color: #22272B;
  font-size: 13px;
  font-weight: normal;
  color: #B6C2CF;
  border-radius: 10px;
  padding: 10px;
  cursor: move;
  display: flex;
  flex-direction: column;
}

.taskText {
  padding: 5px;
  margin: 0;
}

.iconContainer {
  display: flex;
  justify-content: flex-end;
}

.icon {
  width: 20px;
  cursor: pointer;
  color: #b6c2cf5d;
}

.icon:hover {
  color: #b6c2cf;
  transition-duration: 200ms;
}

.dynamicTextarea {
  width: 100%;
  min-height: 40px;
  max-height: 150px;
  background-color: #B6C2CF;
  border: none;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
}

.dynamicTextarea::placeholder {
  color: #000;
}

.addTaskButton {  
  display: flex;
  text-align: start;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 12px;
  background-color: #579DFF;
  color: #000;
  padding: 8px;
  border-radius: 10px;
  margin-top: 10px;
}

.addTaskButton:hover {
  transition-duration: 200ms;
  background-color: #85B8FF;
}

hr {
  border: none;
  height: 2px;
  background-color: #ffffff17;
}

@media only screen and (max-width: 740px){
	.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
}

</style>
