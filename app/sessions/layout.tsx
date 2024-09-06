import Navbar from '../dashboard/components/Navbar';
import Sidebar from '../dashboard/components/Sidebar';

export default function SessionsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="p-6 bg-gray-100">{children}</main>
            </div>
        </div>
    );
}
