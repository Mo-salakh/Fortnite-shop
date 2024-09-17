import { Post } from "./Post";

function Posts(props) {
  const { posts = [], toCartFunc } = props;

  return (
    <div className="posts_list">
      {posts.map((post, index) => {
        return <Post key={index} data={post} func={toCartFunc} />
      })}
    </div>
  )
}

export { Posts };
