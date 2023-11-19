<script>
  import Input from "../../../components/Input.svelte";
  import { sendRequest } from "../../../utilities/sendRequest";

  export let closeModal;
  export let paquete;

  let form = {
    nombre: paquete?.nombre || "",
    precio: paquete?.precio || "",
  }

  const handleSend = async (e) => {
    e.preventDefault();
    const res = await sendRequest(
      paquete ? `paquete/${paquete.id}` : 'paquete', 
      {
        ...form,
        precio: +form.precio
      },
      paquete ? "PUT" : "POST"
    );
    if(res) {
      alert(res.message);
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
  <button on:click={handleSend}>Enviar</button>
</form>