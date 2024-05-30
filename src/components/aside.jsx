function Aside() {
    return(
    <div className="col-sm-4">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div className="fakeimg">Fake Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3 className="mt-4">Categorias</h3>

      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">Arroces</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sopas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Patas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Postres</a>
        </li>
      </ul>
      <hr className="d-sm-none" />
    </div>
    );
}

export default Aside;