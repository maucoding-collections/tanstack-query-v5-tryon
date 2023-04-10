<script>
  import { createQuery, createMutation } from "@tanstack/svelte-query";

  // $: query = createQuery({
  //   queryKey: [],
  //   queryFn: async () =>
  //     await fetch("https://reqres.in/api/users").then((r) => r.json()),
  // });

  $: mutation = createMutation({
    mutationKey: [],
    mutationFn: async () =>
      await fetch("https://reqres.in/api/users").then((r) => r.json()),
  });

  const clickHandler = () => {
    // $query.refetch()
    $mutation.mutate();
  };
</script>

<div style="padding: 10px; box-sizing: border-bo">
  <div>
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <strong>Sample Case: React-Query</strong>
      <button
        type="button"
        on:click={() => {
          clickHandler();
        }}
        disabled={$mutation.isLoading}
        class="ui primary button ${$mutation.isLoading && 'loading'}"
        >Fetch Data</button
      >
    </div>
    <div class="ui divider" />

    {#if $mutation.isLoading}
      <div class="ui grid">
        <div class="column">
          <div class="ui segment" style="padding: 50px 0">
            <div class="ui active inverted dimmer">
              <div class="ui text loader">Loading</div>
            </div>
            <p />
          </div>
        </div>
      </div>
    {/if}

    {#if !$mutation.isLoading && $mutation?.data?.data.length > 0}
      <div class="ui two column grid">
        {#each $query.data.data as value}
          <div class="column">
            <div class="ui fluid card">
              <div class="image">
                <img src={value.avatar} />
              </div>
              <div class="content">
                <a class="header">{value.first_name}</a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
