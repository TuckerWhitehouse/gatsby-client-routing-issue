import React from "react"
import Helmet from 'react-helmet'

export default () => (
  <div>
    <Helmet>
      <script>{`window.___pathname = '/page2'`}</script>
    </Helmet>
    <div>Page 2!</div>
  </div>
)
