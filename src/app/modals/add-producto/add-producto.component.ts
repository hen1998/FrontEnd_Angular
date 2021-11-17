import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from 'src/app/services/productos/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  addProduct: FormGroup;

  constructor(private formBuilder: FormBuilder, private productosService: ProductosService, private activeModel: NgbActiveModal) {
    this.addProduct = this.formBuilder.group({
      PRO_NOMBRE:"",
      PRO_SERIE:"",
      PRO_COSTO:"",
      PRO_PVP:"",
      PRO_IMAGEN:""
    })
  }

  ngOnInit(): void {
  }

  insertarProducto(){
    this.productosService.addProductos(this.addProduct.value).subscribe((r)=>{
      Swal.fire({title:"Producto añadido", text:"Producto ingresado correctamente", icon:"success"})
      this.activeModel.close;
    })
    //console.log(this.addProduct.value);
  }

}
