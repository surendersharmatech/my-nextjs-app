import Link from "next/link";

const blogPosts = [
  { id: "1", title: "Getting Started with Next.js", summary: "Learn how to create your first Next.js app." },
  { id: "2", title: "Understanding Static Generation", summary: "Discover how Next.js pre-renders pages." },
  { id: "3", title: "Deploying a Next.js App", summary: "Step-by-step guide to deployment on Vercel." },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

// ✅ FIX: Make the component async and await the params
export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    return <h1>404 - Blog Not Found</h1>;
  }

  return (
    <div style={{ padding: "2rem" }}>
        <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
      <div className="space-y-6">
          <div key={post.id} className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-3">{post.summary}</p>
          </div>
      </div>
      <Link href="/blog" style={{ color: "blue" }}>
        ← Back to Blog List
      </Link>
    </div>
  );
}
