import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import {RouletteModel} from '../../../_model/Roulette.model';
import {BetService} from '../../../_services/Bet.service';
import {UserService} from '../../../_services/User.service';
import {UsersModel} from '../../../_model/Users.model';
import {BetDto, BetModel} from '../../../_model/Bet.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-create-nodes',
  templateUrl: './create-bet.component.html',
  styleUrls: ['./create-bet.component.scss']
})
export class CreateBetComponent implements OnInit {

  users: UsersModel[];
  submitted = true;
  betformat: BetDto;
  betdataform: BetDto;
  public viewForm = false;
  createBetForm: FormGroup;
  public rouletter!: RouletteModel;
  displayedColumns: string[] = ['number', 'bet' , 'user'];
  dataBet = new MatTableDataSource<BetModel>();

  constructor(private route: Router,
              private betService: BetService,
              private userService: UserService,
              private formBuilder: FormBuilder) {

    if (history.state.data !== undefined) {
      this.rouletter = history.state.data.dataroaulette;
    } else {
      this.route.navigate(['/']);
    }
    this.buildNodeForm();
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getUsers();
    this.dataBet.paginator = this.paginator;
    this.dataBet.sort = this.sort;
    this.loadBetData();
    this.valiaview();

  }

  valiaview() {
    if (this.rouletter.idroulettestatus.id !== 3) {
    this.viewForm = true;
    }
  }

  buildNodeForm() {
    this.createBetForm = this.formBuilder.group(
      {
        number: [''],
        credit: [''],
        iduser: [''],
        idroulette: [this.rouletter.id]
      }
    );
  }

  getUsers() {
    this.userService.getAll().pipe().subscribe(
      data => {
        this.users = data;
      }
    );
  }

  loadBetData() {
    this.betService.getById(this.rouletter.id).subscribe(listadoBandeja => {
      // @ts-ignore
      this.dataBet.data = listadoBandeja;
    });
  }

  applyFilter(event) {
    this.dataBet.filter = event.trim().toLowerCase();
  }


  onSubmit() {
    this.submitted = true;
    if (this.createBetForm.invalid) {
      return;
    }
    this.betdataform = this.buildNodesCompanyInformation();
    this.betService.createBet(this.betdataform).pipe().subscribe(
      data => {
        Swal.fire({
          icon: 'success',
          title: 'OK!',
          text: data.message + ' Confirmación #:' + data.confirmation,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.ngOnInit();
            this.createBetForm.reset();
          }
        });
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Opps!',
          text: error.error.menssage,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.ngOnInit();
          }
        });
      }
    );
  }

  back() {
    this.route.navigate(['roulette/view']);
  }

  cancel() {
    Swal.fire({
      title: 'Desea cancelar la creacion de nuevas apuestas',
      showCancelButton: true,
      confirmButtonText: `Si`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.route.navigate(['roulette/view']);
      }
    });
  }

  private buildNodesCompanyInformation(): BetDto {
    const data = {
      number: this.createBetForm.value.number,
      credit: this.createBetForm.value.credit,
      iduser: this.createBetForm.value.iduser,
      idroulette: this.rouletter.id
    };
    this.betformat = data;

    return this.betformat;
  }
}
