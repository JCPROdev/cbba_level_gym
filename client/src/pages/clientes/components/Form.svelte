<script>
  import Button from "../../../components/Button.svelte";
  import FormButton from "../../../components/FormButton.svelte";
  import GlobalForm from "../../../components/GlobalForm.svelte";
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

<GlobalForm>
  <Input text="Nombre" bind:value={form.nombre} />
  <FormButton on:click={handleSend}>Enviar</FormButton>
</GlobalForm>