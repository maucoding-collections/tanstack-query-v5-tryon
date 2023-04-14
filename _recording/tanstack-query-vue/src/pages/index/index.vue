<script setup>
import { useQuery, useMutation } from '@tanstack/vue-query'

// const { isLoading, data, ...query } = useQuery({
//   queryKey: ['data'],
//   queryFn: () => fetch('https://reqres.in/api/users').then((res) => res.json())
// })

const { isLoading, data, ...mutation } = useMutation({
  mutationKey: ['data'],
  mutationFn: () => fetch('https://reqres.in/api/users').then((res) => res.json())
})

const fetchDataHandler = async () => {
  // query.refetch()
  // mutation.mutate()
  const response = await mutation.mutateAsync()
  console.log('response', response)
}
</script>

<template>
  <div style="width: 500px; maxwidth: 100%; margin: 0 auto; padding: 10px">
    <div style="padding: 10px; box-sizing: border-bo">
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between">
          <strong>Sample Case: Vue-Query</strong>
          <button
            @click="fetchDataHandler"
            type="button"
            :disabled="isLoading"
            :class="`ui primary button ${isLoading}`"
          >
            Fetch Data
          </button>
        </div>
        <div class="ui divider"></div>
        <div v-if="isLoading" class="ui grid">
          <div class="column">
            <div class="ui segment" style="padding: 50px 0">
              <div class="ui active inverted dimmer">
                <div class="ui text loader">Loading</div>
              </div>
              <p></p>
            </div>
          </div>
        </div>
        <div v-if="!isLoading && data?.data?.length > 0" class="ui two column grid">
          <div v-for="n in data.data" :key="n.id" class="column">
            <div class="ui fluid card">
              <div class="image">
                <img :src="n.avatar" />
              </div>
              <div class="content">
                <a class="header">{{ `${n.first_name} ${n.last_name}` }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
