<script>
  import FormButton from "../../../components/FormButton.svelte";
  import GlobalForm from "../../../components/GlobalForm.svelte";
  import Input from "../../../components/Input.svelte";
  import { successAlert } from "../../../utilities/alerts";
  import { sendRequest } from "../../../utilities/sendRequest";

  export let closeModal;
  export let producto;

  let form = {
    nombre: producto?.nombre || "",
    precio: producto?.precio || "",
    cantidad: producto?.cantidad || "",
  }

  const handleSend = async (e) => {
    e.preventDefault();
    const res = await sendRequest(
      producto ? `producto/${producto.id}` : 'producto', 
      {
        nombre: form.nombre,
        precio: +form.precio,
        cantidad: +form.cantidad,
      },
      producto ? "PUT" : "POST"
    );
    if(res) {
      successAlert(res.message);
      closeModal();
    }
  }
</script>

<GlobalForm>
  <Input 
    text="Nombre"
    bind:value={form.nombre}
  />
  <Input 
    text="Precio"
    type="number"
    bind:value={form.precio}
  />
  <Input 
    text="Cantidad"
    type="number"
    bind:value={form.cantidad}
  />
  <FormButton on:click={handleSend}>Enviar</FormButton>
</GlobalForm>