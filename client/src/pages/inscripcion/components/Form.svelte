<script>
  import FormButton from "../../../components/FormButton.svelte";
  import GlobalForm from "../../../components/GlobalForm.svelte";
  import Input from "../../../components/Input.svelte";
  import Select from "../../../components/Select.svelte";
  import { successAlert } from "../../../utilities/alerts";
  import { getRequest } from "../../../utilities/getRequest";
  import { sendRequest } from "../../../utilities/sendRequest";

  export let closeModal;

  const hoy = new Date();
  let form = {
    idCliente: "",
    idPaquete: "",
    descuento: "",
    tipoPago: "Efectivo",
    fechaInicio: `${hoy.getFullYear()}-${hoy.getMonth() + 1}-${hoy.getDate()}`,
    fechaLimite: "",
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const res = await sendRequest(
      "inscripcion",
      {
        ...form,
        idCliente: +form.idCliente,
        idPaquete: +form.idPaquete,
        descuento: +form.descuento,
      },
      "POST"
    );
    if (res) {
      successAlert(res.message);
      closeModal();
    }
  };

  let clientesData = getRequest("cliente");
  let paquetesData = getRequest("paquete");
</script>

<GlobalForm>
  <Select text="Cliente" bind:value={form.idCliente}>
    <option value="">Seleccione un cliente</option>
    {#await clientesData}
      <option value="">Cargando clientes...</option>
    {:then clienteRes}
      {#each clienteRes.data as cliente}
        <option value={cliente.id}>{cliente.nombre}</option>
      {/each}
    {/await}
  </Select>
  <Select text="Paquete" bind:value={form.idPaquete}>
    <option value="">Seleccione un paquete</option>
    {#await paquetesData}
      <option value="">Cargando paquetes...</option>
    {:then paqueteRes}
      {#each paqueteRes.data as paquete}
        <option value={paquete.id}>{paquete.nombre}</option>
      {/each}
    {/await}
  </Select>
  <Input text="Descuento" type="number" bind:value={form.descuento} />
  <p>
    Total:
    {#await paquetesData}
      N/A
    {:then paqueteRes}
      {form.idPaquete
        ? paqueteRes.data.find((paquete) => paquete.id === form.idPaquete)
            .precio - +form.descuento
        : "N/A"}
    {/await}
  </p>
  <Select text="Tipo de pago" bind:value={form.tipoPago}>
    <option value="Efectivo">Efectivo</option>
    <option value="QR">QR</option>
    <option value="Tarjeta">Tarjeta</option>
  </Select>
  <Input text="Fecha de inicio" type="date" bind:value={form.fechaInicio} />
  <Input text="Fecha de limite" type="date" bind:value={form.fechaLimite} />
  <FormButton on:click={handleSend}>Enviar</FormButton>
</GlobalForm>
