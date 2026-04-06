const Filters = ({ search, setSearch, category, setCategory }) => {
  return (
    <div className="mb-12">
      <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center justify-between">

        
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            value={search}
            placeholder="Search products..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-400 outline-none transition"
          />
          <span className="absolute left-4 top-3 text-gray-400">
            🔍
          </span>
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-auto px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-400 outline-none transition"
        >
          <option value="All">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Analytics">Analytics</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;