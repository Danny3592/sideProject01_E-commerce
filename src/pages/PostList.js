import { Link, useLoaderData } from 'react-router-dom';

export default function PostList() {
  const data = useLoaderData(); // 獲取 loader 加載的資料
  console.log(data)

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id} className="post-list-item">
            <Link to={post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// loader 函數，從伺服器獲取資料
export async function loader({ params }) {
  let url = 'http://localhost:3030/posts'
  const { postId } = params; // 取得路徑中的 postId
  if(postId){
    url  = `http://localhost:3030/posts/${postId}`
  }

  
  
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch post data');
  }

  const data = await res.json();
  return data;
}
