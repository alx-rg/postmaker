import prisma from "../../../lib/prisma";

// Update

export default async function handle(req, res) {
  // const postId = req.query.id;
  // const updateMD = req.body;
  const updateMD = req.body;
  if (req.method === 'UPDATE') {
    const post = await prisma.post.update({
      where: { id:updateMD.id },
      data: {
        title: updateMD.title,
        content: updateMD.content,
        author: { connect: { email: updateMD.session?.user?.email } },
      },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method not supported for this route.`,
    );
  }
}