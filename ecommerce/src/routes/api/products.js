const express = require('express')
const router = express.Router()
const ProductsService = require('../../services/products')

const ProductService = new ProductsService()

router.get('/', async (req, res, next) => {
  const { tags } = req.query
  try {
    const products = await ProductService.getProducts({ tags })
    res.status(200).json({
      data: products,
      message: 'products listed',
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:productId', async (req, res, next) => {
  const { productId } = req.params
  try {
    const product = await ProductService.getProduct({ productId })
    res.status(200).json({
      data: product,
      message: 'product retrieved',
    })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  const { body: product } = req
  try {
    const createdProduct = await ProductService.createProduct({ product })
    res.status(201).json({
      data: createdProduct,
      message: 'product created',
    })
  } catch (error) {
    next(error)
  }
})

router.put('/:productId', async (req, res, next) => {
  const { productId } = req.params
  const { body: product } = req

  try {
    const updatedProduct = await ProductService.updateProduct({
      productId,
      product,
    })

    res.status(200).json({
      data: updatedProduct,
      message: 'products updated',
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/:productId', async (req, res, next) => {
  const { productId } = req.params
  try {
    const product = await ProductService.updateProduct({ productId })

    res.status(200).json({
      data: product,
      message: 'products deleted',
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
