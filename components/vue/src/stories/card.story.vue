<script setup lang="ts">
import { Card } from '~/components/ui/card'
</script>

<template>
  <Story title="Card">
    <Variant title="Basic">
      <Card.Root width="sm">
        <Card.Header>
          <Card.Title>Team Members</Card.Title>
          <Card.Description>Add new members to your organisation.</Card.Description>
        </Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card.Root>
    </Variant>
  </Story>
</template>
