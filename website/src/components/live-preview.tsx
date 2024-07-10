'use client'
import { ExternalLinkIcon, InfoIcon } from 'lucide-react'
import { Runner } from 'react-runner'
import { Box, Flex, HStack, Stack } from 'styled-system/jsx'
import { Alert, Avatar, Button, Checkbox, Code, Heading, Link } from '~/components/ui'
import { Skeleton } from '~/components/ui/skeleton'
import { Slider } from '~/components/ui/slider'
import { Text } from '~/components/ui/text'

const icons = { InfoIcon, ExternalLinkIcon }
const scope = {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Code,
  Flex,
  Heading,
  HStack,
  Link,
  Skeleton,
  Slider,
  Stack,
  Text,
  ...icons,
}

type Props = {
  code: string
}

export const LivePreview = (props: Props) => {
  const { code } = props
  return <Runner code={code} scope={scope} />
}
