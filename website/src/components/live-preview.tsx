'use client'
import { ExternalLinkIcon, InfoIcon, OctagonAlertIcon } from 'lucide-react'
import { Runner } from 'react-runner'
import { Box, Flex, HStack, Stack } from 'styled-system/jsx'
import { Alert } from '~/components/ui/alert'
import { Avatar } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import { Code } from '~/components/ui/code'
import { Field } from '~/components/ui/field'
import { Fieldset } from '~/components/ui/fieldset'
import { Heading } from '~/components/ui/heading'
import { Icon } from '~/components/ui/icon'
import { Input } from '~/components/ui/input'
import { Link } from '~/components/ui/link'
import { Skeleton } from '~/components/ui/skeleton'
import { Slider } from '~/components/ui/slider'
import { Spinner } from '~/components/ui/spinner'
import { Switch } from '~/components/ui/switch'
import { Text } from '~/components/ui/text'
import { Textarea } from '~/components/ui/textarea'

const icons = { InfoIcon, ExternalLinkIcon, OctagonAlertIcon }
const scope = {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Code,
  Flex,
  Field,
  Fieldset,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Skeleton,
  Slider,
  Spinner,
  Stack,
  Switch,
  Text,
  Textarea,
  ...icons,
}

type Props = {
  code: string
}

export const LivePreview = (props: Props) => {
  const { code } = props
  return <Runner code={code} scope={scope} />
}
