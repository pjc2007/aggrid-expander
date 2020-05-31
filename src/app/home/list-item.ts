
export class ListItem {
constructor(public refresh : () => void) {}
  public isOpen: boolean;
  public colour: string;
  public equipment: string;
  public location: string;
  public jobs: Array<string>;   
  public getHeight(): number {
    let height = 72;
    if (this.isOpen)
      height += (this.jobs.length - 1) * 40;
    
    return height;
  }

  public setIsOpen(val: boolean) {
    this.isOpen = val;    
    this.refresh();
  }  
}