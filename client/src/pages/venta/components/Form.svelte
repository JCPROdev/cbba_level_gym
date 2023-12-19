<script>
  import FormButton from "../../../components/FormButton.svelte";
  import GlobalForm from "../../../components/GlobalForm.svelte";
  import Input from "../../../components/Input.svelte";
  import Select from "../../../components/Select.svelte";
  import { errorAlert, successAlert } from "../../../utilities/alerts";
  import { getRequest } from "../../../utilities/getRequest";
  import { sendRequest } from "../../../utilities/sendRequest";
  import { user } from "../../../store/user";
  import TableVenta from "../../../components/TableVenta.svelte";
  import { useGet } from "../../../hooks/useGet";
  import SquareButton from "../../../components/SquareButton.svelte";
  import IconEye from "../../../icons/IconEye.svelte";
  import IconDelete from "../../../icons/IconDelete.svelte";
  export let closeModal;

  let form = {
    empleado: $user.id,
    productos: [],
  };
  let selecionarProducto = "";
  let cantidad = "";
  const handleSend = async (e) => {
    e.preventDefault();
    if (form.productos.length == 0) {
      return errorAlert("Debe agregar minimo un producto");
    }
    const res = await sendRequest(
      "venta",
      {
        ...form,
      },
      "POST"
    );
    if (res) {
      successAlert(res.message);
      closeModal();
    }
  };

  let { data } = useGet("producto");

  const handleProducto = (e) => {
    e.preventDefault();
    if (cantidad === "") {
      return errorAlert("Debe introducir la cantidad");
    } else if (selecionarProducto === "") {
      return errorAlert("Debe selecionar un producto");
    }
    if (selecionarProducto) {
      const existe = form.productos.findIndex(
        (productos) => productos.id === selecionarProducto
      );

      if (existe != -1) {
        const producto = form.productos[existe];
        form.productos = form.productos.with(existe, {
          ...producto,
          cantidad: Number(producto.cantidad) + Number(cantidad),
        });
      } else {
        form.productos = [
          ...form.productos,
          {
            id: selecionarProducto,
            cantidad: +cantidad,
            precioVendido: $data.find(
              (producto) => producto.id == selecionarProducto
            ).precio,
          },
        ];
      }
    }
  };

  $: productos = form.productos.map((v) => {
    const producto = $data.find((producto) => producto.id == v.id);
    return {
      producto,
      cantidad: v.cantidad,
    };
  });

  $: total = !productos
    ? "N/A"
    : productos.reduce((suma, producto) => {
        suma += producto.cantidad * producto.producto.precio;
        return suma;
      }, 0) + "Bs";

  const handleDeleteProduc = (id) => {
    form.productos = form.productos.filter((producto) => producto.id !== id);
  };
</script>

<GlobalForm>
  <Select text="Producto" bind:value={selecionarProducto}>
    <option value="">Seleccione un producto</option>
    {#if !$data}
      <option value="">Cargando productos...</option>
    {:else}
      {#each $data as producto}
        <option value={producto.id}>{producto.nombre}</option>
      {/each}
    {/if}
  </Select>
  <Input text="Cantidad" type="text" bind:value={cantidad} />
  <FormButton on:click={handleProducto}>Agregar</FormButton>
  <div />
  <TableVenta>
    <thead>
      <tr>
        <th class="center">#</th>
        <th class="big">nombre</th>
        <th class="medium center">cantidad</th>
        <th class="medium center">precio</th>
        <th class="medium center">total</th>
        <th class="medium center">opciones</th>
      </tr>
    </thead>
    <tbody>
      {#each productos as product, i}
        <tr>
          <td class="center">{i + 1}</td>
          <td class="big">{product.producto.nombre}</td>
          <td class="medium center">{product.cantidad}</td>
          <td class="medium center">Bs.{product.producto.precio}</td>
          <td class="medium center"
            >Bs.{product.cantidad * product.producto.precio}</td
          >
          <td class="medium center">
            <div class="buttons">
              <SquareButton
                color="orange"
                on:click={() => handleDeleteProduc(product.producto.id)}
                ><IconDelete /></SquareButton
              >
            </div>
          </td>
        </tr>
      {/each}
    </tbody>
  </TableVenta>
  <FormButton on:click={handleSend}>Vender</FormButton>
  <p class="total">Total a cobrar: {total}</p>
</GlobalForm>

<style>
  .total {
    margin-top: 26px;
    font-size: 14px;
  }
</style>
