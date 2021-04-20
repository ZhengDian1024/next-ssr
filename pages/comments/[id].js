import Head from 'next/head'

export default function CommentDetail({ data = {} }) {
    console.log('props', data)
    const { title } = data
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <article>
                {title}
            </article>
            <article>
                {title}
            </article>
            <article>
                {title}
            </article>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    console.log('props', params.id)
    const res = await fetch(`http://localhost:3000/api/posts/detail?id=${params.id}`)
    const detail = await res.json()
    console.log('posts', detail)
    return {
        props: {
            data: detail
        }
    }
}