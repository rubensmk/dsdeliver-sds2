import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import Orders from './Orders';
import Navbar from './Navbar';

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;