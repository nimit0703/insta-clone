export class Feed {
public user:string
public location:string
public timeBefore:string
public feed:string
public likes:string
public caption:string

constructor(user:string,location:string ,timeBefore:string, feed:string, likes:string ,caption:string ){
    this.user = user;
    this.timeBefore = timeBefore;
    this.feed = feed;
    this.likes = likes;
    this.location=location;
    this.caption=caption;
}

}
