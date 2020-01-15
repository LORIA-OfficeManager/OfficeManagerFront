import {Component, OnInit} from '@angular/core';
import {OFFICESDETAIL, Person} from '../../shared/interfaces/person';
import {TreeNode} from '../../shared/interfaces/treenode';
import {NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {Util} from 'leaflet';
import indexOf = Util.indexOf;
import {from, of} from 'rxjs';

@Component({
  selector: 'ngx-list-perso',
  templateUrl: './list-perso.component.html',
  styleUrls: ['./list-perso.component.scss',
    '../tab-office/tab-office.component.scss',
    '../list-office/list-office.component.scss'],
})
export class ListPersoComponent implements OnInit {

  private _people: Person[];
  private data: TreeNode<Person>[];
  private fetchedData: Person[];
  private treeRootElements: Person[];
  private treeChildSorted: Person[][];
  private departments: string[];
  private teams: string[][];
  private status: string[];
  private filter: string;
  customColumn = 'lastname';
  defaultColumns = [ 'firstname', 'status', 'team', 'department', 'office' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  dataSource: NbTreeGridDataSource<Person>;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;


  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<Person>) {
    this.treeRootElements = [];
    this.treeChildSorted = [];
    this.departments = [];
    this.teams = [];
    this.data = [];
  }

  ngOnInit() {
    this._people = OFFICESDETAIL;
    this.asyncInit(this._people);
  }

  asyncInit(people: Person[]) {
    this.fetchedData = people;
    this.fetchedData.forEach(k => this.data[this.fetchedData.indexOf(k)] = this.treeNodeConversion(k));
    this.dataSource = this.dataSourceBuilder.create(this.data);
    this.dataSorting(people);
  }

  dataSorting(people: Person[]): void {
    this.departments = Array.from(people, k => k.department).filter(this.onlyUnique);
    this.departments.forEach(k => this.teams[this.departments.indexOf(k)] = []);
    this.departments.forEach(k => this.teams[this.departments.indexOf(k)] =
        Array.from(people.filter(p => p.department === k), j => j.team).filter(this.onlyUnique));
    this.status = Array.from(people, k => k.status).filter(this.onlyUnique);
  }

  treeNodeConversion(input: Person): TreeNode<Person> {
    return {data: input};
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    return (this.sortColumn === column) ? this.sortDirection : NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  get people(): Person[] {
    return this._people;
  }

  office(id: number): string {
    // TODO: FIX THIS
    return 'Not yet';
  }

  setFilter(s: string) {
    this.dataSource.filter(s);
  }
}

