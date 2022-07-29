import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VinoService } from 'src/app/services/vino.service';

@Component({
  selector: 'app-create-vino',
  templateUrl: './create-vino.component.html',
  styleUrls: ['./create-vino.component.css']
})
export class CreateVinoComponent implements OnInit {
  createVino: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Vino';

  constructor(private fb: FormBuilder,
    private _vinoService: VinoService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.createVino = this.fb.group({
      variedad: ['', Validators.required],
      cosecha: ['', Validators.required],
      linea: ['', Validators.required],
      codigo: ['', Validators.required],
      precio: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarVino() {
    this.submitted = true;
    if (this.createVino.invalid) {
      return;
    }
    if(this.id === null){
      this.agregarVino();
    } else {
      this.editarVino(this.id);
    }
  }

  agregarVino() {
    const vino: any = {
      variedad: this.createVino.value.variedad,
      cosecha: this.createVino.value.cosecha,
      linea: this.createVino.value.linea,
      codigo: this.createVino.value.codigo,
      precio: this.createVino.value.precio,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this._vinoService.agregarVino(vino).then(() => {
      this.toastr.success('El vino se registro con éxito!', 'Vino Registrado', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
      this.router.navigate(['/list-vinos'])
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  editarVino(id: string){
    const vino: any = {
      variedad: this.createVino.value.variedad,
      cosecha: this.createVino.value.cosecha,
      linea: this.createVino.value.linea,
      codigo: this.createVino.value.codigo,
      precio: this.createVino.value.precio,
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this._vinoService.actualizarVino(id, vino).then(() => {
      this.loading = false;
      this.toastr.info('El vino fue actualizado con éxito', 'Vino Actualizado!', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/list-vinos']);
    })
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Vino';
      this.loading = true;
      this._vinoService.getVinoById(this.id).subscribe(data => {
        this.loading = false;
        console.log(data.payload.data()['variedad']);
        this.createVino.setValue({
          variedad: data.payload.data()['variedad'],
          cosecha: data.payload.data()['cosecha'],
          linea: data.payload.data()['linea'],
          codigo: data.payload.data()['codigo'],
          precio: data.payload.data()['precio']
        })
      })
    }
  }
}
