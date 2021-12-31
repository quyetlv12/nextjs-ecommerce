import { useRouter } from "next/router";

const Products = () => {
    const router = useRouter()
    const { slug } = router.query
    console.log(slug);
    return (
        <div>
            trang slug
            <button onClick={() => router.push("/home")}>chuyển hướng</button>
        </div>
    )
}

export default Products
