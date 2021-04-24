import Artists from "./artists";

const {HashRouter, Route} = window.ReactRouterDOM;

const App = () => {
    return (
        <div>
            <HashRouter>
                <Route path="/" exact={true}>
                    <Artists/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
