import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../angular-material.module';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppFooterComponent } from './components/app-footer/app-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  exports:[
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    AppFooterComponent,
    CurrencyMaskModule
  ],
  declarations: [
    AppFooterComponent
  ]
})
export class SharedModule { }
