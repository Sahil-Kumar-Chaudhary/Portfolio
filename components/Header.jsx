import Link from "next/link";



const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider">
            SAHIL<span className="text-accent">.</span>
          </Link>

          {/* socials */}
        </div>
      </div>
    </header>
  );
};

export default Header;
