import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Layout from '../components/Common/Layout'
import ScrollToTop from '../components/Common/ScrollTop'
import Comics from '../containers/Comics'
import DetailComic from '../containers/DetailComic'
import Home from '../containers/Home'

const Routes = () => {
  return (
    <HashRouter>
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/historietas" exact component={Comics} />
          <Route path="/historietas/:title" exact component={DetailComic} />
        </Switch>
      </Layout>
    </HashRouter>
  )
}

export default Routes
