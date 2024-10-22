import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { UsersPage } from "./pages/users";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainLayout } from "./MLayout/Main.Layout";
import { ErrorBoundary } from "./components/errorBoundary";
import { NotFound } from "./pages/notFound";
import { SingleUser } from "./pages/singleUser";
import { PostsPage } from "./pages/posts";
import { SinglePost } from "./pages/singlePost";
import { Comments } from "./components/Comments";
import IndexPage from "./components/Home";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route element={<MainLayout />}>
        <Route
          index={true}
          element={<IndexPage />}
        />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:postId" element={<SinglePost />} />
        <Route path="posts/:postId/comments" element={<Comments />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:userId" element={<SingleUser  />}>
        <Route path="404" element={<NotFound />} />
      </Route>
    </Route>
    </Route>
  )
);
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
