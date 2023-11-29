const Product = require('../models/product')

const getAllProducts = async (req,res) => {
    // throw new Error('testing route')
    
    const {featured, company, name, sort, fields, numericFilters} = req.query
    const queryObject = {}

    if(featured) {

        queryObject.featured = featured === 'true' ? true: false

    }

    if(company) {

        queryObject.company = company

    }

    if(name) {

        queryObject.name = {$regex: name, $options: 'i'}

    }

    if (numericFilters) {

        const operatorMaps = {

            '>':"$gt",
            '>=':"$gte",
            '=':"$eq",
            '<':"$lt",
            '<=':"$lte"

        }

        const regEX = /\b(<|>|>=|<=|=)\b/g
        let filters = numericFilters.replace(regEX,(match) => `-${operatorMaps[match]}-`)
        console.log(filters)

        filters = filters.split(',').forEach(item => {
            const options= ['price','rating']
           const [field,operator,value] = item.split('-') 
           if(options.includes(field)) {
            queryObject[field] = {[operator]: Number(value)}
           }
           
        });
        

    }

    let result = Product.find(queryObject)

    if(sort) {

        let sortList = sort.split(',').join(' ')
        result = result.sort(sortList)

    } 
    else {

        result = result.sort('createAt')

    }

    if(fields) {

        let fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)

    }

    
     console.log(queryObject)
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit
    result = result.skip(skip).limit(limit)

    const products = await result
    res.status(200).json( { products, nbHits:products.length } )

} 

const getAllProductsStatic = async (req,res) => {

    // const products = await Product.find({featured:true})
    // const products = await Product.find({})
    const products = await Product.find({name:"entertainment center"})
    // console.log(products)
    res.status(200).json( { products, nbHits:products.length } )

}


module.exports = {

    getAllProducts,
    getAllProductsStatic

}