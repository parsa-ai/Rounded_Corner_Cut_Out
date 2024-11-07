import { Component, Input, OnInit } from '@angular/core';

interface Property {
  w?: string;
  h?: string;
  bg?: string;
  size?: string;
  main?: string;
  pos?: 'tl' | 'tr' | 'bl' | 'br';
}

@Component({
  selector: 'app-center',
  standalone: true,
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  @Input() property: Property = {};
  op = {};

  ngOnInit(): void {
    const { w = '5rem', h = '5rem', bg = '#fff', size = '2rem', main = '5rem', pos = 'tl' } = this.property;

    this.op = {
      '--w': w,
      '--h': h,
      '--bg-color': bg,
      '--var-size': size,
      '--main-radius': main || size,
      '--pos': pos,
      '--pos-rot-y': pos === 'tr' || pos === 'br' ? 1 : 0,
      '--pos-rot-x': pos === 'bl' || pos === 'br' ? 1 : 0,
    };
  }
}
