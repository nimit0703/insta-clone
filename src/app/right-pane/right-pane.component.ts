import { Component } from '@angular/core';
import { AccDescSm } from './acc-desc-sm.model';

@Component({
  selector: 'app-right-pane',
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.css']
})
export class RightPaneComponent {
  accs: AccDescSm[] =[
    new AccDescSm('rampal','ramesh','profile1'),
    new AccDescSm('James_62','focs','profile1'),
    new AccDescSm('carlos56.mathew','indiana21','profile1'),
    new AccDescSm('adam01','eva02','profile1'),
    new AccDescSm('pollad','breathat','profile1'),
  ];

}
