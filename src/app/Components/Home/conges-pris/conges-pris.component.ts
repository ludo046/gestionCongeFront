import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';

@Component({
  selector: 'app-conges-pris',
  templateUrl: './conges-pris.component.html',
  styleUrls: ['./conges-pris.component.scss']
})
export class CongesPrisComponent implements OnInit {

  locales = [frLocale];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: frLocale,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridDay'
    },
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      { title: 'event 1', date: '2020-12-05'},
      { title: 'event 2', date: '2020-12-07'}
      
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
