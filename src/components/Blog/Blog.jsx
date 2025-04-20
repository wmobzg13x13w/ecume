import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.blogs);
        if (slug) {
          const blog = data.blogs.find((b) => b.slug === slug);
          setCurrentBlog(blog);
        }
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des blogs:", error)
      );
  }, [slug]);

  if (slug && !currentBlog) {
    return (
      <div className='py-20 px-4 text-center'>
        <h2 className='text-2xl font-bold mb-4'>Article non trouvé</h2>
        <Link to='/blog' className='text-blue-600 hover:text-blue-800'>
          ← Retour aux articles
        </Link>
      </div>
    );
  }

  if (slug && currentBlog) {
    return (
      <section className='py-20 px-4 bg-cream'>
        <div className='max-w-4xl mx-auto'>
          <Link
            to='/blog'
            className='inline-block mb-8 text-blue-600 hover:text-blue-800'>
            ← Back to all blogs
          </Link>
          <article data-aos='fade-up'>
            <h1 className='text-4xl font-bold mb-8 text-center'>
              {currentBlog.title}
            </h1>
            {currentBlog.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className='mb-10 last:mb-0'
                data-aos='fade-up'
                data-aos-delay={sectionIndex * 100}>
                <h2 className='text-2xl font-semibold mb-4 text-black'>
                  {section.title}
                </h2>
                <div className='w-16 h-1 bg-yellow mb-6'></div>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className='text-gray-700 leading-relaxed mb-4 last:mb-0 text-lg'>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </article>
        </div>
      </section>
    );
  }

  return (
    <section className='py-20 px-4 bg-cream'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold mb-12 text-center'>Our Blogs</h1>
        <div className='grid gap-8 md:grid-cols-2'>
          {blogs.map((blog) => (
            <Link
              to={`/blog/${blog.slug}`}
              key={blog.id}
              className='block hover:transform hover:scale-105 transition-transform duration-300'
              data-aos='fade-up'>
              <article className='bg-white rounded-lg shadow-lg p-6 h-full'>
                <h2 className='text-2xl font-semibold mb-4 text-black'>
                  {blog.title}
                </h2>
                <div className='w-16 h-1 bg-yellow mb-6'></div>
                <p className='text-gray-700 line-clamp-3'>
                  {blog.sections[0].paragraphs[0]}
                </p>
                <span className='text-blue-600 mt-4 inline-block hover:text-blue-800'>
                  Read more →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
