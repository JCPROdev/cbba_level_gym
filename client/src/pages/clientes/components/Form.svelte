<script>
  import Input from "../../../components/Input.svelte";
  import { errorAlert, successAlert } from "../../../utilities/alerts";
  import { sendRequest } from "../../../utilities/sendRequest";
  export let closeModal;
  export let cliente;
  let form = {
    nombre: cliente?.nombre || "",
  };
  const handleSend = async (e) => {
    e.preventDefault();

    const res = await sendRequest(
      cliente ? `cliente/${cliente.id}` : "cliente",
      form,
      cliente ? "PUT" : "POST"
    );
    if (res) {
      successAlert(res.message);
      closeModal();
    }
  };
</script>

<form>
  <Input text="Nombre" bind:value={form.nombre} />
  <button on:click={handleSend}>Enviar</button>
</form>

<style lang="scss">
  form {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    height: 70%;
    border: none;
    padding: 2em;
    border-radius: 1em;
    box-shadow: 0 0px 5px #0005;

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
