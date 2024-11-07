import { Component, Input, OnInit } from '@angular/core';


interface Property_dote {
  w?: string;
  h?: string;
  bg?: string;
  br?: string;
}

@Component({
  selector: 'app-dote-center',
  standalone: true,
  imports: [],
  templateUrl: './dote-center.component.html',
  styleUrl: './dote-center.component.css'
})
export class DoteCenterComponent implements OnInit {
  @Input() property_dote: Property_dote = {};
  op_dote = {};

  ngOnInit(): void {
    const { w = '2.5rem', h = '2.5rem', bg = '#000', br = '2rem'} = this.property_dote;

    this.op_dote = {
      '--w-dote': w,
      '--h-dote': h,
      '--bg-dote': bg,
      '--br-dote': br,
    };
  }
}
