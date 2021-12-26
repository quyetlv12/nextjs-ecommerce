import { useRouter } from "next/router"

export default function Home() {
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
            trang chu
           { arr.map((_elt,index) => (
                <div>{_elt?.name}</div>
           ))}
        </div>
    )
}

