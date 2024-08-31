import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AlumniList from './components/Alumni/AlumniList';
import AlumniForm from './components/Alumni/AlumniForm';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Switch>
          <Route exact path="/alumni" component={AlumniList} />
          <Route path="/alumni/add" component={() => <AlumniForm isEdit={false} />} />
          <Route path="/alumni/edit/:id" component={() => <AlumniForm isEdit={true} />} />
          {/* Define routes for Donations, Events, Feedback, Jobs, and Networking */}
         
        </Switch>
      </div>
    </Router>
  );
};

export default App;
