import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  mobileQuery: MediaQueryList;


  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  Category = [
    {value: 'SC'},
    {value: 'ST'},
    {value: 'C1'},
    {value: '2A'},
    {value: '2B'},
    {value: '3A'},
    {value: '3B'},
    {value: 'GM'}
  ];


  Courses = [
    {value: 'CBTC'},
    {value: 'DISM'},
    {value: 'DIOM'},
    {value: 'CAP'},
    {value: 'DAP'},
    {value: 'DTP'},
    {value: 'CTTC'},
    {value: 'PGDCA'}
  ];

  Fees = [
    {value: '995'},
    {value: '1495'},
    {value: '1795'},
    {value: '1995'},
    {value: '2995'},
    {value: '2995'},
    {value: '5995'},
    {value: '6495'}
    
  ]


  Eligibility = [
    {value: '5th to 10th'},
    {value: 'SSLC'},
    {value: 'PUC'},
    {value: 'DEGREE'},
    {value: 'PG'},
    {value: 'Others'}
  ]

  ngOnInit() {
  }

}
