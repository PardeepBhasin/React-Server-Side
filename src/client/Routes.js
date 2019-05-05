import React from 'react';
//import {Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';
import App from './App';

//Reason for commenting the below code is to fetch the data in SSR
//In Server side lifecycle method componentDidMount does't work.
//So instead of using Route from reacr-router-dom.
// will use react-router-config from react router.

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={UsersList} />
//     </div>
//   );
// };

//New Implmentation
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users',
      }
    ]
  }
]
