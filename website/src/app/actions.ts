'use server'

import { signIn } from '~/lib/auth'

export const signInWithEmail = async (formData: FormData) =>
  await signIn('postmark', {
    email: formData.get('email'),
    redirectTo: formData.get('redierctTo')?.toString() ?? '/',
  })

export const signIngWithGithub = async (formData: FormData) =>
  signIn('github', { redirectTo: formData.get('redirectTo')?.toString() ?? '/' })

export const signInWithGoogle = async (formData: FormData) =>
  signIn('google', { redirectTo: formData.get('redirectTo')?.toString() ?? '/' })
