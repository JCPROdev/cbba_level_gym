<script>
  import { afterUpdate } from "svelte";
  import Input from "../../../components/Input.svelte";
  import Select from "../../../components/Select.svelte";
  import { sendRequest } from "../../../utilities/sendRequest";
  import { successAlert } from "../../../utilities/alerts";

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

<form>
  <Input text="Nombre" bind:value={form.nombre} />
  <Select text="Turno" bind:value={form.turno}>
    <option value="Mañana">Mañana</option>
    <option value="Tarde">Tarde</option>
  </Select>

  <Input text="Usuario" bind:value={form.usuario} />
  <Input text="Contraseña" bind:value={form.password} type="password" />

  <section>
    <button on:click={handleSend}>Enviar</button>
  </section>
</form>

<style lang="scss">
  form {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    border: none;
    padding: 2em;
    border-radius: 1em;
    box-shadow: 0 0px 5px #0005;
    gap: 1em;

    section {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    & button {
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
