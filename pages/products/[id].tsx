import { useRouter } from 'next/router'
const Products = () => {
    const router = useRouter()
  const { id } = router.query
  console.log(id);
    return (
        <div>
            <span className='bg-red-400'>trang chi tiet san pham</span>
        </div>
    )
}

export default Products
