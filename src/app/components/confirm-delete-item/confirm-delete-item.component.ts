import { Component, OnInit } from '@angular/core';
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-confirm-delete-item',
  templateUrl: './confirm-delete-item.component.html',
  styleUrls: ['./confirm-delete-item.component.scss']
})
export class ConfirmDeleteItemComponent implements OnInit {

  constructor(private ref: DynamicDialogRef) { }

  ngOnInit(): void {
  }
  confirmDelete() {
    this.ref.close(true);
  }
  cancel() {
    this.ref.close(false);
  }
}
