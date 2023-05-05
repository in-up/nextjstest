export default function Home() {
  // server start - npm run dev
  let name = 'Ahn'
  let age = '23'
  let link = '/list'
  return (
    <div className="main">
      <h1 className="f-logo">🌓</h1>
      <h3 className="f-description">in-up ({name}, {age})</h3>
      <div className="f-link" ><a href={link} style={{color:'black', textDecoration: 'none'}}>SHOP</a></div>
    </div>
  )
}
