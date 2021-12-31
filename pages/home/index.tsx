import Link from "next/link";
import { useRouter } from "next/router"
function Home() {
    const router = useRouter()
    const {query : id} = router
    console.log(id);
    
    const arr = [
        {
            name : "lee quyet",
            id : 1
        }
    ]
    return (
        <div>
           { arr.map((_elt,index) => (
                <div>{_elt?.name}</div>
           ))}
           <Link href={"/products"}>
           <a>Trang sản phẩm</a>
           </Link>
        </div>
    )
}
export default Home
