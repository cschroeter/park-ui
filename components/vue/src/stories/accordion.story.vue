<script setup lang="ts">
import { Accordion } from '../components/ui/primitives'
</script>

<template>
  <Story title="Accordion">
    <Variant title="Basic">
      <Accordion.Root mt="10">
        <Accordion.Item value="react">
          <Accordion.ItemTrigger>What is React?
            <Accordion.ItemIndicator>
              +
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent >
           React is a JS Framework
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item value="solid">
          <Accordion.ItemTrigger>What is Solid?</Accordion.ItemTrigger>
          <Accordion.ItemContent>
           Solid is a JS Framework
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </Variant>
  </Story>
</template>
