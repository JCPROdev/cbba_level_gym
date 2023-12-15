<script>
  import img from "../../../assets/perfil.png";
  import IconButton from "../../../components/IconButton.svelte";
  import IconAdd from "../../../icons/IconAdd.svelte";
  import IconSave from "../../../icons/IconSave.svelte";
  import IconSaveOrange from "../../../icons/IconSaveOrange.svelte";
  import IconSubtract from "../../../icons/IconSubtract.svelte";
  import { successAlert } from "../../../utilities/alerts";
  import { sendRequest } from "../../../utilities/sendRequest";
  export let data;

  let diasRestantes = data.diasRestantes;
  let fecha = data.fechaLimite;

  const handleChangeDias = (num) => {
    diasRestantes += num;
  };

  const handleChangeDate = (num) => {
    let fechaActual = new Date(fecha);
    fechaActual.setDate(fechaActual.getDate() + num);
    fecha = fechaActual.toISOString().split("T")[0];
  };

  const handleSaveDias = async () => {
    const res = await sendRequest(
      `inscripcion/${data.id}`,
      {
        diasRestantes,
        fechaLimite: fecha,
      },
      "PUT"
    );
    if (res) {
      successAlert(res.message);
    }
  };
</script>

<div class="perfil">
  <h3>{data.cliente.nombre}</h3>
  <b>Paquete {data.paquete.nombre}</b>
  <div class="info">
    <div class="data">
      <strong>Fecha inicio: </strong>
      <p>{data.fechaInicio}</p>
    </div>
    <div class="data">
      <strong>Fecha límite: </strong>
      <p>{fecha}</p>
    </div>
    <div class="buttons">
      <IconButton on:click={() => handleChangeDate(-1)} text="Disminuir">
        <IconSubtract />
      </IconButton>
      <IconButton on:click={() => handleChangeDate(1)} text="Aumentar">
        <IconAdd />
      </IconButton>
    </div>
    <div class="data">
      <strong>Días restantes: </strong>
      <p>{diasRestantes} días</p>
    </div>
    <div class="buttons">
      <IconButton on:click={() => handleChangeDias(-1)} text="Disminuir">
        <IconSubtract />
      </IconButton>
      <IconButton on:click={() => handleChangeDias(1)} text="Aumentar">
        <IconAdd />
      </IconButton>
    </div>
    <IconButton on:click={handleSaveDias} text="Guardar" color="orange">
      <IconSaveOrange />
    </IconButton>
  </div>
</div>

<style lang="scss">
  .perfil {
    width: 50%;
    height: 100%;
    min-width: 340px;
    display: flex;
    justify-content: center;
    gap: 24px;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid #0003;
    @media screen and (max-width: 1092px) {
      border-right: none;
    }
  }
  h3 {
    color: #65b32e;
    font-size: 2rem;
  }
  b {
    font-size: 1.5rem;
    opacity: 0.6;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    align-items: center;
    & > .data {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: center;
    }
  }
  strong {
    color: #65b32e;
  }
  .buttons {
    display: flex;
    gap: 24px;
  }
</style>
