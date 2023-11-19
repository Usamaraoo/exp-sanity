import { createClient, groq } from "next-sanity";

export async function getProducts() {
    const client = createClient({
        projectId: "3mjl50nv",
        dataset: "production",
        apiVersion: '2023-03-04',

    })
    return client.fetch( groq`*[_type == "products"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        description
      }`)
}

export async function getProductDetail(slug) {
    const client = createClient({
        projectId: "3mjl50nv",
        dataset: "production",
        apiVersion: '2023-03-04',

    })
    return client.fetch(
      groq`*[_type == "products" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        description
      }`,
      { slug }
    )
  }