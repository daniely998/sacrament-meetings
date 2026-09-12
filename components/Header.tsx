import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
    return (
        <header className="bg-gray-800 text-white py-4 shadow-md">
            <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <div id="header-title" className="text-2xl font-bold">Ward Name</div>
                <div>{new Date().toISOString().split("T")[0]}</div>
                <nav>
                    <ul className="flex gap-6">
                        <NavLinks />
                    </ul>
                </nav>
            </div>
        </header>
    );
}