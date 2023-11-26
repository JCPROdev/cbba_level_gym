<script>
// @ts-nocheck
  export let text;
  export let value;
  export let type = "text";

  const typeWorkaround = node => node.type = type
</script>
 
<div>
  <label for={`txt-${text}`}>{text}</label>
  <input 
    id={`txt-${text}`} 
    bind:value
    use:typeWorkaround
  >
</div>
