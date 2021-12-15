import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ModalConfirmComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [ModalConfirmComponent],
})
export class ModalModule {}
