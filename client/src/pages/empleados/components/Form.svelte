<script>
  import { afterUpdate } from "svelte";
  import Input from "../../../components/Input.svelte";
  import Select from "../../../components/Select.svelte";
  import { sendRequest } from "../../../utilities/sendRequest";
  import { successAlert } from "../../../utilities/alerts";
  import Button from "../../../components/Button.svelte";
  import FormButton from "../../../components/FormButton.svelte";
  import GlobalForm from "../../../components/GlobalForm.svelte";

  export let closeModal;
  export let empleado;

  let form = {
    nombre: empleado?.nombre || "",
    turno: empleado?.turno || "Mañana",
    usuario: empleado?.usuario || "",
    password: empleado?.password || "",
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const res = await sendRequest(
      empleado ? `empleado/${empleado.id}` : "empleado",
      form,
      empleado ? "PUT" : "POST"
    );
    if (res) {
      successAlert(res.message);
      closeModal();
    }
  };
</script>

<GlobalForm>
  <Input text="Nombre" bind:value={form.nombre} />
  <Select text="Turno" bind:value={form.turno}>
    <option value="Mañana">Mañana</option>
    <option value="Tarde">Tarde</option>
  </Select>

  <Input text="Usuario" bind:value={form.usuario} />
  <Input text="Contraseña" bind:value={form.password} type="password" />

  <FormButton on:click={handleSend}>Enviar</FormButton>
</GlobalForm>
