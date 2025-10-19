'use client'
import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { styled } from 'styled-system/jsx'

const MotionGroup = styled(motion.div)

const groupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const Group = (props: PropsWithChildren) => (
  <MotionGroup
    variants={groupVariants}
    initial="hidden"
    animate="visible"
    display="flex"
    flexDirection="column"
    gap={{ base: '6', lg: '8' }}
    {...props}
  />
)

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut' as const,
    },
  },
}

export const Item = (props: PropsWithChildren) => <MotionGroup variants={itemVariants} {...props} />

const heroVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut' as const,
    },
  },
}

export const HeroGroup = (props: PropsWithChildren) => (
  <MotionGroup
    variants={heroVariants}
    initial="hidden"
    animate="visible"
    display="flex"
    flexDirection="column"
    gap={{ base: '8', md: '12' }}
    maxW={{ md: '3xl' }}
    {...props}
  />
)

export const HeroItem = (props: PropsWithChildren) => (
  <MotionGroup variants={heroItemVariants} {...props} />
)
