import { FiCheckCircle } from 'react-icons/fi'
import { Box, Flex, Grid, HStack, Stack, styled } from 'styled-system/jsx'
import { stack } from 'styled-system/patterns/stack'
import { Button } from '~/components/ui/button'
import { Heading, Typography } from '~/components/ui/typography'
import { plans } from './data'

export const PricingSection = () => {
  return (
    <Grid gap="8" columns={{ base: 1, md: 2, lg: 3 }}>
      {plans.map((plan) => (
        <Flex
          key={plan.name}
          bg="bg.default"
          borderWidth="1px"
          borderRadius="l3"
          p={{ base: '6', md: '8' }}
        >
          <Stack gap="10" width="full">
            <Stack gap="8" flex="1">
              <Stack gap="4">
                <Stack gap="1">
                  <Heading as="h3" textStyle={{ base: 'md', md: 'xl' }}>
                    {plan.name}
                  </Heading>
                  <Typography color="fg.muted">{plan.description}</Typography>
                </Stack>
                <Typography textStyle="5xl" fontWeight="bold">
                  {plan.price}
                  <Typography as="span" textStyle="xl">
                    /month
                  </Typography>
                </Typography>
              </Stack>
              <styled.ul className={stack({ gap: '4' })}>
                {plan.features.map((feature) => (
                  <styled.li key={feature} color="fg.muted">
                    <HStack gap="4">
                      <Box fontSize="xl" color="accent.default">
                        <FiCheckCircle />
                      </Box>
                      <Typography>{feature}</Typography>
                    </HStack>
                  </styled.li>
                ))}
              </styled.ul>
            </Stack>
            <Button size="xl">Buy Now</Button>
          </Stack>
        </Flex>
      ))}
    </Grid>
  )
}
