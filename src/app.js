import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootHome from './components/RootHome';
import Post from './pages/Posts';
import PostDetail from './pages/PostDetail';
import { Provider } from 'react-redux';
import store from './store/store';
import NewPost from './pages/NewPost';
import { loader as postListLoader} from './pages/PostList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootHome />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: 'posts',
        element: <Post />,
        loader:postListLoader
      },
      {
        path: 'posts/:postId',
        element: <PostDetail />,
        loader:postListLoader
      },
      {
        path: 'posts/new',
        element: <NewPost />,
      },
    ],
  },
]);
export default function App() {
  return <Provider store={store}><RouterProvider router={router}/></Provider>;
}
