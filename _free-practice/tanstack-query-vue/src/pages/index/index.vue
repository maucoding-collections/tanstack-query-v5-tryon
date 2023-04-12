<script setup>
//<script setup> will execute every time an instance of the component is created.
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'

// Access QueryClient instance
const queryClient = useQueryClient()

// sample useQuery
const { isLoading, isFetching, isError, data, error, ...fetchQuery } = useQuery({
  queryKey: [],
  queryFn: () => fetch('https://reqres.in/api/users').then((res) => res.json())
})

// sample useMutation
// const { isLoading, isFetching, isError, data, error, ...fetchMutation } = useMutation({
//   mutationKey: [],
//   mutationFn: () => fetch('https://reqres.in/api/users').then((res) => res.json())
// })

const fetchHandler = () => {
  console.log('clicked...')
  fetchQuery.refetch()
  // fetchMutation.mutate()
}
</script>

<template>
  <div style="padding: 10px; box-sizing: border-box">
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between">
        <strong>Sample Case: React-Query</strong>
        <button
          type="button"
          :disabled="isLoading"
          @click="fetchHandler"
          :class="`ui primary button ${isLoading && 'loading'}`"
        >
          Fetch Data
        </button>
      </div>
      <div class="ui divider"></div>
      <div v-if="isLoading || isFetching" class="ui grid">
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
</template>
