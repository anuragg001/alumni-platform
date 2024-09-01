import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NetworkingList from './components/Networking/NetworkingList';
import NetworkingForm from './components/Networking/NetworkingForm';
import FeedbackForm from './components/Feedback/FeedbackForm';
// other necessary imports...

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Dashboard Route */}
          <Route path="/" exact component={Dashboard} />

          {/* Networking List Route */}
          <Route path="/networking" exact component={NetworkingList} />

          {/* Add New Networking Connection Route */}
          <Route path="/networking/new" component={() => <NetworkingForm isEdit={false} />} />

          {/* Edit Existing Networking Connection Route */}
          <Route path="/networking/edit/:id" component={() => <NetworkingForm isEdit={true} />} />

          {/* Feedback Form Route */}
          <Route path="/feedback" component={FeedbackForm} />

          {/* Additional routes can go here... */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
