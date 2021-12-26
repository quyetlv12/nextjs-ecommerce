import { useRouter } from "next/router";

const Products = () => {
    const router = useRouter()
    const { slug } = router.query
    console.log(slug);
    return (
        <div>
            trang slug
        </div>
    )
}

export default Products
