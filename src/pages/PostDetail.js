import { useLoaderData } from "react-router-dom";
import FansGather from "./FansGather";
export default function PostDetail() {
    const data = useLoaderData()
  return (
    <div id='post-detail'>
      <h1 className='title'>{data.title}</h1>
      <p className='post-contnet'>{data.content}</p>
      <FansGather/>
    </div>
  );
}
