import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Link2 } from 'lucide-react';
import { blogs } from '../components/Blogs';

export function BlogsPage() {
  return (
    <main className="pt-24 bg-white min-h-screen text-zinc-900 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="mb-16 border-b-2 border-red-600 inline-block pb-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter uppercase">
            All <span className="text-red-600">Blogs</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => {
            const isInternal = blog.url.startsWith('/');
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group flex flex-col bg-zinc-50 rounded-2xl overflow-hidden shadow-lg border border-zinc-200 hover:shadow-2xl transition-all hover:-translate-y-1 h-full"
              >
                {isInternal ? (
                  <Link to={blog.url} className="flex flex-col h-full">
                    <BlogCardContent blog={blog} />
                  </Link>
                ) : (
                  <a href={blog.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                    <BlogCardContent blog={blog} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function BlogCardContent({ blog }: { blog: typeof blogs[0] }) {
  return (
    <>
      <div className="relative h-64 sm:h-56 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      <div className="flex flex-col flex-1 p-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold font-heading uppercase leading-tight mb-4 text-black group-hover:text-red-600 transition-colors">
            {blog.title}
          </h3>
          <p className="text-zinc-600 mb-8 line-clamp-3">
            {blog.desc}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-200">
          <div className="flex items-center gap-2 text-zinc-500 font-bold text-sm">
            <span className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center">
              📅
            </span>
            {blog.date}
          </div>
          <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-black group-hover:text-red-600 transition-colors">
            Read More <Link2 className="w-4 h-4" />
          </div>
        </div>
      </div>
    </>
  );
}
