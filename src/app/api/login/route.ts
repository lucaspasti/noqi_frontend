import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // NOTE: The external API URL should be in an environment variable
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // The token should be handled securely (e.g., in an httpOnly cookie)
      // For now, just returning it in the response
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ message: data.message || 'Erro no login' }, { status: response.status });
    }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ message: 'An internal server error occurred' }, { status: 500 });
  }
}