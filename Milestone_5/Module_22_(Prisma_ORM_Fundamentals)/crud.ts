import { prisma } from "./lib/prisma";

async function run() {
  //* CREATE USER
  const createUser = await prisma.user.create({
    data: {
      name: 'EVO',
      email: 'evo@gmail.com',
      role: 'ADMIN'
    }
  })
  console.log("Created User : ", createUser);

  //* CREATE POST for ID = 1
  const createPost = await prisma.post.create({
    data: {
      title: 'This is a CRUD title',
      content: 'This is a content of CRUD title',
      authorId: 1
    }
  })

  //* CREATE PROFILE
  const createProfile = await prisma.profile.create({
    data: {
      bio: 'Lets learn Prisma',
      userId: 1
    }
  })
  console.log("Created Profile, ", createProfile)

  //? Retrive all user data
  const users = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true
    },
    // select: {
    //   id: true,
    //   email: true,
    //   name: true,
    //   posts: true,
    //   profile: true
    // }
  });
  console.log(users);
  console.table(users);
  console.dir(users, { depth: Infinity })

  // ? Update data
  const updatedUser = await prisma.user.update({
    where: {
      id: 2
    },
    data: {
      name: "Aman Akhtar",
      email: "amanak@gmail.com"
    }
  })
  console.log(updatedUser)

  //? Delete User
  const deletedUser = await prisma.user.delete({
    where: {
      id: 2
    }
  })
  console.log(deletedUser);

  //? Upsert User
  const upsertUser = await prisma.user.upsert({
    where: {
      email: 'fresh@gmail.com'
    },
    update: {
      name: 'Fresh'
    },
    create: {
      name: 'Fresh',
      email: 'fresh@gmail.com',
      role: "USER"
    }
  })
  console.table(upsertUser);



}

run()