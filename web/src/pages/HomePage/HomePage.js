import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>
        <Link to={routes.home()}>My Redwood App</Link>
      </h1>
      <p>i liek chimken nuggets</p>
      <p>
        Click this link to go to Posts page `
        <Link to={routes.posts()}>Posts</Link>`
      </p>
    </>
  )
}

export default HomePage
