<script>
import '@fullcalendar/core/vdom';
import FullCalendar from '@fullcalendar/vue3';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import luxon2Plugin from '@fullcalendar/luxon2';
import hireData from '../assets/HireData.json';

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      hires: hireData.HireReport,
      hireArray: [],
      calendarOptions: {
        plugins: [interactionPlugin, dayGridPlugin, luxon2Plugin],
        initialView: 'dayGridMonth',
        events: this.hireArray,
      },
    };
  },
  methods: {
    pushToHireArray() {
      this.hires
        .filter((hire) => hire.CustomerName == 'M.T.S Logistics Limited')
        .forEach((hire) =>
          this.hireArray.push({
            id: hire.UniqueID,
            title: hire.Registration,
            start: this.$luxonDateTime.fromFormat(
              hire.HireStartDate,
              'dd/MM/yyyy'
            ),
            end: this.$luxonDateTime.fromFormat(
              hire.HireExpiryDate,
              'dd/MM/yyyy'
            ),
          })
        );
    },
    refresh() {
      calendarApi.refetchEvents();
    },
  },
  created() {
    this.pushToHireArray();
    console.log(`Hire Array: ${JSON.stringify(this.hireArray)}`);
  },
  mounted() {
    const calendarApi = this.$refs.fullCalendar.getApi();
  },
};
</script>
<template>
  <button @click="refresh">Refresh</button>
  <FullCalendar ref="fullCalendar" :options="calendarOptions" />
</template>
