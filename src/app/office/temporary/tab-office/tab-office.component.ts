import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Office} from '../../shared/interfaces/office';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'ngx-tab-office',
  templateUrl: './tab-office.component.html',
  styleUrls: ['./tab-office.component.scss',
    '../list-office/list-office.component.scss'],
})
export class TabOfficeComponent implements OnInit, OnChanges {
    // liste des bureaux
    private _offices: Office[];

    /**
     * constructor
     */
    constructor() { }

    /**
     * onInit
     */
    ngOnInit() {
    }

    /**
     * changes
     * @param record
     */
    ngOnChanges(record): void {}

    /**
     * Trie les bureaux
     * @param sort
     */
    sortData(sort: Sort) {
        const data = this._offices.slice();
        if (!sort.active || sort.direction === '') {
          this._offices = data;
          return;
        }
        this._offices = data.sort((a, b) => {
          const isAsc = sort.direction === 'asc';
          switch (sort.active) {
            case 'name':
              let nameA = '' + a.num;
              let nameB = '' + a.num;
              if (a.num < 10) {
                nameA = '0' + a.num;
              }
              if (b.num < 10) {
                nameB = '0' + b.num;
              }
              return compare(a.floor + '' + nameA + '' + a.building ,
                  b.floor + '' + nameB + '' + b.building, isAsc);
            case 'size': return compare(a.size, b.size, isAsc);
            case 'floor': return compare(a.floor, b.floor, isAsc);
            case 'building': return compare(a.building, b.building, isAsc);
            default: return 0;
          }
        });
    }


  /*********************************************************GET&SETTER*************************************************/
    @Input()
    set offices(sortedDara: Office[]) {
      this._offices = sortedDara;
    }

    get offices(): Office[] {
        return this._offices;
    }
    /**
     * retourne les nombre de personne par office
     * @param office le bureau
     */
    people(office: Office) {
        return office.occupation || 0;
    }

    /**
     * retourne le nom du bureau
     * @param office
     */
    name(office: Office): string {
        let name = '' + office.num;
        if (office.num < 10) {
            name = '0' + office.num;
        }
        return  office.building + '' + office.floor + '' + name ;
    }

    /**
     * retourne la liste des noms des personnne
     * @param personAssign les personne assigne au bureau
     */
    listNom(personAssign: any[]): string {
        let res = '';
        personAssign.forEach(function (p) {
            if (res === '') {
                res =  p.name;
            } else {
                res = res + ', ' + p.name;
            }
        });
        return res;
    }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
