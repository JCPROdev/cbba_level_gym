<script>
  import Input from "../../../components/Input.svelte";
  import Select from "../../../components/Select.svelte";
  import { productMessage } from "../../../store/productMessage";
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

  let productosData = getRequest("producto");

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
      if(!almacen) {
        const productosDataRes = await productosData;
        const producto = productosDataRes.data.find(producto => producto.id === form.productoId);
        $productMessage = `+${form.cantidadAumentada} ${producto.nombre}`;
      }
      successAlert(res.message);
      closeModal();
    }
  }
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
<style lang="scss">
  form {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height:auto;
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