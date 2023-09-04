export class Feed {
public user:string
public timeBefore:string
public feed:string
public likes:number

constructor(user:string, timeBefore:string, feed:string, likes:number  ){
    this.user = user;
    this.timeBefore = timeBefore;
    this.feed = feed;
    this.likes = likes;
}

}
