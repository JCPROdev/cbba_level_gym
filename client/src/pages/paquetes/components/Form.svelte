<script>
  import Input from "../../../components/Input.svelte";
  import { successAlert } from "../../../utilities/alerts";
  import { sendRequest } from "../../../utilities/sendRequest";

  export let closeModal;
  export let paquete;

  let form = {
    nombre: paquete?.nombre || "",
    precio: paquete?.precio || "",
    dias: paquete?.dias || "",
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const res = await sendRequest(
      paquete ? `paquete/${paquete.id}` : "paquete",
      {
        ...form,
        precio: +form.precio,
        dias: +form.dias,
      },
      paquete ? "PUT" : "POST"
    );
    if (res) {
      successAlert(res.message);
      closeModal();
    }
  };
</script>

<form>
  <Input text="Nombre" bind:value={form.nombre} />
  <Input text="Precio" type="number" bind:value={form.precio} />
  <Input text="Días" type="number" bind:value={form.dias} />
  <button on:click={handleSend}>Enviar</button>
</form>

<style lang="scss">
  form {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    border: none;
    padding: 2em;
    border-radius: 1em;
    box-shadow: 0 0px 5px #0005;
    gap: 2em;

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
