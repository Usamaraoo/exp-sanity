import { getProductDetail } from "@/sanity/sanity-utils"
import Image from "next/image"

export default async function ({ params }) {
    const slug = params.product
    const productDetail = await getProductDetail(slug)
    return (<div className="text-center px-44">
        <h3 className="text-3xl my-4 font-semibold tracking-widest">{productDetail.name}</h3>
        <Image className=" my-10 mx-auto" src={productDetail.image} width={500} height={500} style={{ maxHeight: 500, objectFit: 'cover' }} />
        <p>{productDetail.description}</p>

    </div>)
}
