'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Example from './features/form/ui/example'
import GreedyExample from './features/form/ui/greedyExample'
import { Container } from './features/builder/components/container';
import { FromDnd } from './features/form_dnd/from_dnd';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <div>
          <DndProvider backend={HTML5Backend}>
            <GreedyExample />
          </DndProvider>
        </div>
        <div>
          <DndProvider backend={HTML5Backend}>
            <Container></Container>
          </DndProvider>
        </div>
        <div>
          <DndProvider backend={HTML5Backend}>
            <Example />
          </DndProvider>
        </div>
      </div>
      <FromDnd></FromDnd>
    </main>
  )
}
