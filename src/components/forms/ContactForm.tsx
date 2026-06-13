'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { toast } from '@/components/ui/use-toast'
import { submitContact } from '@/services/api'
import type { ContactFormData } from '@/types'

const contactSchema = z.object({
  nom: z.string().min(2, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  telephone: z.string().min(8, 'Téléphone invalide'),
  sujet: z.string().min(1, 'Sujet requis'),
  message: z.string().min(10, 'Message trop court (min 10 caractères)'),
})

type ContactFormValues = z.infer<typeof contactSchema>

const sujets = [
  'Création de société',
  'Domiciliation d\'entreprise',
  'Comptabilité et juridique',
  'Location salle',
  'Formation',
  'Demande d\'information',
]

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true)
    try {
      await submitContact(data as ContactFormData)
      toast({ title: 'Message envoyé !', description: 'Nous vous répondrons sous 24h.', variant: 'success' })
      reset()
    } catch {
      toast({ title: 'Erreur', description: 'Une erreur est survenue. Réessayez.', variant: 'error' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="nom" className="block text-sm font-medium text-primary mb-1">Nom & Prénom *</label>
        <Input id="nom" {...register('nom')} placeholder="Votre nom complet" />
        {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">Email *</label>
        <Input id="email" type="email" {...register('email')} placeholder="votre@email.com" />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="telephone" className="block text-sm font-medium text-primary mb-1">Téléphone *</label>
        <Input id="telephone" {...register('telephone')} placeholder="+212 6 XX XX XX XX" />
        {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone.message}</p>}
      </div>

      <div>
        <label htmlFor="sujet" className="block text-sm font-medium text-primary mb-1">Sujet *</label>
        <Select onValueChange={(v) => setValue('sujet', v)}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez un sujet" />
          </SelectTrigger>
          <SelectContent>
            {sujets.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.sujet && <p className="text-red-500 text-sm mt-1">{errors.sujet.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">Message *</label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className="flex w-full rounded-lg border border-border bg-white px-4 py-3 text-base ring-offset-background placeholder:text-muted-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          placeholder="Décrivez votre projet..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={submitting}>
        {submitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>
    </form>
  )
}
