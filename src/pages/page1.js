import React from "react"
import Helmet from 'react-helmet'

export default () => (
  <div>
    <Helmet>
      <script>{`window.___pathname = '/page1'`}</script>
    </Helmet>
    <div>Page 1!</div>
  </div>
)
