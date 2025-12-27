import React from 'react';
import { products } from '../constants/data';
import { Box, Table, Image, Link } from '@chakra-ui/react';
import { product } from '@/types';

export default function Index() {
	return (
		<Box px={'4'} py={'2'}>
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Cell textAlign={'center'}>No</Table.Cell>
						<Table.Cell>Image</Table.Cell>
						<Table.Cell>Name</Table.Cell>
						<Table.Cell>Name KH</Table.Cell>
						<Table.Cell textAlign={'center'}>Batch Size</Table.Cell>
						<Table.Cell textAlign={'center'}>Price (RMB)</Table.Cell>
						<Table.Cell textAlign={'center'}>Est.Price</Table.Cell>
						<Table.Cell textAlign={'center'}>Est.Price (USD)</Table.Cell>
						<Table.Cell>Description</Table.Cell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{products.length > 0 &&
						products.map(((product: product, i: number) =>
							<Table.Row>
								<Table.Cell textAlign={'center'} w={'100px'}>{i + 1}</Table.Cell>
								<Table.Cell w={'100px'}>
									<Image borderRadius={'5px'} h={'70px'} src={product.image} />
								</Table.Cell>
								<Table.Cell>
									<Link href={product.link} target={'_blank'}>
										{product.name}
									</Link>
								</Table.Cell>
								<Table.Cell>{product.nameKh}</Table.Cell>
								<Table.Cell textAlign={'center'} w={'150px'}>{product.batch_size}</Table.Cell>
								<Table.Cell textAlign={'center'} w={'150px'}>{product.price} ¥</Table.Cell>
								<Table.Cell textAlign={'center'} w={'150px'}>{(product.price / product.batch_size).toFixed(3)} ¥</Table.Cell>
								<Table.Cell textAlign={'center'} w={'150px'}>{(product.price / product.batch_size * 0.14).toFixed(3)} $</Table.Cell>
								<Table.Cell>{product.description}</Table.Cell>
							</Table.Row>
						))}
				</Table.Body>
			</Table.Root>
		</Box>
	);
}
