import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { VinoService } from 'src/app/services/vino.service';

@Component({
  selector: 'app-list-vinos',
  templateUrl: './list-vinos.component.html',
  styleUrls: ['./list-vinos.component.css']
})
export class ListVinosComponent implements OnInit {

vinos: any[] = [];

  constructor(private _vinoService: VinoService,
               private toastr: ToastrService) {  }
  

  ngOnInit(): void {
    this.getAllVinos();
  }

  getAllVinos() {
    this._vinoService.getVinos().subscribe(doc => {
      this.vinos = [];
      doc.forEach((element:any) => {
        this.vinos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.vinos);
    });
  }

  eliminarVino(id: string) {
    this._vinoService.deleteVino(id).then(() => {
      console.log('Vino eliminado con éxito!');
      this.toastr.error('El vino fue eliminado con éxito', 'Registro eliminado!', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    })
  }

}
