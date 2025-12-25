import { prisma } from "./lib/prisma";

async function run() {
  // CREATE USER
  // const createUser = await prisma.user.create({
  //   data: {
  //     name: 'EVO',
  //     email: 'evo@gmail.com',
  //     role: 'ADMIN'
  //   }
  // })
  // console.log("Created User : ", createUser);

  // CREATE POST for ID = 1
  const createPost = await prisma.post.create({
    data: {
      title: 'This is a CRUD title',
      content: 'This is a content of CRUD title',
      authorId: 1
    }
  })

}

run()