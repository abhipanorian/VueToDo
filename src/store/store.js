import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        items: [
            {
                itemId: "1",
                title: "Home Stuff",
                createdAt: (new Date()).toDateString(),
                lastModified: (new Date()).toDateString(),
                items: [{id:1, text:'Buy groceries', done: false}]
            },
            {
                itemId: "2",
                title: "Office Stuff",
                createdAt: (new Date()).toDateString(),
                lastModified: (new Date()).toDateString(),
                items: [{id:1, text:'Submit assignment', done: false}]
            }
        ]
    },
    getters: {
        getTaskDetails: state => id => {
            return state.items.find(item=>item.itemId == id)
        }
    },
    mutations: {
        addItem: (state, newItem) => {
            state.items.push({itemId: state.items.length+1, ...newItem})
        },
        addTaskToList: (state, payload) => {
            let {itemId, task} = payload;
            let item = state.items.find((item)=>{return item.itemId == itemId});
            item.items.push(task)
        }
    },
    actions: {
        addItem: (context, item) => {
            context.commit('addItem', item);
        },
        addTaskToList: (context, payload) => {
            context.commit('addTaskToList', payload);
        }
    }
})