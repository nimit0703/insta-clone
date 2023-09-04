import { Component } from '@angular/core';
import { AccDescSm } from './acc-desc-sm.model';

@Component({
  selector: 'app-right-pane',
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.css']
})
export class RightPaneComponent {
  accs: AccDescSm[] =[
    new AccDescSm('rampal','ramesh','person_1','Follow'),
    new AccDescSm('James_62','focs','person_2','Follow'),
    new AccDescSm('carlos56.mathew','indiana21','person_3','Follow'),
    new AccDescSm('adam01','eva02','person_4','Follow'),
    new AccDescSm('pollad','breathat','staff-1','Follow'),
  ];

  ownProfile: AccDescSm = new AccDescSm('_chapal.chor420','દાદાનો ગટુડો','person_1','Switch');

}
