import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import FullCalendar from './components/Calendar.vue';
import { DateTime } from 'luxon';

const app = createApp(App);
app.component('full-calendar', FullCalendar);
app.config.globalProperties.$luxonDateTime = DateTime;
app.mount('#app');
