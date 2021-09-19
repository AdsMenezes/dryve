import { Switch, Route, Redirect } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Contacts from '../pages/Contacts'
import ContactsEdit from '../pages/Contacts/Edit'

export default function Routes() {
  return (
    <Switch>
      <Redirect path="/" to="/dashboard" exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/contacts" component={Contacts} exact />
      <Route path="/contacts/:id" component={ContactsEdit} />
    </Switch>
  )
}
