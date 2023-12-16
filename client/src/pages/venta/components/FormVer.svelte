<script>
    import AgregarButton from "../../../components/AgregarButton.svelte";
    import Head from "../../../components/Head.svelte";
    import Loader from "../../../components/Loader.svelte";
    import ModalVenta from "../../../components/ModalVenta.svelte";
    import SearchButton from "../../../components/SearchButton.svelte";
    import SquareButton from "../../../components/SquareButton.svelte";
    import Table from "../../../components/Table.svelte";
    import TableVenta from "../../../components/TableVenta.svelte";
    import { useGet } from "../../../hooks/useGet";
    export let idVenta;
    export let closeModal;
  
    const { data } = useGet(`venta/${idVenta}`);
  </script>
  
  <Head title="Venta" />
  <div class="Content">
    <TableVenta>
      <thead>
        <tr>
          <th class="center">#</th>
          <th class="big">nombre</th>
          <th class="medium center">cantidad</th>
          <th class="medium center">precio</th>
          <th class="medium center">total</th>
        </tr>
      </thead>
      <tbody>
        {#if $data}
          {#each $data.DetalleVenta as detalle ,i}
            <tr>
              <td class="center">{i+1}</td>
              <td class="big">{detalle.producto.nombre}</td>
              <td class="medium center">{detalle.cantidad}</td>
              <td class="medium center">Bs. {detalle.precioVendido}</td>
              <td class="medium center">Bs. {detalle.total}</td>
            </tr>
          {/each}
        {:else}
          <tr>
            <td colspan="5" class="center">...Cargando</td>
          </tr>
        {/if}
      </tbody>
    </TableVenta>
  </div>
  