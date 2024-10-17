<script>
import draggable from 'vuedraggable';

export default {
  name: 'Board',
  components: {
    draggable,
  },
  data() {
    return {
      todoTasks: [],
      inProgressTasks: [],
      inReviewTasks: [],
      doneTasks: [],

      newToDoTasks: '',
      newInProgressTasks: '',
      newInReviewTasks: '',
      newDoneTasks: '',
    };
  },
  methods: {
    addTask(arrayTask, newTask) {
      if (newTask !== '') {
        arrayTask.push(newTask);
      }
      else {
        alert('Fill in a task...')
      }
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="column">
      <p>📝 To do</p>
      <draggable v-model="todoTasks" group="tasks" class="tasks">
        <template #item="{ element: task }">
          <div class="task">
            <p>{{ task }}</p>
          </div>
        </template>
      </draggable>
      <hr>
      <div class="addTask">
        <textarea class="dynamicTextarea" v-model="newToDoTasks" placeholder="Fill in a task..."></textarea>
        <button class="addTaskButton" @click="addTask(todoTasks, newToDoTasks); newToDoTasks = ''">+ Add a task</button>
      </div>
    </div>
    
    <div class="column">
      <p>🔨 In progress</p>
      <draggable v-model="inProgressTasks" group="tasks" class="tasks">
        <template #item="{ element: task }">
          <div class="task">
            <p>{{ task }}</p>
          </div>
        </template>
      </draggable>
      <hr>
      <div class="addTask">
        <textarea class="dynamicTextarea" v-model="newInProgressTasks" placeholder="Fill in a task..."></textarea>
        <button class="addTaskButton" @click="addTask(inProgressTasks, newInProgressTasks); newInProgressTasks = ''">+ Add a task</button>
      </div>
    </div>
    
    <div class="column">
      <p>🧐 In review</p>
      <draggable v-model="inReviewTasks" group="tasks" class="tasks">
        <template #item="{ element: task }">
          <div class="task">
            <p>{{ task }}</p>
          </div>
        </template>
      </draggable>
      <hr>
      <div class="addTask">
        <textarea class="dynamicTextarea" v-model="newInReviewTasks" placeholder="Fill in a task..."></textarea>
        <button class="addTaskButton" @click="addTask(inReviewTasks, newInReviewTasks); newInReviewTasks = ''">+ Add a task</button>
        
      </div>
    </div>
    
    <div class="column">
      <p>✅ Done</p>
      <draggable v-model="doneTasks" group="tasks" class="tasks">
        <template #item="{ element: task }">
          <div class="task">
            <p>{{ task }}</p>
          </div>
        </template>
      </draggable>
      <hr>
      <div class="addTask">
        <textarea class="dynamicTextarea" v-model="newDoneTasks" placeholder="Fill in a task..."></textarea>
        <button class="addTaskButton" @click="addTask(doneTasks, newDoneTasks); newDoneTasks = ''">+ Add a task</button>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  padding: 30px;
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
}

.task p {
  padding: 10px;
  margin: 0;
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

</style>
