import { getProducts } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const products = await getProducts()
  return (
    <main className=" min-h-screen flex-col items-center justify-between p-24">
      <div><h1 className='text-2xl text-center mb-4 '>Products</h1></div>
      <div className='flex  justify-center gap-6'>
        {products && products.map((item) => {
          const { _id, name, description, slug, image } = item
          return (
            <div key={_id} className='bg-slate-900 rounded-md overflow-hidden pb-3'>
              <Image
                src={image}
                width={300}
                height={200}
                style={{maxHeight:200,objectFit:'cover'}}
              />
              <div className='mx-3'>

              <p className='text-lg py-4'>{name}</p>
              <Link href={`products/${slug}`} className='block text-center tracking-widest bg-slate-800 w-full py-2 rounded-md'> View</Link>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
