import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


const ModulesExportImports = [
  CommonModule,
  RouterModule
];

@NgModule({
  declarations: [],
  imports: [
    ModulesExportImports
  ],
  exports: [
    ModulesExportImports
  ]
})
export class SharedModule { }
