import { useState } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from './AuthContext'

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null)
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
}