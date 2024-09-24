'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    description: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }).max(180, {
        message: 'Username must be at most 180 characters.',
    }),
    raffle_number_range: z.string().min(9, {
        message: 'Raffle number range must be at least 0.',
    }),
    status: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }).max(180, {
        message: 'Username must be at most 180 characters.',
    }),
})

const languages = [
    { label: 'Em Desenvolvimento', value: 'development' },
    { label: 'Em progresso', value: 'progress' },
    { label: 'Encerrado', value: 'finished' },
    { label: 'Cancelado', value: 'canceled' },
] as const

export function FormNewRaffle() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            description: '',
            raffle_number_range: '',
            status: ''
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values.raffle_number_range.split(''))

    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                    <FormItem className='p-0 m-0 space-y-1 '>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Descrição</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='raffle_number_range'
                render={({ field }) => (
                    <FormItem >
                        <FormLabel>Números De/Até</FormLabel>
                        <FormControl >
                            <InputOTP maxLength={9} {...field} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} >
                                <InputOTPGroup className='w-full'>
                                    <InputOTPSlot index={0} className='w-full'/>
                                    <InputOTPSlot index={1} className='w-full'/>
                                    <InputOTPSlot index={2} className='w-full'/>
                                    <InputOTPSlot index={3} className='w-full'/>
                                    <InputOTPSeparator/>
                                    <InputOTPSlot index={4} className='w-full'/>
                                    <InputOTPSlot index={5} className='w-full'/>
                                    <InputOTPSlot index={6} className='w-full'/>
                                    <InputOTPSlot index={7} className='w-full'/>
                                </InputOTPGroup>
                            </InputOTP>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='status'
                render={({ field }) => (
                    <FormItem className='flex flex-col'>
                        <FormLabel>Status</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant='outline'
                                        role='combobox'
                                        className={`w-full justify-between ${!field.value && 'text-muted-foreground'}`}>
                                        {field.value ? languages.find((language) => language.value === field.value)?.label : 'Selecione o status inicial'}
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className='w-full p-0'>
                                <Command>
                                    <CommandInput className='h-9' />
                                    <CommandList>
                                        <CommandEmpty>No framework found.</CommandEmpty>
                                        <CommandGroup>
                                            {languages.map((language) => (
                                                <CommandItem
                                                    value={language.label}
                                                    key={language.value}
                                                    onSelect={() => {
                                                        form.setValue('status', language.value)
                                                    }}>
                                                    {language.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button type='submit'>Submit</Button>
        </form>
    </Form >
}
