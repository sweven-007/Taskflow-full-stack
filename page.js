"use client";
import { useState } from 'react';

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [tasks] = useState([
    { id: 1, title: "Database Schema Design", status: "Completed", category: "Backend" },
    { id: 2, title: "JWT Auth Integration", status: "In Progress", category: "Security" },
    { id: 3, title: "Responsive Dashboard UI", status: "Pending", category: "Frontend" },
  ]);

  const filtered = tasks.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 shadow-2xl">
        <h1 className="text-2xl font-bold mb-10 text-blue-400">TaskFlow</h1>
        <nav className="space-y-4">
          <div className="bg-slate-800 p-3 rounded-xl cursor-pointer">Dashboard</div>
          <div className="p-3 hover:bg-slate-800 rounded-xl transition cursor-pointer">Profile</div>
          <div className="p-3 text-red-400 hover:bg-red-900/20 rounded-xl transition cursor-pointer mt-20">Logout</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Overview</h2>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search tasks..." 
              className="pl-4 pr-4 py-2.5 rounded-2xl border border-gray-200 shadow-sm w-80 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </header>

        {/* Task Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(task => (
            <div key={task.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{task.category}</span>
              <h3 className="text-lg font-bold text-slate-700 mt-4 mb-2">{task.title}</h3>
              <p className="text-sm text-slate-400">Status: <span className="text-slate-600">{task.status}</span></p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}