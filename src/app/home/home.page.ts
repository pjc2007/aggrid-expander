import { Component, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { ListItem } from './list-item';
import { GridOptions } from 'ag-grid-community';
import { TemplateRendererComponent } from '../template-renderer/template-renderer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('itemCard', {static:false}) itemCard: TemplateRef<any>;
  
  public items: Array<ListItem>;

  gridOptions: GridOptions = {  
    enableSorting: true,
    // Makes col take up full grid
    onGridSizeChanged: () => {
      this.gridOptions.api.sizeColumnsToFit();
    } ,
        
    getRowHeight(params) {
      return params.data.getHeight();
    },

    getRowNodeId: function (data) {
      return data.equipment;
    },
  }

  public filtered: Array<ListItem>;
  public searchText: string;

  public ngAfterViewInit(): void {
    
    const self = this;
    this.gridOptions.immutableData = true;
    this.gridOptions.animateRows = true
    this.gridOptions.api.setColumnDefs([
      {
        headerName: 'myheader',
        comparator: self.dateComparator,
        sortable: true,
        field: 'equipment',
        cellStyle: { padding: 0 },
        //autoHeight: true,
        cellRendererFramework: TemplateRendererComponent,              
        cellRendererParams: {
          ngTemplate: this.itemCard
        },        
      },
    ]);

    this.setData();
  }

  private dateComparator(valueA, valueB, nodeA, nodeB, isInverted): number {
    console.log('sorting');
    return 1;
  }
  
  private i : number = 0;
  public add() {
    let item = new ListItem(() => this.refreshCells());

    item.colour = 'green'
    item.equipment = 'NEW' + this.i++;
    item.location = "LocationA";

    item.jobs = new Array<string>();
    item.jobs.push("A New job");
    item.jobs.unshift("A New job beginning");
    this.items.push(item);
    this.filtered = [...this.items];    
    this.gridOptions.api.setRowData(this.filtered);
    this.gridOptions.api.redrawRows();
  }

  private refreshCells(): void {
    this.gridOptions.api.refreshCells({ force: true });
    this.gridOptions.api.resetRowHeights();
  }

  private setData() : void {
  this.items = new Array<ListItem>();  
    for (let i = 0; i < 30; i++) {
      let item = new ListItem(() => this.refreshCells());

      item.colour = 'green'
      item.equipment = 'Car ' + i;
      item.location = "LocationA";
      item.jobs = new Array<string>();
      item.jobs.push("job123");
      this.items.push(item);

      item = new ListItem(() => this.refreshCells());
      item.colour = 'blue'
      item.equipment = 'Car2 ' + i;
      item.location = "LocationA";
      item.jobs = new Array<string>();


      item.jobs.push('Job 567');
      item.jobs.push("Job BB");
      item.jobs.push("Job BCC");
      item.jobs.push("Job BDD");

      this.items.push(item);
    }

    this.filtered = this.items;
    
    let copy = [...this.items];
    this.filtered = copy;
    this.gridOptions.api.setRowData(this.filtered);
  }

  public filterItems(): void {
    if (!this.searchText) {
      console.log("no searchtext");
      this.filtered = this.items;
      this.gridOptions.api.setRowData(this.filtered);
      return;      
    }

    console.log(this.searchText);
    
    this.filtered = this.items.filter(x => x.equipment.includes(this.searchText));    
    let copy = [...this.filtered];
    this.gridOptions.api.setRowData(copy);
  }

  public trackByFn(index, item: ListItem) {
    return item.equipment; // or item.id
  }
}
