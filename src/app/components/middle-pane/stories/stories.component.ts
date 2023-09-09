import { Component,ViewChild,ElementRef } from '@angular/core';
import { Story } from '../story.model';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent {
  @ViewChild('storyContainer') storyContainer: ElementRef;


  profiles:Story[]=[
    new Story('johndoe_123','about'),
    new Story('sarah.smith_456','person_1'),
    new Story('mike_jones789','person_2'),
    new Story('emily.brown_22','person_3'),
    new Story('chris_wilson_007','person_4'),
    new Story('lisa.johnson_123','staff-1'),
    new Story('robert_miller_55','staff-2'),
    new Story('jennifer.davis_888','staff-3'),
    new Story('william_clark_321','staff-4'),
    new Story('amanda.jackson_444','person_2'),
    new Story('emily.brown_22','person_3'),
    new Story('robert_miller_55','person_4'),
    new Story('jennifer.davis_888','staff-1'),
  ]


  scrollRight() {
    const container = this.storyContainer.nativeElement;
    container.scrollLeft += 90; // Adjust the scrolling amount as needed
  }

  scrollLeft() {
    const container = this.storyContainer.nativeElement;
    container.scrollLeft -= 90; // Adjust the scrolling amount as needed
  }
  
  }

