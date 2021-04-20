import Head from 'next/head'
import Link from 'next/link'
import style from './PostList.module.css'

export default function List({ dataList }) {
    console.log('dataList', dataList)
    return (
        <main className={style.postList}>
            <Head>
                <title>文章列表</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ul>
                {dataList && dataList.length && dataList.map(item => {
                    const { id, title } = item
                    return (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/posts')
    const posts = await res.json()
    return {
        props: {
            dataList: posts
        }
    }
}
