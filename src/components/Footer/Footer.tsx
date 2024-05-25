import Link from 'next/link';

const Footer = () => {
  return (
    <div className="mb-4 mt-12 grid w-full max-w-5xl grid-cols-2 text-center">
      <Link
        href="/terms"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className="mb-3 font-semibold">
          Terms{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 text-sm opacity-50">Our terms and conditions</p>
      </Link>

      <Link
        href="/privacy"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className="mb-3 font-semibold">
          Privacy{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 text-sm opacity-50">Our privacy policy</p>
      </Link>
    </div>
  );
};

export default Footer;
