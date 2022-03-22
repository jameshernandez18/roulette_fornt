export class Usuario {
  usuario: string;
  authorization: string;
  status: string;
}

export class Usuarios   {
  email: string;
  id: number;
  nombre: string;
  notificaciones: boolean;
  password: string;
  rol: {
    descripcion: string;
    id: number
  };
  tipoAcceso: string;
  usuario: string;
}

export class Login {
  User: string;
  username: string;
  password: string;
}

