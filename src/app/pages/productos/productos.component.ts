import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { Productos } from 'src/app/Interfaces/productos';
import { AddProductoComponent } from 'src/app/modals/add-producto/add-producto.component';
import { EditProductoComponent } from 'src/app/modals/edit-producto/edit-producto.component';
import { ProductosService } from 'src/app/services/productos/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Productos[] = [];
  searchForm: FormGroup

  paginationPags: PaginationInstance ={
    itemsPerPage: 5,
    currentPage: 1
  }

  constructor(private productoService: ProductosService, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      productoId:["", Validators.required ]
    })
   }

  ngOnInit(): void {
    this.getProductos();
  }

  searchSubmit(){
    if(this.searchForm.valid){
        this.productoService.getProductoById(this.searchForm.value.productoId).subscribe((r)=>{
        this.productos=[];
        this.productos.push(r);
      })
    }else{
      this.getProductos();
    }
  }

  addProduct(){
    const modalRef = this.modalService.open(AddProductoComponent);
    modalRef.closed.subscribe((r) => { this.getProductos(); });
  }

  updateProducto(producto: Productos){
    const modalRef = this.modalService.open(EditProductoComponent);
    modalRef.componentInstance.producto = producto;
    modalRef.closed.subscribe((r) => {this.getProductos});
  }

  getProductos(){
    this.productoService.getProductos().subscribe((r: Productos[])=> {
      this.productos = r;
      //console.log(this.productos);
    })
  }

  deleteProducto(producto: Productos){
    Swal.fire({
      title:"Estas seguro que quieres eliminar?",
      icon:"warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result)=>{
      if(result.isConfirmed){
        this.productoService.deleteProductos(producto).subscribe((r) => {
          Swal.fire({title:"Elminado!!",icon:"success"})
          this.getProductos();
        })
      }
    })

  }

  changePag(event: any){
    this.paginationPags.currentPage = Number(event);
  }

}
