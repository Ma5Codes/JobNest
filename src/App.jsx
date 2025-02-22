import './index.css';
import './App.css';
import { ThemeProvider } from "@/components/theme-provider";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/appLayout'; // Correct import
import  LandingPage  from './pages/landing';
import  Onboarding  from './pages/onboarding';
import JobListing from './pages/job-listing';
import SavedJobs from './pages/saved-job';
import PostJob from './pages/post-job';
import JobPage from './pages/job';
import MyJobs from './pages/my-jobs';

const router = createBrowserRouter([
  {
    element: <AppLayout />, // Correct usage
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/job/:id",
        element: <JobPage />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/saved-job",
        element: <SavedJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      }
    ]
  }
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
 
}

export default App;