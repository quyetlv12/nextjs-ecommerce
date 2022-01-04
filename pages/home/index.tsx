import Link from "next/link";
import { useRouter } from "next/router"
function Home() {
    const router = useRouter()
    const {query : id} = router
    return (
        <div>
           <Link href={"/products"}>
           <a>Trang sản phẩm</a>
           </Link>
        </div>
    )
}
export default Home
