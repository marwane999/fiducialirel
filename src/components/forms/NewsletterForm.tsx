'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { subscribeNewsletter } from '@/services/api'

const newsletterSchema = z.object({
  email: z.string().email('Email invalide'),
})

type NewsletterFormValues = z.infer<typeof newsletterSchema>

export default function NewsletterForm() {
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit = async (data: NewsletterFormValues) => {
    setSubmitting(true)
    try {
      await subscribeNewsletter({ email: data.email })
      toast({ title: 'Inscrit !', description: 'Vous recevrez nos actualités.', variant: 'success' })
      reset()
    } catch {
      toast({ title: 'Erreur', description: 'Email déjà inscrit ou invalide.', variant: 'error' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <p className="text-sm text-gray-300">Recevez nos conseils et actualit&eacute;s</p>
      <div className="flex gap-2">
        <Input
          {...register('email')}
          type="email"
          placeholder="Votre email"
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        />
        <button
          type="submit"
          disabled={submitting}
          className="shrink-0 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-white hover:bg-secondary-light transition-colors disabled:opacity-50"
        >
          {submitting ? '...' : "S'abonner"}
        </button>
      </div>
      {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
      <p className="text-xs text-gray-400">Promis, pas de spam. D&eacute;sabonnement en 1 clic.</p>
    </form>
  )
}
