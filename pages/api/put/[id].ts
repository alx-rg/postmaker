import prisma from "../../../lib/prisma";

// Update

export default async function handle(req, res) {
  // const postId = req.query.id;
  // const updatedData = req.body;
  const updatedData = req.body;
  if (req.method === 'UPDATE') {
    const post = await prisma.post.update({
      where: { id:updatedData.id },
      data: {
        title: updatedData.title,
        content: updatedData.content,
        author: { connect: { email: updatedData.session?.user?.email } },
      },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method not supported for this route.`,
    );
  }
}