import { useRouter } from "next/router";

const Post = () => {
    const router =  useRouter();

    const { sno } = router.query;

    return (
        <>
        <div>
            <p>Post: {sno}</p>
        </div>
        </>
    )
}

export default Post;
