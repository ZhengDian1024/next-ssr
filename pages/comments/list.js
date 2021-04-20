import Head from 'next/head'
import Link from 'next/link'

export default function CommentList({ dataList }) {
    console.log('dataList', dataList)
    return (
        <main>
            <Head>
                <title>评论列表</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2>
                评论列表
            </h2>
            <ul>
                {dataList && dataList.length && dataList.map(item => {
                    const { id, title } = item
                    return (
                        <li key={id}>
                            <Link href={`/comments/${id}`}>
                                <a>{title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/posts')
    const posts = await res.json()
    return {
        props: {
            dataList: posts
        }
    }
}
