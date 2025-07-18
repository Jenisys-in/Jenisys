import dynamic from 'next/dynamic'
 
const HomepageCSR = dynamic(() => import('./HomepageCSR'), { ssr: false })
 
export default function Home() {
  return <HomepageCSR />
}