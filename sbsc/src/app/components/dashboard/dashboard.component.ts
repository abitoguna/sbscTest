import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/interfaces/dashboard';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  today: string;
  dash$: Observable<Dashboard>;
  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    // Get today's date.
    this.today = new Date().toLocaleDateString();
    this.dash$ = this.service.loadDash();
  }

}
