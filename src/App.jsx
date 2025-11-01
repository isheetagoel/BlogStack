import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Home } from "./pages/home/Home"
import { YPost } from "./pages/ypost/ypost"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Create } from "./components/create/Create"
import { Card } from "./pages/category-page/CategoryPage"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/ypost' component={YPost} />
        <Route exact path='/details/:id' component={DetailsPages} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/category/:category' component={Card} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;