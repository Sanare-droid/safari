// src/app/blog/page.tsx
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');
  let postFolders: string[] = [];
  try {
    postFolders = fs.readdirSync(postsDirectory, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  } catch (error) {
    console.error("Could not read posts directory:", postsDirectory, error);
    return [];
  }

  const postsData = postFolders.map((folderName) => {
    const mdxFilePath = path.join(postsDirectory, folderName, 'page.mdx');
    if (!fs.existsSync(mdxFilePath)) {
      console.warn(`page.mdx not found in ${folderName}`);
      return null;
    }
    const fileContents = fs.readFileSync(mdxFilePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: folderName, // The folder name is the slug
      title: data.title || 'Untitled Post',
      // Format date nicely, handle potential invalid date strings
      date: data.date ? new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'No date',
      excerpt: data.excerpt || '',
    };
  });

  const validPosts = postsData.filter(post => post !== null) as Post[];

  // Sort posts by date, most recent first
  validPosts.sort((a, b) => {
    // Handle "No date" strings or invalid dates by pushing them to the end
    if (a.date === 'No date' && b.date === 'No date') return 0;
    if (a.date === 'No date') return 1;
    if (b.date === 'No date') return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return validPosts;
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  if (!posts.length) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-pink-700">Poured Petals Blog</h1>
        </header>
        <div className="bg-white p-10 rounded-lg shadow-xl text-center max-w-md mx-auto">
          <p className="text-xl text-gray-500">No blog posts found. Check back soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-pink-700">Poured Petals Blog</h1>
        <p className="text-xl text-gray-600 mt-3">Inspiration, tips, and stories from our floral world.</p>
      </header>
      <div className="max-w-3xl mx-auto space-y-10">
        {posts.map((post) => (
          post && // ensure post is not null (already filtered but good practice)
          <article key={post.slug} className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <header>
              <h2 className="text-3xl font-semibold text-pink-600 mb-2 hover:text-pink-700 transition-colors duration-300">
                <Link href={`/blog/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            </header>
            <p className="text-gray-700 leading-relaxed mb-6">{post.excerpt}</p>
            <Link href={`/blog/posts/${post.slug}`} className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold transition-colors duration-300 group">
              Read More
              <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
