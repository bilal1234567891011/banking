import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent {
@Input() item:String|undefined


@Output() oncancel=new EventEmitter()

@Output() onDelete=new EventEmitter()

// event creation

  constructor(){

  }
  onCancel(){
    // start event
this.oncancel.emit()
  }

  deleteAcc(){
this.onDelete.emit(this.item)
  }
}
