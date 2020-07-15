import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClrIconModule } from '@clr/angular';

const exportedDeclarations = [
  HeaderComponent
];

@NgModule({
  declarations: [
   ...exportedDeclarations
  ],
  imports: [
    CommonModule,
    ClrIconModule
  ],
  exports: [
    ...exportedDeclarations
  ]
})
export class CommonComponentsModule { }
