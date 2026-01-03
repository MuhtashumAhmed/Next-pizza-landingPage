const Footer = () => {
  return (
    <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center gap-2">
        
        {/* Brand */}
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          🍕 PizzaHub
        </h3>

        {/* Tagline */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
          Freshly baked pizzas, made with love.
        </p>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-orange-500/40 my-2" />

        {/* Copyright */}
        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} PizzaHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
