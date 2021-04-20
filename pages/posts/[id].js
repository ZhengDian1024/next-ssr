import Head from 'next/head'

export default function PostDetail({ data = {} }) {
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

// 此函数在构建时被调用
export async function getStaticPaths() {
    // 调用外部 API 获取列表
    const res = await fetch('http://localhost:3000/api/posts')
    const posts = await res.json()

    // 根据列表生成所有需要预渲染的路径
    const paths = posts.map(post => `/posts/${post.id}`)

    // { fallback: false } means other routes should 404.
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
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