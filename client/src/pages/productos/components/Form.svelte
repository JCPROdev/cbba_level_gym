<script>
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
    text="Cantidad"
    type="number"
    bind:value={form.cantidad}
  />
  <button on:click={handleSend}>Enviar</button>
</form>

<style lang="scss">
  form {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height:100%;
    border: none;
    padding: 2em;
    border-radius: 1em;
    box-shadow: 0 0px 5px #0005;gap:2em;

    & > button {
      align-self: flex-end;
      border: none;
      bottom: 1em;
      right: 1em;
      padding: 0.5em 2em;
      background-color: var(--primary);
      color: var(--bg);
      border-radius: 3em;
      cursor: pointer;
    }
  }
</style>