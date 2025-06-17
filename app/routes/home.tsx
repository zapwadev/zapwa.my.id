import { Welcome } from '../welcome/welcome'

export function meta() {
  return [
    { title: 'Coming Soon - ZapWA.my.id' },
    { name: 'description', content: 'ZapWA is launching soon!' },
  ]
}

export default function Home() {
  return <Welcome />
}
