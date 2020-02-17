import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from '../../shared/interfaces/person';
import {TreeNode} from '../../shared/interfaces/treenode';
import {NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {PersonService} from '../../shared/services/person.service';
import {Office} from '../../shared/interfaces/office';


@Component({
  selector: 'ngx-list-perso',
  templateUrl: './list-perso.component.html',
  styleUrls: ['./list-perso.component.scss',
    '../tab-office/tab-office.component.scss',
    '../list-office/list-office.component.scss'],
})
export class ListPersoComponent implements OnInit {
  // event
  private _changeOffice$: EventEmitter<boolean>;
  // personne
  private data: TreeNode<Person>[];
  private fetchedData: Person[];
  // list des department
  private departments: string[];
  // list des equipe
  private teams: string[][];
  // status
  private _status: string[];
  // group
  private group: string;
  customColumn = 'officeName';
  defaultColumns = [ 'lastname', 'firstname', 'statusName', 'teamName', 'departmentName'];
  allColumns = [...this.defaultColumns, this.customColumn ];
  customAllColumns = ['Nom', 'Prénom', 'Statut', 'Équipe', 'Département', 'Bureau'];
  dataSource: NbTreeGridDataSource<Person>;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  officeConversion: Map<number, Office>;

  /**
   * constructor
   * @param dataSourceBuilder
   * @param peopleService
   */
  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<Person>, private peopleService: PersonService) {
    this.departments = [];
    this.teams = [];
    this.data = [];
    this.officeConversion = new Map<number, Office>();
    this.dataSource = dataSourceBuilder.create([]);
    this.group = 'dep';
  }

  /**
   * Init
   */
  ngOnInit() {
    this.peopleService.fecth().subscribe(k => this.asyncInit(k));
  }

  /**
   *
   * @param people
   */
  asyncInit(people: Person[]) {
    this.fetchedData = people;
    this.fetchedData.forEach(k => this.data[this.fetchedData.indexOf(k)] = ListPersoComponent.treeNodeConversion(k));
    this.dataSource = this.dataSourceBuilder.create(this.data);
    this.dataSorting(people);
  }

  /**
   *
   * @param people
   */
  dataSorting(people: Person[]): void {
    this.departments = Array.from(people, k => k.departmentName).filter(ListPersoComponent.onlyUnique);
    this.departments.forEach(k => this.teams[this.departments.indexOf(k)] = []);
    this.departments.forEach(k => this.teams[this.departments.indexOf(k)] =
        Array.from(people.filter(p => p.departmentName === k), j => j.teamName).filter(ListPersoComponent.onlyUnique));
    this._status = Array.from(people, k => k.statusName).filter(ListPersoComponent.onlyUnique);
  }

  /**
   *
   * @param input
   */
  static treeNodeConversion(input: Person): TreeNode<Person> {
    return {data: input};
  }

  /**
   *
   * @param sortRequest
   */
  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  /**
   *
   * @param column
   */
  getSortDirection(column: string): NbSortDirection {
    return (this.sortColumn === column) ? this.sortDirection : NbSortDirection.NONE;
  }

  /**
   *
   * @param index
   */
  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

  /**
   *
   * @param value
   * @param index
   * @param self
   */
  static onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  /**
   *
   * @param name
   */
  office(name: string): number {
    return this.fetchedData.filter(k => k.officeName === name)[0].officeId;
  }

  setFilter(s: string) {
    this.dataSource.filter(s);
  }
  /////// offices
  setCategoryFilter(category: string) {
    this.setFilter('');
    this.group === category ? this.group = '' : this.group = category;
  }
  /////// offices
  get status(): string[] {
    return this._status;
  }
  /////// offices
  @Output('ChangeOffice')
  get changeOffice$() {
    return this._changeOffice$;
  }
}

