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

const devisSchema = z.object({
  nom: z.string().min(2, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  telephone: z.string().min(8, 'Téléphone invalide'),
  service: z.string().min(1, 'Service requis'),
  message: z.string().optional(),
})

type DevisFormValues = z.infer<typeof devisSchema>

const services = [
  'Création d\'entreprise',
  'Domiciliation',
  'Comptabilité',
  'Pack complet',
  'Formation',
]

export default function DevisForm() {
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<DevisFormValues>({
    resolver: zodResolver(devisSchema),
  })

  const onSubmit = async (data: DevisFormValues) => {
    setSubmitting(true)
    try {
      await submitContact({
        nom: data.nom,
        email: data.email,
        telephone: data.telephone,
        sujet: `Devis - ${data.service}`,
        message: data.message || `Demande de devis pour ${data.service}`,
      })
      toast({ title: 'Devis demandé !', description: 'Nous vous contacterons sous 24h.', variant: 'success' })
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
        <label htmlFor="devis-nom" className="block text-sm font-medium text-primary mb-1">Nom & Prénom *</label>
        <Input id="devis-nom" {...register('nom')} placeholder="Votre nom complet" />
        {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>}
      </div>

      <div>
        <label htmlFor="devis-email" className="block text-sm font-medium text-primary mb-1">Email *</label>
        <Input id="devis-email" type="email" {...register('email')} placeholder="votre@email.com" />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="devis-telephone" className="block text-sm font-medium text-primary mb-1">Téléphone *</label>
        <Input id="devis-telephone" {...register('telephone')} placeholder="+212 6 XX XX XX XX" />
        {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone.message}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-primary mb-1">Service souhaité *</label>
        <Select onValueChange={(v) => setValue('service', v)}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez un service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="devis-message" className="block text-sm font-medium text-primary mb-1">Message (optionnel)</label>
        <textarea
          id="devis-message"
          {...register('message')}
          rows={3}
          className="flex w-full rounded-lg border border-border bg-white px-4 py-3 text-base ring-offset-background placeholder:text-muted-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          placeholder="Précisions sur votre projet..."
        />
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={submitting}>
        {submitting ? 'Envoi en cours...' : 'Obtenir mon devis gratuit'}
      </Button>
    </form>
  )
}
