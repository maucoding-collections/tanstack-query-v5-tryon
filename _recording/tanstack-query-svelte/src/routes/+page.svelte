<script>
  import { createMutation, createQuery } from "@tanstack/svelte-query";

  $: query = createQuery({
    queryKey: ["data"],
    queryFn: async () =>
      await fetch("https://reqres.in/api/users").then((r) => r.json()),
  });

  $: mutation = createMutation({
    mutationKey: ["data"],
    mutationFn: async () =>
      await fetch("https://reqres.in/api/users").then((r) => r.json()),
  });

  const clickHandler = async () => {
    // $query.refetch();
    // $mutation.mutate();
    const response = await $mutation.mutateAsync();
    console.log("response", response);
  };
</script>

<div style="padding: 10px; box-sizing: border-box">
  <div>
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <strong>Sample Case: Svelte-Query</strong>
      <button
        type="button"
        disabled={$mutation.isLoading}
        class="ui primary button ${$mutation.isLoading ? 'loading' : ''}"
        on:click={clickHandler}>Fetch Data</button
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
      </div>{/if}

    {#if !$mutation.isLoading && $mutation?.data?.data?.length > 0}
      <div class="ui two column grid">
        {#each $mutation.data.data as n}
          <div class="column">
            <div class="ui fluid card">
              <div class="image">
                <img src={n.avatar} />
              </div>
              <div class="content">
                <a class="header">{`${n.first_name} ${n.last_name}`}</a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
