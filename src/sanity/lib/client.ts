// src/sanity/lib/client.ts

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  // Adicione o token apenas se precisar fazer buscas autenticadas.
  // Para um blog público, geralmente não é necessário.
  // token: process.env.SANITY_API_READ_TOKEN, 
  
})
