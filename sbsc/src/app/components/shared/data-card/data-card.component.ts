import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  @Input('radalTitle') radalTitle: string;
  @Input('radalColor') radalColor: string;
  @Input('radalShadowColor') radalShadowColor: string;
  @Input('budget') budget: number;
  @Input('spent') spent: number;
  @Input('balance') balance: number;
  @Input('styles') styles: string;
  @Input() type: string;
  theme: any;
  boxTheme: any;
  percentage: number;
  constructor() { }

  ngOnInit(): void {
    this.getPercentage();
    this.getTheme();
  }

  getPercentage() {
    this.percentage = (this.spent * 100 ) / this.budget;
  }

  getTheme() {
    if (this.styles === 'blue') {
      this.theme = { background: '#fff', color: '#13244E'};
      this.boxTheme = { background: '#FBFCFE'};
    } else if (this.styles === 'orange') {
      this.theme = { background: '#fff', color: '#13244E'};
      this.boxTheme = { background: '#FFF7F5'};
    } else if (this.styles === 'dark') {
      this.theme = { background: 'linear-gradient(0deg, #0F9CDA 26.48%, #00C49A 175.16%)', color: '#fff'};
      this.boxTheme = { background: 'rgba(0, 0, 0, 0.212)', color: '#fff'};
    }
  }
}
