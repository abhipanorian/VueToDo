import TaskHome from './components/TaskHome.vue';
import TaskDetails from './components/TaskDetails.vue';
import AddTask from './components/AddTask.vue';

export default [
    {
        path: '/home',
        component: TaskHome
    },
    {
        path: '/todo/:id',
        component: TaskDetails
    },
    {
        path: '/add-task',
        component: AddTask
    }
]