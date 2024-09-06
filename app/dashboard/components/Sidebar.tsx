import Link from 'next/link';

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <ul className="menu bg-base-200 text-base-content min-h-full w-44 p-4">
          {/* Sidebar content here */}
          <li>
            <div className="text-xl font-bold p-0">MENU</div>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Peserta</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
