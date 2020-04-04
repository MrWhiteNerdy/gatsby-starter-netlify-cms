import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="has-text-centered">
      <p>Rachel Davis &copy; {new Date().getFullYear()}</p>
      <p>
        Favicon made by{' '}
        <a
          href="https://www.flaticon.com/authors/photo3idea-studio"
          title="photo3idea_studio">
          photo3idea_studio
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {' '}
          www.flaticon.com
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
