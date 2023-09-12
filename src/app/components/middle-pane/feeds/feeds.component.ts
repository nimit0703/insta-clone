import { Component } from '@angular/core';
import { Feed } from '../feed.model';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent {
  
  isLiked = true; // Initial state
  isBookmarked = false;
  
  feeds:Feed[] = [
    new Feed("johndoe_123","Sydney, Australia","10m","p-1","55","better worls"),
    new Feed("sarah.smith_456","Tokyo, Japan","58m","p-2","47","live in peace"),
    new Feed("mike_jones789","new York City, USA","5hr","p-3","33","sometimes"),
    new Feed("emily.brown_22","Sydney, Australia","8hr","p-4","23","streo of my heart"),
    new Feed("chris_wilson_007","Taj mahal, India","7d","p-5","12","long leavess"),
    new Feed("lisa.johnson_123","Cape Town, South Africa","4d","p-6","1m","weekends "),
    new Feed("robert_miller_55","Venice, Italy","9d","p-7","34","parting hard"),
    new Feed("jennifer.davis_888","Cairo, Egypt","3w","p-5","2","best vibes"),
    new Feed("william_clark_321","Vancouver, Canada","43w","p-6","100k","rockkkk"),
    new Feed("amanda.jackson_444","Dubai, United Arab Emirates","3y","p-7","433","dance monkey"),
  ];
  
  
  toogleBookmark(){
    this.isBookmarked = !this.isBookmarked;
  }
  toggleLike() {
    this.isLiked = !this.isLiked;
  }

}


