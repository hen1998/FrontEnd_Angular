import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Productos } from 'src/app/Interfaces/productos';
import { ProductosService } from 'src/app/services/productos/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  @Input() producto!: Productos;
  updateProduct: FormGroup;

  constructor(private formBuilder: FormBuilder, private productosService: ProductosService, private activeModel: NgbActiveModal) {
    this.updateProduct = this.formBuilder.group({
      PRO_NOMBRE:"",
      PRO_SERIE:"",
      PRO_COSTO:"",
      PRO_PVP:"",
      PRO_IMAGEN:"",
      PRO_COD:""
    })
  }


  ngOnInit(): void {
    this.updateProduct.controls['PRO_NOMBRE'].setValue(this.producto.PRO_NOMBRE);
    this.updateProduct.controls['PRO_SERIE'].setValue(this.producto.PRO_SERIE);
    this.updateProduct.controls['PRO_COSTO'].setValue(this.producto.PRO_COSTO);
    this.updateProduct.controls['PRO_PVP'].setValue(this.producto.PRO_PVP);
    this.updateProduct.controls['PRO_IMAGEN'].setValue(this.producto.PRO_IMAGEN);
    this.updateProduct.controls['PRO_COD'].setValue(this.producto.PRO_COD);
  }

  actualizarProducto(){
    this.productosService.updateProductos(this.updateProduct.value).subscribe((r)=>{
      Swal.fire({title:"Producto actualizado", text:"Producto actulizado correctamente", icon:"success"})
      this.activeModel.close;
    })
    //console.log(this.updateProduct.value);
  }
}
