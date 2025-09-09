import Swal from "sweetalert2";

export default function useAlert() {
    function ConfirmAlert() {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        }).then((result) => {
            Swal.fire({
                position: "top-end",
                toast: true,
                icon: 'success',
                title: "Produto Adicionado",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            })
        })
    }
    function doubleAlert() {
        Swal.fire({
            title: "Segundo Alerta",
            text: "Texto do segundo alerta",
            icon: "question"
        })
    }
    return { ConfirmAlert, doubleAlert };
}