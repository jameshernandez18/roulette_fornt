import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import {RouletteModel, RouletteStatusDto} from '../../../_model/Roulette.model';
import {RouletteService} from '../../../_services/Roulette.service';
import {Router} from '@angular/router';
import {UserService} from '../../../_services/User.service';
import {UsersModel} from '../../../_model/Users.model';

@Component({
  selector: 'app-view-feasibily-tray',
  templateUrl: './view-roulette-detail.component.html',
  styleUrls: ['./view-roulette-detail.component.scss']
})
export class ViewRouletteDetailComponent implements OnInit {

  displayedColumns: string[] = ['idRoulete', 'estado' , 'enable', 'disable' , 'view'];
  dataRoulette = new MatTableDataSource<RouletteModel>();
  displayedColumn: string[] = ['idUser', 'name' , 'credit'];
  dataUsers = new MatTableDataSource<UsersModel>();
  submitted = true;
  idSatetRoulette: RouletteStatusDto;

  constructor(private rouletteService: RouletteService,
              private userService: UserService,
              private router: Router) {
  }


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.dataRoulette.paginator = this.paginator;
    this.dataRoulette.sort = this.sort;
    this.loadRouletteData();
    this.loadUsersData();
  }

  loadRouletteData() {
    this.rouletteService.getAllRoulette().subscribe(listadoBandeja => {
      // @ts-ignore
      this.dataRoulette.data = listadoBandeja;
    });
  }

  loadUsersData(){
    this.userService.getAll().subscribe(listadoUser => {
      // @ts-ignore
      this.dataUsers.data = listadoUser;
    });
  }

  applyFilter(event) {
    this.dataRoulette.filter = event.trim().toLowerCase();
  }

  applyFilterUsers(event) {
    this.dataUsers.filter = event.trim().toLowerCase();
  }

  createRoulette(){
    this.submitted = true;

    const idStatus = {
      idroulettestatus: 1
    };

    this.idSatetRoulette = idStatus;
    this.rouletteService.create(this.idSatetRoulette).pipe().subscribe(
      data => {
        Swal.fire({
          icon: 'success',
          title: 'OK!',
          text: data.message + ' Ruleta  # : ' + data.confirmation,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.ngOnInit();
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


  enableRoulet(datRoulette) {
    this.submitted = true;
    const idStatus = {
      idroulettestatus: 2
    };
    this.idSatetRoulette = idStatus;
    this.rouletteService.updateState(datRoulette.id, this.idSatetRoulette).pipe().subscribe(
      data => {
        Swal.fire({
          icon: 'success',
          title: 'OK!',
          text: data.message + ' Ruleta  # : ' + data.confirmation,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.ngOnInit();
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

  disableRoulet(datRoulette) {
    this.submitted = true;
    const idStatus = {
      idroulettestatus: 3
    };
    this.idSatetRoulette = idStatus;
    this.rouletteService.updateClose(datRoulette.id, this.idSatetRoulette).pipe().subscribe(
      data => {
        Swal.fire({
          icon: 'success',
          title: 'OK!',
          text: data.message + ' Ruleta  # : ' + data.confirmation,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.ngOnInit();
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


  callViewRoulette(dataSale: RouletteModel, module: string) {
    this.router.navigate([module], {
      state: {
        data: {
          dataroaulette: dataSale
        }
      }
    });
  }
}
