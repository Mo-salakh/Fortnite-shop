function Footer() {
  return (
    <footer className="page-footer teal darken-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} All rights saved
          <a className="grey-text text-lighten-4 right" href="#!">
            Repository
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
