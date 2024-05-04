import userPosts from "@/hooks/usePosts";
import PostItem from "./PostItem";

interface PostFeedProps {
    userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {

    const { data: posts = [] } = userPosts(userId);


    return (
        <>
            {posts.map((post: Record<string, any>) => (
                <PostItem 
                    userId={userId}
                    key={post.id}
                    data={post}
                />
            ))}
        </>
    )
}

export default PostFeed;