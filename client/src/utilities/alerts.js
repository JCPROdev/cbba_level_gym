import Swal from "sweetalert2";

export const successAlert = (text) => {
  Swal.fire({
    icon: "success",
    title: "¡Éxito!",
    text,
    iconColor: "#E94E1B",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#65b32e"
  });
}

export const errorAlert = (text) => {
  Swal.fire({
    icon: "error",
    title: "¡Error!",
    text,
    iconColor: "#E94E1B",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#65b32e",
  });
}

export const upsAlert = (text) => {
  Swal.fire({
    icon: "warning",
    title: "¡Ups...!",
    iconColor: "#E94E1B",
    text,
  });
}

export const sureAlert = (text, onConfirm = () => {}) => {
  Swal.fire({
    title: "¿Estás seguro?",
    text,
    icon: "warning",
    iconColor: "#E94E1B",
    showCancelButton: true,
    confirmButtonText: "Continuar",
    confirmButtonColor: "#65b32e",
    cancelButtonColor: "#E94E1B",
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
    }
  });
}