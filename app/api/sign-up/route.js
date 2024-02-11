import prisma from '@/prisma/client';
import { hashSync } from 'bcryptjs';
import { cookies } from 'next/headers';

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      return new Response(JSON.stringify({ message: 'User already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const newUser = await prisma.user.create({
      data: { email, password: hashSync(password) },
    });

    delete newUser.password;
    cookies().set('user', JSON.stringify(newUser), {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/', // the cookie is available to all the pages
    });

    return new Response(
      JSON.stringify({ message: 'Signup successful', newUser }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
