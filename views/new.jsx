var React = require("react");
var DefaultLayout = require('./layouts/default');
class New extends React.Component {
  render() {
    return (
        <DefaultLayout>
        <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
<form className="mt-5" method="POST" action="/">
  <div className="form-group">
  <h1>New Artists</h1>
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" name="name"/>
    </div>
  <div className="form-group">
    <label htmlFor="photo_url">Photo URL</label>
    <input type="text" className="form-control" name="photo_url"/>
    </div>
  <div className="form-group">
    <label htmlFor="nationality">Nationality</label>
    <input type="text" className="form-control" name="nationality"/>
    </div>
     <div className="d-flex flex-row-reverse">
    <button type="submit" className="btn btn-primary btn-customized">Add</button>
    </div>
    </form>
    </div>
    </div>
    </div>
        </DefaultLayout>
    );
  }
}

module.exports = New;