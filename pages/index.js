import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import getGithubRepositories from '../lib/get-github-repositories'
import { DEFAULT_DATA } from '../lib/consts'
export default function Home({repos = []}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
      <ul> 
      {
        repos.map((repo,id) => {

          return <li key={id}>
            <Link href={repo.url.startsWith('http') ? repo.url : 'https://github.com' + repo.url}>
            <span style={{display:'flex', flexDirection: 'column'}}>
              <div><a>{repo.name}</a>  <b className='language'>{repo.language}</b></div>
              <p className='desc'>
                {repo.desc}
              </p>
            </span>
        </Link>
          </li>

        })
      }
      </ul>
        
      </section>
    </Layout>
  )
}

const fetchingFailed = (err) => {
  console.log('fetching failed', err)
  return DEFAULT_DATA
}

export async function getStaticProps() {
  const data = await getGithubRepositories(process.env.USERNAME).catch(fetchingFailed)
  return {
      props: {
          repos: data
      }
  }
}