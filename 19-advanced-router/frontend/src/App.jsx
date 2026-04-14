import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout.jsx';
import Home from './pages/Home.jsx';
import Events, { eventsLoader } from './pages/Events.jsx';
import EventDetail, { eventDetailLoader, actionDeleteEvent } from './pages/EventDetail.jsx';
import NewEvent from './pages/NewEvent.jsx';
import EditEvent from './pages/EditEvent.jsx';
import EventLayout from './pages/EventLayout.jsx';
import ErrorPage from './pages/Error.jsx';
import { actionForm } from './components/EventForm.jsx';
import NewsletterPage, { newsLetterAction } from './pages/Newsletter.jsx';

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: '/', element: <Home /> },
      {
        path: '/events',
        element: <EventLayout />,
        children: [
          {
            index: true,
            path: '',
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetail />, action: actionDeleteEvent },
              { path: 'edit', element: <EditEvent />, action: actionForm },
            ],
          },
          { path: 'new', element: <NewEvent />, action: actionForm },
        ],
      },
      { path: 'newsletter', element: <NewsletterPage />, action: newsLetterAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
