import Link from "next/link";


export interface BlogInterface {
  id: string;
  title: string;
  summary?: string;
  content?: string;
}
const blogs: BlogInterface[] = [
  { id: "1", title: "Getting Started with Next.js", summary: "Learn how to create your first Next.js app." },
  { id: "2", title: "Understanding Static Generation", summary: "Discover how Next.js pre-renders pages." },
  { id: "3", title: "Deploying a Next.js App", summary: "Step-by-step guide to deployment on Vercel." },
];

export default function BlogPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
      <div className="space-y-6">
        {blogs.map((post) => (
          <div key={post.id} className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-3">{post.summary}</p>
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
