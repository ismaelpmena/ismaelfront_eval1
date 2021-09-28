export interface Producto {
  id?: number;
  nombre?: string;
  descripcion?: string;
  precio?: number | string;
  img?: string;
}
interface Lista_productos{
  productos?: Producto[];
}

