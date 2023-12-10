<script>
  // @ts-nocheck
  export let text;
  export let value;
  export let type = "text";

  const typeWorkaround = (node) => (node.type = type);
</script>

<div>
  <label for={`txt-${text}`}>{text}:</label>
  <input id={`txt-${text}`} bind:value use:typeWorkaround />
</div>

<style>
  div {
    display: flex;
    gap:2em;
    width: 45%;
  }
  label {
    width: 30%;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
  
  }
  input {
    width: 70%;
    outline: none;
    border: solid 1px var(--primary);
    border-radius: 14px;
    box-shadow: 0 0px 5px #0005;

  }
</style>
