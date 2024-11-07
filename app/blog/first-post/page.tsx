// pages/blog.js

import Head from 'next/head';

export default function BlogPost() {
  const post = {
    title: "Exploring the Future of AI in Everyday Life",
    author: "Jane Doe",
    date: "November 6, 2024",
    content: `
      Artificial Intelligence (AI) has been a significant driver of technological growth in recent years, and its impact on everyday life is becoming more profound. From healthcare and finance to personal assistants and home automation, AI is increasingly embedded in our lives. In this blog post, we explore the current and future impact of AI across different domains.

      ### AI in Healthcare
      In healthcare, AI assists doctors with more accurate diagnoses and risk assessments, and AI-powered tools are being used to streamline hospital operations. The potential for personalized medicine and AI-driven drug development holds promise for the future.

      ### AI in Finance
      The financial sector uses AI to make smarter investment decisions, detect fraud, and offer personalized financial advice. With AI-driven apps and tools, managing personal finance has never been easier.

      ### AI in Everyday Life
      Common AI applications, like virtual assistants (Siri, Alexa) and smart home devices, make daily tasks easier. As these technologies improve, we might soon see robots assisting with household chores.

      While AI offers significant benefits, it also raises ethical and privacy questions. As we move forward, balancing AI advancements with responsible use will be crucial.

      **What are your thoughts on the future of AI? Let us know below!**
    `,
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="A blog post exploring the future of AI in everyday life." />
      </Head>
      <article style={{ maxWidth: '600px', margin: '0 auto' }}>
        <header>
          <h1>{post.title}</h1>
          <p>By <strong>{post.author}</strong> | {post.date}</p>
        </header>
        <section style={{ lineHeight: '1.6', marginTop: '1rem' }}>
          {post.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} style={{ marginBottom: '1rem' }}>{paragraph}</p>
          ))}
        </section>
      </article>
    </div>
  );
}
