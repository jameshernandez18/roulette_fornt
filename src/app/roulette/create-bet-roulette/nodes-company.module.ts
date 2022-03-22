import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateBetComponent} from './create-bet/create-bet.component';
import {MaterialModule} from 'src/app/material/material.module';
import {LayoutModule} from '@angular/cdk/layout';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [CreateBetComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    NgxMaskModule.forRoot()
  ]
})
export class NodesCompanyModule {
}
