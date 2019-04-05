import React from 'react'

import { storiesOf } from '@storybook/react'

export default storiesOf('test', module)
  .add('default', () => <div>hi</div>)


interface Interface {
  test1: string, // remove comma to make it fail
  test2: string
}

