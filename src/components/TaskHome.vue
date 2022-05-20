<template>
  <div class="task-home-container container-fluid">
    <button @click="onAddNewList" class="btn primary sm">Add New List</button>

    <div @click="onItemClick(item.itemId)" class="item-container container-fluid" :key="item.itemId" v-for="item in tasks">
      <h3>{{item.title}}</h3>
      <div class="item-container-bottom-row-1">
        <div>
          <p class="label-xs">Created At</p>
          <p class="body-xs">{{item.createdAt}}</p>
        </div>
        <div>
            <p class="label-xs">Last Modified At</p>
          <p class="body-xs">{{item.lastModified}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'; 
export default {
  data: function() {
    return {
    };
  },
  methods: {
    onAddNewList: function() {
      this.$router.push('/add-task'); 
    },
    onItemClick: function(id) {
      this.$router.push('/todo/'+id); 
    },
    ...mapActions([
        'addItem'
    ])
  },
  computed: {
      tasks: function() {
          return this.$store.state.items
      },
    //   ...mapGetters([
    //       'stateGetterEg'
    //   ]),
    //   getterEg: function() {
    //       return this.$store.getters.stateGetterEg;
    //   }
  }
};
</script>

<style scoped>
.task-home-container  {
    margin-top: 10px;
}
.item-container {
  border: solid 1px gray;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
}
.item-container-bottom-row-1 {
    display: flex;
    justify-content: space-between;
}
</style>
