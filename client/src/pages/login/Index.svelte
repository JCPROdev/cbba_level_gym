<script>
  import Logo from '../../assets/logo.png'
  import BG from '../../assets/login.png'
  import Button from '../../components/Button.svelte';
    import { navigate } from 'svelte-routing';

  const login = (e) => {
    e.preventDefault();
    navigate('/dashboard/clientes');
  }
</script>

<div class="container">
  <img class="bg" src={BG} alt="background">
  <img class="logo" src={Logo} alt="logo" />
  <form>
    <p>Iniciar sesión</p>
    <div class="inputs">
      <input placeholder="Email" />
      <input placeholder="Contraseña" />
    </div>
    <Button onClick={login}>Ingresar</Button>
  </form>
</div>

<style>
  .container {
    width: 100vw;
    height: 100dvh;
    isolation: isolate;
  }
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .logo {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  form {
    position: absolute;
    right: 180px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    padding: 75px;
    border-radius: 12px;
    gap: 56px;
    box-shadow: var(--shadow); 
    background-color: var(--whiteopacity);
    backdrop-filter: blur(10px);
  }
  p {
    color: var(--white);
    font-size: 40px;
    font-weight: 700;
    text-align: center;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  input {
    border: 3px solid var(--green);
    background-color: transparent;
    border-radius: 12px;
    padding: 12px 20px;
    outline: none;
    font-weight: 700;
    color: var(--white);
    font-size: 16px;
  }
</style>