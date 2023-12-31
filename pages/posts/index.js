import Head from 'next/head';
import AllPosts from '../../components/ui/All-Posts-page/AllPosts';
import { getAllPosts } from '../../helpers/posts-util';

export default function AllPostsPage(props) {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="A list of all programming-related tutorials and posts!" />
            </Head>
            <AllPosts posts={props.posts} />
        </>
    )
}

export function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    };
}