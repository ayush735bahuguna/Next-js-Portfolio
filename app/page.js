import Projects from '@/components/projects/Projects'
import Skills from '@/components/skills/Skills'
import Cursor from '@/components/Cursor/Cursor'
import Hero from '@/components/Hero/Hero'
export default function page() {


  return (
    <main>
      <Cursor />
      <Hero />
      <Skills />
      <Projects />
    </main>
  )
}
