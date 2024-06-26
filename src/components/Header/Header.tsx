import dynamic from 'next/dynamic';
const HeaderUser = dynamic(() => import('../HeaderUser'), { ssr: false });

const Header = () => {
  return (
    <nav className="mb-3 flex flex-wrap items-center justify-between bg-blue-600 p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <span className="text-xl font-semibold tracking-tight">
          Bubbly Clouds
        </span>
      </div>
      <div className="block flex flex-grow items-center">
        <div className="flex-grow text-sm">
          <a
            href="/"
            className="mr-4 mt-0 block inline-block text-blue-200 hover:text-white"
          >
            Home
          </a>
        </div>
        <div className="min-h-10">
          <HeaderUser />
        </div>
      </div>
    </nav>
  );
};

export default Header;
