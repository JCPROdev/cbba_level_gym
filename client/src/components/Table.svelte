<div class="container">
  <table>
    <slot />
  </table>
</div>

<style lang="scss">
  .container {
    width: 100%;
    height: 60vh;
    overflow: auto;
    font-size: 14px;
    table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      & :global(> thead th:first-child) {
        width: 80px;
      }
      & :global(> thead th.small) {
        width: 80px;
      }
      & :global(> thead th.medium) {
        width: 120px;
      }
      & :global(> thead th.extra) {
        width: 0;
      }
      & :global(> thead th.big) {
        width: 160px;
      }
      & :global(.center) {
        text-align: center;
      }
      & :global(th) {
        font-weight: 500;
        padding: 8px;
        border-bottom: 1px solid var(--grayopacity);
        color: var(--gray);
        text-align: start;
        &::first-letter {
          text-transform: uppercase;
        }
      }
      & :global(td) {
        padding: 12px 8px;
      }
      & :global(td button) {
        border: none;
        background-color: transparent;
      }
      & :global(img) {
        margin: 0 0.5em;
      }
      & :global(p) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>