import React from 'react'
import Enrollment from './Enrollment'

describe('<Enrollment />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Enrollment />)
  })
})