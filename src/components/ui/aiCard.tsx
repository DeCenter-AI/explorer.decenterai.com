import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AiCard({ detail }: { detail: any }) {
    // console.log(detail)
    return (
        <Link href={`/explorer/${detail ? detail?.currentSlug : ""}?category=${detail ? detail?.categories[0].title : ""}`}>
            <div className='  h-auto sm:h-[300px]  flex flex-col border  px-6 py-4 rounded-3xl gap-3 border-primary_11 '>
                <div className='h-[70%]'>
                    {/* @ts-ignore */}
                    <Image className='h-full w-full' alt={detail.title} priority width={200} height={200} src={urlFor(detail.mainImage).url()} />


                </div>
                <div className='flex gap-4 flex-col h-[30%]  items-start'>
                    <div className=' '>
                        <span className='text-xs text-primary_7 bg-primary_12 px-2 rounded-2xl py-1 text-center '>{detail?.categories[0].title}</span>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <div>
                            <span className='text-md font-medium'>{detail?.title}</span>
                        </div>

                        <Image src="/arrow_icon.png" alt='' className='pt-1' width={24} height={24} />


                    </div>
                </div>

            </div>
        </Link>
    )
}
