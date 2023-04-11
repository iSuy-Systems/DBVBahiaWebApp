import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../angular-material.module';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    AppFooterComponent
  ],
  declarations: [
    AppFooterComponent
  ]
})
export class SharedModule { }
