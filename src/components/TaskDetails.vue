<template>
  <div class="task-page-container container-fluid">
    <div class="add-new-item-container">
      <input
        class="input input-sm"
        type="text"
        placeholder="Enter new task to do"
        v-model="taskText"
      />
      <button @click="onAddNewItem" class="btn primary sm">Add Item</button>
    </div>

    <div class="task-details-container">
      <h3>{{taskDetails.title}}</h3>
      <p class="body-xs">Last Modified @ {{taskDetails.lastModified}}</p>

      <ul :key="task.id" v-for="task in taskDetails.items">
        <li>{{task.text}}</li>
        <!-- <input type="checkbox" value="task.text" v-model="taskDetails.items" /> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      taskText: ""
    };
  },
  methods: {
    onAddNewItem: function() {
      this.$store.dispatch("addTaskToList", {
        itemId: this.$route.params.id,
        task: {
          id: this.taskDetails.items.length + 1,
          text: this.taskText,
          done: false
        }
      });
    }
  },
  computed: {
    taskDetails: function() {
      return this.$store.getters.getTaskDetails(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.task-page-container {
  margin-top: 10px;
}
.add-new-item-container {
  display: flex;
  justify-content: space-between;
}
.add-new-item-container input {
  margin-right: 10px;
}
.task-details-container {
  margin-top: 30px;
}
</style>
