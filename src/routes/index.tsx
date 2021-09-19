import { Switch, Route, Redirect } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'

export default function Routes() {
  return (
    <Switch>
      <Redirect path="/" to="/dashboard" exact />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  )
}
