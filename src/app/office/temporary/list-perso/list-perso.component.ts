import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from '../../shared/interfaces/person';
import {TreeNode} from '../../shared/interfaces/treenode';
import {NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {PersonService} from '../../shared/services/person.service';
import {Office} from '../../shared/interfaces/office';
import {OfficeDetailService} from '../../shared/services/office-detail.service';

@Component({
  selector: 'ngx-list-perso',
  templateUrl: './list-perso.component.html',
  styleUrls: ['./list-perso.component.scss',
    '../tab-office/tab-office.component.scss',
    '../list-office/list-office.component.scss'],
})
export class ListPersoComponent implements OnInit {
  private _changeOffice$: EventEmitter<boolean>;
  private data: TreeNode<Person>[];
  private fetchedData: Person[];
  private departments: string[];
  private teams: string[][];
  private _status: string[];
  private group: string;
  customColumn = 'officeName';
  defaultColumns = [ 'lastname', 'firstname', 'statusName', 'teamName', 'departmentName'];
  allColumns = [...this.defaultColumns, this.customColumn ];
  customAllColumns = ['Nom', 'Prénom', 'Statut', 'Équipe', 'Département', 'Bureau'];
  dataSource: NbTreeGridDataSource<Person>;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  officeConversion: Map<number, Office>;


  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<Person>, private peopleService: PersonService,
              private officeService: OfficeDetailService) {
    this.departments = [];
    this.teams = [];
    this.data = [];
    this.officeConversion = new Map<number, Office>();
    this.dataSource = dataSourceBuilder.create([]);
  }

  ngOnInit() {
    this.peopleService.fecth().subscribe(k => this.asyncInit(k));
  }

  asyncInit(people: Person[]) {
    this.fetchedData = people;
    this.fetchedData.forEach(k => this.data[this.fetchedData.indexOf(k)] = ListPersoComponent.treeNodeConversion(k));
    this.dataSource = this.dataSourceBuilder.create(this.data);
    this.dataSorting(people);
    // Array.from(people, j => j.officeId).filter(ListPersoComponent.onlyUnique)
    //     .forEach(k => this.officeService.fetchOne(k).subscribe(p => this.asyncOfficeInit(k, p.office)));
  }

  asyncOfficeInit(id: number, office: Office) {
    this.officeConversion.set(id, office);
  }

  dataSorting(people: Person[]): void {
    this.departments = Array.from(people, k => k.departmentName).filter(ListPersoComponent.onlyUnique);
    this.departments.forEach(k => this.teams[this.departments.indexOf(k)] = []);
    this.departments.forEach(k => this.teams[this.departments.indexOf(k)] =
        Array.from(people.filter(p => p.departmentName === k), j => j.teamName).filter(ListPersoComponent.onlyUnique));
    this._status = Array.from(people, k => k.statusName).filter(ListPersoComponent.onlyUnique);
  }

  static treeNodeConversion(input: Person): TreeNode<Person> {
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

  static onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  office(name: string): number {
    return this.fetchedData.filter(k => k.officeName === name)[0].officeId;
  }

  setFilter(s: string) {
    this.dataSource.filter(s);
  }

  setCategoryFilter(category: string) {
    this.setFilter('');
    this.group === category ? this.group = '' : this.group = category;
  }

  get status(): string[] {
    return this._status;
  }

  @Output('ChangeOffice')
  get changeOffice$() {
    return this._changeOffice$;
  }
  changeOffice(data: boolean) {
    this._changeOffice$.emit(data);
  }

  getOffice(id: number): Office {
    return this.officeConversion.get(id);
  }
}

