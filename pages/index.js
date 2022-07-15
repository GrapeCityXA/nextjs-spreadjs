import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const OnlineSpread = dynamic(() => import('../components/OnlineSpread.js'),{
  ssr: false
})

const OnlineDesigner = dynamic(() => import('../components/OnlineDesigner.js'),{
  ssr: false
})

export default function Home() {
  return (
    <div>
        <Head>
          <title>Nextjs-SPreadJS</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
       <OnlineSpread/>
       {/* <OnlineDesigner/> */}
    </div>
      
  )
}
