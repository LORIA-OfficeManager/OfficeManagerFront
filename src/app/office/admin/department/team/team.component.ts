import {Component, Input, OnInit} from '@angular/core';
import {Department, Team} from '../../../shared/interfaces/department';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DepartmentService} from '../../../shared/services/department.service';
import {NbComponentStatus, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'ngx-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  private _form: FormGroup;
  private _teams: Team[];
  private _departement: Department;

  constructor(private _departmentService: DepartmentService, private toastrService: NbToastrService) {
    this._teams = [];
    this._form = new FormGroup({
      name: new FormControl('', Validators.compose( [
        Validators.required,
      ])),
    });
  }

  ngOnInit() {
  }

  create(data: any): void {
    this._departmentService.createTeams(data.name, this._departement.id)
          .subscribe(
              (_) => {
            this._teams.push(_);
            this.showToastSuc('success', 'bottom-end', `L'équipe a été créé`);
          },
              () => this.showToastErr('warning', 'bottom-end', `L'équipe n'a pas été créé`),
          );
  }
  /**
   * Returns private property _form
   */
  get form(): FormGroup {
    return this._form;
  }
  @Input()
  set department(dep: Department) {
    this._departement = dep;
  }
  get department(): Department {
    return this._departement;
  }
  @Input()
  set teams(teams: Team[]) {
    this._teams = teams;
  }

  get teams(): Team[] {
    return this._teams;
  }

  message(team: Team) {
    return 'êtes-vous sûr de vouloir <strong>supprimer</strong> l équipe ' + team.name + ' ?';
  }

  delete(data: any) {
    this._departmentService.deleteTeams(this._departement.id, data.id).subscribe(
        () => {
          this._teams = this._teams.filter( (__) => __.id !== data.id );
          this.showToastSuc('success', 'bottom-end', `L'équipe a été supprimé`);
        },
        () => this.showToastErr('warning', 'bottom-end', `L'équipe n'a pas été supprimé `),
    );
  }
  // corrige un bug, lorsqu'on modifie le nom d'une équipe on affiche la valuer de l'input meme si cela n'a pas été
  // modifié dans la base
  update(i: number, idD: number, t: Team, $event: string) {
    this._departmentService.updateTeam(idD, t.id, $event).subscribe(
        (_) => {
          this._teams[i].name = _.name ;
          this.showToastSuc('success', 'bottom-end', `L'équipe a été modifié`);
        },
        () => this.showToastErr('warning', 'bottom-end', `L'équipe n'a pas été modifié`),
    );
  }

  showToastSuc(status: NbComponentStatus, position, message: string) {
    this.toastrService.show(message,
        `Succès`,
        { status, position, limit: 2});
  }
  showToastErr(status: NbComponentStatus, position, message: string) {
    this.toastrService.show(message,
        `Erreur`,
        { status, position, limit: 2});
  }
}
