<script>
  import Input from "../../../components/Input.svelte";
  import Select from "../../../components/Select.svelte";
  import { successAlert } from "../../../utilities/alerts";
  import { getRequest } from "../../../utilities/getRequest";
  import { sendRequest } from "../../../utilities/sendRequest";

  export let closeModal;
  export let almacen;

  let form = {
    productoId: almacen?.productoId || "",
    cantidadAumentada: almacen?.cantidadAumentada || "",
    totalCompra: almacen?.totalCompra || ""
  }

  const handleSend = async (e) => {
    e.preventDefault();
    const res = await sendRequest(
      almacen ? `almacen/${almacen.id}` : 'almacen', 
      {
        productoId: +form.productoId,
        cantidadAumentada: +form.cantidadAumentada,
        totalCompra: +form.totalCompra,
      },
      almacen ? "PUT" : "POST"
    );
    if(res) {
      successAlert(res.message);
      closeModal();
    }
  }

  let productosData = getRequest("producto");
</script>

<form>
  <Select text="Producto" bind:value={form.productoId}>
    <option value="">Seleccione un producto</option>
    {#await productosData}
      <option value="">Cargando productos...</option>
    {:then productosRes} 
    {#each productosRes.data as cliente}
      <option value={cliente.id}>{cliente.nombre}</option>
    {/each}
    {/await}
  </Select>
  <Input 
    text="Cantidad a aumentar"
    type="number"
    bind:value={form.cantidadAumentada}
  />
  <Input 
    text="Precio total"
    type="number"
    bind:value={form.totalCompra}
  />
  <button on:click={handleSend}>Enviar</button>
</form>