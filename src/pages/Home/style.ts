import CSS from 'csstype'

export const container: CSS.Properties = { 
  display: 'flex',
  width: '100%',
  height: '80px',
  backgroundColor: '#DCDCDC',
  alignItems: 'center',
}

export const navBar: CSS.Properties = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '5%',
  paddingRight: '5%',
}

export const navLink: CSS.Properties = {
  textDecoration: 'none',
  display: 'flex',
  width: '80px',
  justifyContent: 'flex-start',
}

export const loginButton: CSS.Properties = {
  display: 'flex',
}

export const loginButtonStyle: CSS.Properties = {
  color: '#9ED8DB',
  padding: '15px 32px',
  textAlign: 'center',
  borderRadius: '50px',
  borderWidth: '3px',
}
