<script setup lang="ts">
import { Card } from '~/components/ui'
</script>

<template>
  <Story title="Card">
    <Variant title="Basic">
      <Card.Root maxW="sm">
        <Card.Header>
          <Card.Title>Team Members</Card.Title>
          <Card.Description>Add new members to your organisation.</Card.Description>
        </Card.Header>
        <Card.Body>
        
        </Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card.Root>
    </Variant>
  </Story>
</template>
