import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { GptIcon, HuggingFaceIcon } from '@/icons/chatbots'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <section className='w-full p-8'>
      <div className='flex justify-between items-center'>
      <h1 className="pb-4 pt-8 text-xl font-semibold">Pipelines</h1>
        <Link href='/dashboard/workflow'
        className={cn(buttonVariants({variant: 'default', size:'icon'}), 'w-8 h-8')}
        >
        <Plus className='w-5 h-5'/>
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <Card>
          <CardContent className="py-4">
            <GptIcon className="my-1" />
            <div className="justify-between flex items-center">
              <div>
                <h1>My First Pipeline</h1>
                <p className="text-sm text-muted-foreground">
                  This is a example of Chatbot Pipeline
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-xs">
                </span>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <div className="flex gap-2 items-center">
            <GptIcon className="my-1" />
            <HuggingFaceIcon className="my-1" />
            </div>
            <div className="justify-between flex items-center">
              <div>
                <h1>My First Pipeline</h1>
                <p className="text-sm text-muted-foreground">
                  This is a example of Chatbot Pipeline
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-xs">
                </span>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default page