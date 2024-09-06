import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar>
      <Navbar />
      <div className="p-5">{children}</div>
    </Sidebar>
  );
}
