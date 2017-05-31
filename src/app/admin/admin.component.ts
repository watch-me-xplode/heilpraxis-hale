import { Component, OnInit } from '@angular/core';

import { VisitsService } from '../shared/services/visits.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  private counter = -1;

  constructor(private visitsService: VisitsService) { }

  ngOnInit() {
    this.getVisitsCounter();
  }

  private getVisitsCounter(): void {
    this.visitsService.getVisitsCounter()
      .subscribe((res: number) => this.counter = res, (err: Error) => console.log(err.message));
  }

}
