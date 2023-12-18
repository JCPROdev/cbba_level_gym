<form action="">
  <slot />
</form>

<style lang="scss">
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    row-gap: 12px;
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
  }
</style>