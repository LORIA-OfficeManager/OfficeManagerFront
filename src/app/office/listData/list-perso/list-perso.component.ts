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
        '../officeView/tab-office/tab-office.component.scss',
        '../list-office/list-office.component.scss'],
})
export class ListPersoComponent implements OnInit {
    // personne
    private _data: TreeNode<Person>[];
    // list des personnes
    private _fetchedData: Person[];
    // list des department
    private _departments: string[];
    // list des equipe
    private _teams: string[][];
    // status
    private _status: string[];
    // group
    private _group: string;
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
        this._departments = [];
        this._teams = [];
        this._data = [];
        this.officeConversion = new Map<number, Office>();
        this.dataSource = dataSourceBuilder.create([]);
        this._group = 'dep';
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
        this._fetchedData = people;
        this._fetchedData.forEach(k =>
            this._data[this._fetchedData.indexOf(k)] = ListPersoComponent.treeNodeConversion(k));
        this.dataSource = this.dataSourceBuilder.create(this._data);
        this.dataSorting(people);
    }

    /**
     *
     * @param people
     */
    dataSorting(people: Person[]): void {
        this._departments = Array.from(people, k => k.departmentName).filter(ListPersoComponent.onlyUnique);
        this._departments.forEach(k => this._teams[this._departments.indexOf(k)] = []);
        this._departments.forEach(k => this._teams[this._departments.indexOf(k)] =
            Array.from(people.filter(p =>
                p.departmentName === k), j => j.teamName).filter(ListPersoComponent.onlyUnique));
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
    /*******************************************************GET&SETTER*************************************************/
    /////// status
    get status(): string[] {
        return this._status;
    }
    setFilter(s: string) {
        this.dataSource.filter(s);
    }
    /////// offices
    setCategoryFilter(category: string) {
        this.setFilter('');
        this._group === category ? this._group = '' : this._group = category;
    }
    /**
     * recreer le nom
     * @param name
     */
    office(name: string): number {
        return this._fetchedData.filter(k => k.officeName === name)[0].officeId;
    }
    get data(): TreeNode<Person>[] {
        return this._data;
    }

    get departments(): string[] {
        return this._departments;
    }

    get teams(): string[][] {
        return this._teams;
    }

    get group(): string {
        return this._group;
    }
}

