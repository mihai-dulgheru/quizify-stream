import prisma from '@/prisma/client';
import { compareSync } from 'bcryptjs';
import { cookies } from 'next/headers';

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (user && compareSync(password, user.password)) {
      delete user.password;
      cookies().set('user', JSON.stringify(user), {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/', // the cookie is available to all the pages
      });
      return new Response(
        JSON.stringify({ message: 'Login successful', user }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Invalid email or password' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
