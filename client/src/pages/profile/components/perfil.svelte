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
  const handleChangeDias = (num) => {
    diasRestantes += num;
  }
  const handleSave = async () => {
    const res = await sendRequest(`inscripcion/${data.id}`, {
      diasRestantes
    }, "PUT");
    if(res) {
      successAlert(res.message);
    }
  }
</script>

<div class="perfil">
  <h3>{data.cliente.nombre}</h3> 
  <b>Paquete {data.paquete.nombre}</b>
  <div class="info">
    <div>
      <strong>Fecha inicio: </strong>
      <p>{data.fechaInicio}</p>
    </div>
    <div>
      <strong>Fecha límite: </strong>
      <p>{data.fechaLimite}</p>
    </div>
    <div>
      <strong>Días restantes: </strong>
      <p>{diasRestantes} días</p>
    </div>
  </div>
  <div class="buttons">
    <IconButton handleClick={() => handleChangeDias(-1)} text="Disminuir">
      <IconSubtract />
    </IconButton>
    <IconButton handleClick={() => handleChangeDias(1)} text="Aumentar">
      <IconAdd />
    </IconButton>
    <IconButton 
      handleClick={handleSave} 
      text="Guardar"
      color="orange"
    >
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
    & > div {
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
