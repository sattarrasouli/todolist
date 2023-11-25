"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import './styles.scss';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [])

  return (
    <main >
      <p>Todo List, please wait...</p>
    </main >
  )
}
