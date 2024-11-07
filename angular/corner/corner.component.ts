import { Component, Input, OnInit } from '@angular/core';

interface Property {
  w : string,
  h: string,
  bg: string,
  size: string,
  main: string,
  pos: string
}

@Component({
  selector: 'app-corner',
  standalone: true,
  imports: [],
  templateUrl: './corner.component.html',
  styleUrl: './corner.component.css'
})
export class CornerComponent implements OnInit{
  @Input() property:Property = {
    w : '5rem',
    h: '5rem',
    bg: '#831111',
    size: '1.5rem',
    main: '2rem',
    pos: 'tl'
  }
  op = {}
  ngOnInit(): void {
    this.op = {
      '--w': this?.property?.w,
      '--h': this?.property?.h,
      '--bg-color': this?.property?.bg,
      '--var-size': this?.property?.size,
      '--main-radius': this?.property?.main ? this?.property?.main : this?.property?.size,
      '--pos': this?.property?.pos
    }
  }
  
}