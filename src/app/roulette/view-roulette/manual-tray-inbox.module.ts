import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRouletteDetailComponent } from './view-roulette-detail/view-roulette-detail.component';
import { MaterialModule } from 'src/app/material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [ViewRouletteDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    NgxMaskModule.forRoot()
  ]
})
export class ManualTrayInboxModule { }
