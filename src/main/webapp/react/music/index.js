import AlbumList from "./albums/album-list";
import TrackList from "./tracks/track-list";
import AlbumEditorForm from "./albums/album-editor-form";
import TrackEditorForm from "./tracks/track-editor-form";
import ArtistList from "./artists/artist-list";
import ArtistFormEditor from "./artists/artist-form-editor";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/albums", "/"]} exact={true}>
                    <AlbumList/>
                </Route>
                <Route path="/albums/:id" exact={true}>
                    <AlbumEditorForm/>
                </Route>
                <Route path="/albums/:albumId/tracks" exact={true}>
                    <TrackList/>
                </Route>
                <Route path="/tracks/:trackId" exact={true}>
                    <TrackEditorForm/>
                </Route>
                <Route path={["/artists", "/"]} exact={true}>
                    <ArtistList/>
                </Route>
                <Route path="/artists/:id" exact={true}>
                    <ArtistFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
