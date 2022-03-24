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
        events: [
          {
            id: '34445',
            title: 'Poundstretcher Ltd',
            start: '2019-12-01T00:00:00.000+00:00',
            end: '2024-06-11T00:00:00.000+01:00',
          },
        ],
        // this.hireArray,
      },
    };
  },
  methods: {
    pushToHireArray() {
      this.hires
        .filter((hire) => hire.Registration == 'YL68AEG')
        .forEach((hire) =>
          this.hireArray.push({
            id: hire.UniqueID,
            title: hire.CustomerName,
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
  },
  created() {
    this.pushToHireArray();
    console.log(`Hire Array: ${JSON.stringify(this.hireArray)}`);
  },
};
</script>
<template>
  <FullCalendar ref="fullCalendar" :options="calendarOptions" />
</template>
