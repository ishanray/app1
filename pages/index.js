import Header from '../components/header'
import Link from 'next/link'

export default () =>
<div>
    <Header />
    <p>Welcome to next.js!</p>
    <Link href="/login"><a>login</a></Link>
</div>
