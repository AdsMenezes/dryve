import { Link } from 'react-router-dom'

import Unit from './Unit'
import Notification from './Notification'
import Setting from './Setting'
import User from './User'

import dryve from '../../static/logo.svg'

import { Container, Columns, Image } from './styles'

export default function Header() {
  return (
    <Container>
      <div className="container-fluid">
        <Columns>
          <div className="row g-2">
            <div className="col-auto">
              <Link to="/dashboard" title="Dryve">
                <Image src={dryve} />
              </Link>
            </div>
            <div className="col-auto">
              <Unit />
            </div>
          </div>

          <div className="row g-2">
            <div className="col-auto">
              <Notification />
            </div>
            <div className="col-auto">
              <Setting />
            </div>
            <div className="col-auto ms-2">
              <User />
            </div>
          </div>
        </Columns>
      </div>
    </Container>
  )
}
