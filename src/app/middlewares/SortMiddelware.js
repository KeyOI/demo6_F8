module.exports = function SortMiddelware (req,res,next){

    // khởi tạo mặc định cho middelware sort 
    // enable =>  chưa kích hoạt middelware
    // type => sort theo dạng mặc định (default)
    res.locals._sort = {
        enabled: false,
        type: 'default',
        column: 'name'
    }

    // nếu cái query này tồi tại cái property '_sort ' thì thực hiện middelware này
    if(req.query.hasOwnProperty("_sort")){
        // res.locals._sort.enabled = true
        // res.locals._sort.type = req.query.type
        // res.locals._sort.column = req.query.column

        // các viết khác của biến object 
        Object.assign(res.locals._sort,{
            enabled: true,
            // lấy giá trị trong query (trên url ) chuyền vào 
            type: req.query.type,
            column: req.query.column,

        }) 

    }



    next();
}