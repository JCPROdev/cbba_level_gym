<script>
  export let text;
  export let value;
</script>

<div>
  <label for={`select-${text}`}>{text}</label>
  <select id={`select-${text}`} bind:value>
    <slot  />
  </select>
</div>

<style>
div{
  display: flex;
  flex-wrap: wrap;
  width: 45%;
  border:solid 1px #000,
}
label{
  width: 30%;
}
  select{
    width: 100%;
    outline: none;
    background-color: var(--primary);
    border: none;
    padding: .5em;
    color:#fff;
  }
  input{
    width: 60%;
  }
</style>