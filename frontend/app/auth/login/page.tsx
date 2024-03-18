'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
  const form = useForm()

  return (
    <Card className='w-[400px]'>
      <CardHeader>
        <CardTitle>
          ¡Bienvenido!
        </CardTitle>
        <CardDescription>
          Inicie sesión con su cuenta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Electronico</FormLabel>
                <FormControl>
                  <Input placeholder='example@mail.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>

            )}>
          </FormField>
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}>
          </FormField>
        </Form>
      </CardContent>
      <CardFooter className='flex items-end justify-end'>
        <Button>
          Continuar
        </Button>
      </CardFooter>
    </Card>
  )
}

export default LoginPage
