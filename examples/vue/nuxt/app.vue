<script setup lang="ts">
import { Tabs, TabList, TabTrigger, TabIndicator, TabContent } from '@ark-ui/vue'
</script>

<template>
  <Tabs defaultValue="react">
    <TabList>
      <TabTrigger value="react"><button>React</button></TabTrigger>
      <TabTrigger value="solid"><button>Solid</button></TabTrigger>
      <TabTrigger value="vue"><button>Vue</button></TabTrigger>
      <TabIndicator />
    </TabList>
    <TabContent value="react">React</TabContent>
    <TabContent value="solid">Solid</TabContent>
    <TabContent value="vue">Vue</TabContent>
  </Tabs>
</template>
