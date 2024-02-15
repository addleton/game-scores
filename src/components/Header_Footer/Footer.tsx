export const Footer: React.FC = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-20">
      <aside className="items-center grid-flow-col">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        ></svg>
        <img src="/rawg.png" alt="" width="36" height="36" />
        <p>
          This website uses data from RAWG.io API.
          <br />
          Powered by RAWG.io. Visit their website at{" "}
          <a href="https://rawg.io" target="_blank" rel="noopener noreferrer">
            rawg.io
          </a>
          .
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.github.com/addleton">
          <img src="/github-mark-white.svg" alt="" width="36" height="36" />
        </a>
      </nav>
    </footer>
  );
};
