<template>
  <div class="add-task-container container-fluid">
    <h1>Add a new ToDo List</h1>
    <input class="input input-sm" type="text" v-model="title" placeholder="Enter title" />

    <input
      class="input input-sm"
      type="text"
      :key="item.id"
      v-for="item in items"
      placeholder="Enter new item details"
      v-model="item.text"
    />
    <button @click="onAddNewItem" class="btn secondary sm">+ Add</button>
    <button @click="onSubmit" class="btn primary sm">Submit</button>
    <!-- {{title}} -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "",
      items: [{ id: 1, text: "", done: false }]
    };
  },
  methods: {
    onAddNewItem: function() {
      this.items.push({ id: this.items.length + 1, text: "", done: false });
    },
    onSubmit: function() {
      this.$store.dispatch("addItem", {
        title: this.title,
        items: this.items,
        createdAt: new Date().toDateString(),
        lastModified: new Date().toDateString()
      });
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.add-task-container {
  margin-top: 10px;
}
.add-task-container input {
  margin-bottom: 10px;
}
</style>
