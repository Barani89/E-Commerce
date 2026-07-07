export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/70 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 NovaCart. Premium shopping, simplified.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-600">Privacy</a>
          <a href="#" className="hover:text-brand-600">Terms</a>
          <a href="#" className="hover:text-brand-600">Support</a>
        </div>
      </div>
    </footer>
  );
}
