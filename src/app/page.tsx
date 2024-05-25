export default function Home() {
  return (
    <div className="container mx-auto my-10 max-w-xl">
      <p>
        Welcome to Bubbly Clouds. By signing in you can access a range of web
        services created by <a href="https://jamesacres.co.uk">James Acres</a>.
      </p>

      <h2 className="mt-4 text-lg">Services</h2>
      <div className="my-12 grid w-full max-w-5xl grid-cols-1 text-center">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 font-semibold">
            Sudoku{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50">Coming soon</p>
        </div>
      </div>

      <h2 className="mt-4 text-lg">History</h2>
      <p className="mt-4">
        Between October 2013 and September 2021 we previously offered web
        hosting, SSL and domain names to various local businesses across the
        South of England with PHP, Node.js, Python, Perl and more with the
        industry leading cPanel and WHM.
      </p>
    </div>
  );
}
