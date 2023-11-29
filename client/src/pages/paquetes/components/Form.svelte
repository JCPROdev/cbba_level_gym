<script>
  import Input from "../../../components/Input.svelte";
  import { successAlert } from "../../../utilities/alerts";
  import { sendRequest } from "../../../utilities/sendRequest";

  export let closeModal;
  export let paquete;

  let form = {
    nombre: paquete?.nombre || "",
    precio: paquete?.precio || "",
    dias: paquete?.dias || ""
  }

  const handleSend = async (e) => {
    e.preventDefault();
    const res = await sendRequest(
      paquete ? `paquete/${paquete.id}` : 'paquete', 
      {
        ...form,
        precio: +form.precio,
        dias: +form.dias
      },
      paquete ? "PUT" : "POST"
    );
    if(res) {
      successAlert(res.message);
      closeModal();
    }
  }
</script>

<form>
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
    text="Días"
    type="number"
    bind:value={form.dias}
  />
  <button on:click={handleSend}>Enviar</button>
</form>