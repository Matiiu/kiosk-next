import { type Category } from '@prisma/client';
import { prisma } from '@/src/lib/prisma';
import ProductCard from '@/components/products/ProductCard';
import Heading from '@/components/ui/Heading';

type OrderPageProps = {
	params: Promise<{ category: Category['slug'] }>;
};

async function getProducts(category: Category['slug']) {
	try {
		const products = await prisma.product.findMany({
			where: { category: { slug: category } },
		});
		return products;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export default async function OrderPage({ params }: OrderPageProps) {
	const { category } = await params;
	const products = await getProducts(category);

	return (
		<>
			<Heading>Elige y personaliza tu pedido a continuación</Heading>
			<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</>
	);
}