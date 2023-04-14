<script lang="ts">
  import { QueryClientProvider, QueryClient } from "@tanstack/svelte-query";
  const queryClient = new QueryClient();
</script>

<div style="width: 500px; maxwidth: 100%; margin: 0 auto; padding: 10px">
  <QueryClientProvider client={queryClient}>
    <slot />
  </QueryClientProvider>
</div>
